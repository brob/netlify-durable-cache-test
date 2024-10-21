import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
// this works in production, but not locally
// That feels like an error with Netlify CLI
// Locally, the error is TypeError - lambdaFunc[lambdaHandler] is not a function 
  const { city, country } = context.params;

  return new Response(`You're visiting ${city} in ${country}!`);
};

export const config: Config = {
  path: "/travel-guide/:city/:country"
};