import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { Exercise } from "@prisma/client";

const getExercises = publicProcedure.query(({ctx}) => {
  return ctx.prisma.exercise.findMany();
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
  .mutation(({ input, ctx }) => {
    return ctx.prisma.exercise.create({
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
  });

export const exerciseRouter = createTRPCRouter({
  get: getExercises,
});
