import { GraphQLObjectType, GraphQLString } from "graphql";

export const query = new GraphQLObjectType({
    name: "Query",
    description: "Parent query node",
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => {
                return "Hello World"
            }
        },
    }
});