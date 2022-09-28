import * as koa from "koa";
import { buildSchema } from "type-graphql";
import hotelsResolver from "./hotelsResolver";
import { ApolloServer } from "apollo-server-koa";
import * as Router  from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import "./createConnection.ts";
import * as cors from "@koa/cors";


async function main(){
    const app = new koa();
    
    //now mention the resolvers in your app
    const resolvers = await buildSchema({ resolvers: [hotelsResolver] });
    const appoloServer = new ApolloServer({ schema: resolvers });
    const router=new Router();
    //make graphql work for all types like get put etc.
    router.all("/graphql",graphqlHTTP({schema:resolvers}));
    appoloServer.applyMiddleware({app});
    app.use(cors());
    app.use(router.routes()).use(router.allowedMethods());
    
    app.listen(process.env.PORT || 3005, () => console.log("graphql is runnning fine"))
}
main();
