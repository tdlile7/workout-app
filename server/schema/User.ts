import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { MongoDbService } from "../services/MongoDbService";


export const User = new GraphQLObjectType<MongoDbService.UserDBO>({
    name: "User",
    description: "Single user",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Name of the user",
        },
        email: {
            type: GraphQLString,
            description: "Email of the user",
        },
    }
});