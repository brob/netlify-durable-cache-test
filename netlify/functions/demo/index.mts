import { Config, Context } from "@netlify/functions";
import { CacheHeaders } from "cdn-cache-control";
import etag from "etag";


async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return data[0];
}


export default async (req: Request, context: Context) => {

  const { slug } = context.params;
  const cat = await getCat();
  const headers = new CacheHeaders({  
    "etag": etag(JSON.stringify(cat)),
  }).tag("cats", "cat-" + slug).immutable();

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
  path: "/api/demo/:slug"
};