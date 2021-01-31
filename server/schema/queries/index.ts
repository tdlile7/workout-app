import { GraphQLObjectType } from "graphql";
import { getNutrition } from "./nutrition";

export const query = new GraphQLObjectType({
    name: "Query",
    description: "Parent query node",
    fields: {
        getNutrition,
    }
});