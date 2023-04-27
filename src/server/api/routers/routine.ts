import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const getRoutines = publicProcedure.query(async ({ ctx }) => {
  return await ctx.prisma.routine.findMany();
});

const createRoutine = publicProcedure
  .input(
    z.object({
      day: z.string().min(5).max(9),
      routine_name: z.string(),
      authorEmail: z.string().email({ message: "Must be a valid email" }),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const result = await ctx.prisma.routine.create({
      data: {
        day: input.day,
        routineName: input.routine_name,
        user: {
          connect: {
            email: input.authorEmail,
          },
        },
      },
    });
    return result;
  });

export const routineRouter = createTRPCRouter({
  getAll: getRoutines,
  post: createRoutine,
});