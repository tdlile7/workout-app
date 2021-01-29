import { GraphQLObjectType } from "graphql";
import { GraphQlContext } from "../..";
import { createUser } from "./createUser";

export const mutation = new GraphQLObjectType<null, GraphQlContext>({
    name: "Mutation",
    description: "Top level mutation node.",
    fields: {
        createUser,
    },
});