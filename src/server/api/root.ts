import { createTRPCRouter } from "~/server/api/trpc";
import { exerciseRouter } from "./routers/exercise";
import { userRouter } from "./routers/user";
import { routineRouter } from "./routers/routine";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  exercise: exerciseRouter,
  routine: routineRouter,
  user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
