import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

console.log('server running at port 9000')
await app.listen("127.0.0.1:9000");
