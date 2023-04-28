import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const getRoutines = publicProcedure.query(async ({ ctx }) => {
  const routines = await ctx.prisma.routine.findMany({
    where: {
      userId: ctx.session?.user.id
    }
  });
  return routines;
});

const createRoutine = publicProcedure
  .input(
    z.object({
      day: z.string().min(5).max(9),
      routine_name: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const result = await ctx.prisma.routine.create({
      data: {
        day: input.day,
        routineName: input.routine_name,
        user: {
          connect:{
            id: ctx.session?.user.id
          }
        }
      },
    });
    return result;
  });

export const routineRouter = createTRPCRouter({
  getAll: getRoutines,
  post: createRoutine,
});