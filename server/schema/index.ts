import { GraphQLSchema } from "graphql";
import { query } from "./queries";
import { mutation } from "./mutations";

export const schema = new GraphQLSchema({
    query,
    mutation
})