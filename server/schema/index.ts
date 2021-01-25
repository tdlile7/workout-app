import { GraphQLSchema } from "graphql";
import { query } from "./queries";

export const schema = new GraphQLSchema({
    query
})