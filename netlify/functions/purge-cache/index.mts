import { Context, Config } from "@netlify/functions";
import { purgeCache } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  const { username } = context.params;
  if (!username) {
    return;
  }

  console.log("Purging cache for ", username);

  await purgeCache({
    tags: [`article-${username}`],
  });

  return new Response("Purged!", { status: 202 })
};

export const config: Config = {
    path: "/api/purge-cache/:username"
  };