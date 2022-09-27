import { Resolver, Query } from "type-graphql";
import hotels from "./hotels_csv";

@Resolver()
export default class hotelsResolver {
    @Query(() =>[hotels])
    hotels(){
        return hotels.find();
    }
}
