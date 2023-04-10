import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { Exercise } from "@prisma/client";

const getExercises = publicProcedure.query(async ({ctx}) => {
  return await ctx.prisma.exercise.findMany();
})

const postExercise = publicProcedure
  .input(
    z.object({
      day: z.string().trim().toLowerCase().min(5).max(9),
      nameEx: z.string().min(3),
      reps: z.number().min(3).max(40),
      weight: z.number().min(2).max(150),
      sets: z.number().min(1).max(7),
      authorEmail: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const result = await ctx.prisma.exercise.create({
      data: {
        day: input.day,
        nameEx: input.nameEx,
        reps: input.reps,
        weight: input.weight,
        sets: input.sets,
        user: {
          connect: {
            email: input.authorEmail,
          },
        },
      },
    });
    return result;
  });

const getById = publicProcedure.input(z.object({
    id: z.string()
  })).query(async ({ctx, input})=> {
    try {
      const result = await ctx.prisma.exercise.findUnique({
      where: {
        id: input.id,
      }
    })
    if (!result) throw new Error("Exercise not found");
    return result;
    } catch (error) {
      console.log(error)
    }
  })

const updateExercise = publicProcedure.input(
  z.object({
    id: z.string(),
    day: z.string().trim().toLowerCase().min(5).max(9),
    nameEx: z.string().min(3),
    reps: z.number().min(3).max(40),
    weight: z.number().min(2).max(150),
    sets: z.number().min(1).max(7),
  })
).mutation(async ({ctx, input}) => {
  try {
    const result = await ctx.prisma.exercise.updateMany({
      where: {
        id: input.id,
      },
      data: {
        day: input.day,
        nameEx: input.nameEx,
        reps: input.reps,
        weight: input.weight,
        sets: input.sets,
      }
    })
    if (!result) throw new Error("Exercise not found");
    return result;
  } catch (error) {
    console.error(error);
  }
})

const deleteExercise = publicProcedure
  .input(z.object({
    id: z.string()
  }))
  .mutation(async ({ ctx,input }) => {
    const deletedExercise = await ctx.prisma.exercise.delete({
      where:{
        id: input.id,
      }
    })
    if (!deletedExercise) throw new Error("Exercise not found");
    return true;
  });

export const exerciseRouter = createTRPCRouter({
  get: getExercises,
  create: postExercise,
  delete: deleteExercise,
  update: updateExercise,
  getOne: getById,
});
