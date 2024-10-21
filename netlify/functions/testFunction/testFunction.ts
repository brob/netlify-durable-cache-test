import { Handler, Config } from '@netlify/functions'

export default async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}

export const config: Config = {
  path: "/hello/:name"
};