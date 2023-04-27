import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const getRoutines = publicProcedure.query(async ({ ctx }) => {
  return await ctx.prisma.routine.findMany();
});

export const routineRouter = createTRPCRouter({
  getAll: getRoutines,
});