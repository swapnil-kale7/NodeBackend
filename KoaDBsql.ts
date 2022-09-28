import * as koa from "koa";
import * as dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();
const app=new koa();

//connext to database
const pool=new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized:false
    }
});

app.use(async ctx=>{
    await pool.connect();
    const output = await pool.query("select * from hotels");
    ctx.response.body=output;
})

app.listen(process.env.PORT || 3005,()=>console.log("koasql is running"))