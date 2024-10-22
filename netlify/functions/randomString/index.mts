import { Config, Context } from "@netlify/functions";
import { CacheHeaders } from "cdn-cache-control";
import etag from "etag";


async function getString() {
  // random string generator
  return Math.random().toString(36).substring(7);
  
}


export default async (req: Request, context: Context) => {

  const { slug } = context.params;
  const cat = await getString();
  const headers = new CacheHeaders().immutable();

  console.log(headers)
  const response = new Response(JSON.stringify({
    cat,
    slug
  }), {
    headers
  });
  return response;
};

export const config: Config = {
  path: "/api/random/:slug"
};