import { createTRPCRouter } from "~/server/api/trpc";
import { routineRouter } from "./routers/routine";
import { userRouter } from "./routers/user";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  routine: routineRouter,
  user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
