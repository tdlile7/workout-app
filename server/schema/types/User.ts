import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { GymLockerDb } from "../../services/GymLockerDb";


export const User = new GraphQLObjectType<GymLockerDb.UserDBO>({
    name: "User",
    description: "Single user",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: "ID of the user.",
            resolve: ({ _id }) => _id,
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString),
            description: "First name of the user.",
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Last name of the user.",
        },
        email: {
            type: GraphQLString,
            description: "Email of the user.",
        },
    }
});