import { Config, Context } from "@netlify/functions";
import { CacheHeaders } from "cdn-cache-control";
import etag from "etag";


async function getArticles(username: string) {

  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await fetch('https://www.federatethis.com/api/devto/articles/brob');
  const data = await response.json();
  return data;
  
}


export default async (req: Request, context: Context) => {

  const { username } = context.params;
  const articles = await getArticles(username);
  const headers = new CacheHeaders({
    "etag": etag(JSON.stringify(articles)),
  }).tag("articles", "articles-" + username);

  console.log(headers)
  const response = new Response(JSON.stringify({
    articles,
    username
  }), {
    headers
  });
  return response;
};

export const config: Config = {
  path: "/api/demo/:username"
};