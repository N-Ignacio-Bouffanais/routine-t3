import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const routineRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.routine.findMany();
  }),
  createOne: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.routine.create({
        data:
    })
  }),
  getOne: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.routine.findUnique({
        where: {}
    })
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
