import { Config, Context } from "@netlify/functions";
import { CacheHeaders } from "cdn-cache-control";


async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return data[0];
}


export default async (req: Request, context: Context) => {
  const headers = new CacheHeaders().immutable();

  const { slug } = context.params;
  const cat = await getCat();
  // console.log(headers)

  const response = new Response(JSON.stringify({
    cat,
    slug
  }), {
    
    headers
  });
  console.log(response)
  return response;
};

export const config: Config = {
  path: "/api/demo/:slug"
};