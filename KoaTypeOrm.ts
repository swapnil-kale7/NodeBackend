import * as koa from "koa";
import "./createConnection.ts";
import hotels from "./hotels_csv";

const app=new koa();

app.use(async ctx=>{
    ctx.response.body=await hotels.find();
})

app.listen(process.env.PORT || 3005,()=>console.log("orm is runnning fine"));