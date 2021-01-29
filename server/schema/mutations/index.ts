import { GraphQLObjectType } from "graphql";
import { GraphQLContext } from "../..";
import { createUser } from "./createUser";

export const mutation = new GraphQLObjectType<null, GraphQLContext>({
    name: "Mutation",
    description: "Top level mutation node.",
    fields: {
        createUser,
    },
});