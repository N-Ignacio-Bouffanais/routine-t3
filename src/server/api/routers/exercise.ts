import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { Exercise } from "@prisma/client";

export const exerciseRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.exercise.findMany();
  }),
  getById: publicProcedure.input(z.object({
      id: z.string(),
    })).query(({ ctx,input }) => {
    return ctx.prisma.exercise.findUnique({
        where: {
          id: input.id
        },
    })
  }),
  // create: protectedProcedure.input(
  //   z.object({
  //       title: z.string().min(1).max(50),
  //       category: z.string().min(4).max(15),
  //   })
  // ),
});
