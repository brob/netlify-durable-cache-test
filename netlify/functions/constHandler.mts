import type { Context } from "@netlify/functions";

export const handler = async (req: Request, context: Context) => {
  return new Response("Hello, world!")
}