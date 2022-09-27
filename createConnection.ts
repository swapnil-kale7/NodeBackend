import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import hotels from "./hotels_csv";

dotenv.config();

//createconnection is providedby type orm
createConnection({
    url: process.env.DATABASE_URL,
    entities: [hotels],
    type: "postgres",
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})