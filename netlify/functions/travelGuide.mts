import { Config, Context } from "@netlify/functions";

export const handler = async (req: Request, context: Context) => {
  // context.params is not defined
  const { city, country } = context.params;

  return new Response(`You're visiting ${city} in ${country}!`);
};

export const config: Config = {
  path: "/travel-guide/:city/:country"
};