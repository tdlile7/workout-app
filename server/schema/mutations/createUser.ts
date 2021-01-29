import { GraphQLError, GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQLContext } from "../..";

type Args = {
    name: string;
    email?: string;
}

export const createUser: GraphQLFieldConfig<null, GraphQLContext, Args> = {
    type: new GraphQLNonNull(GraphQLString),
    description: "Creates a new game from a name, host name, and game config variables.",
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The ID of the game to add this player to.",
        },
        email: {
            type: GraphQLString,
            description: "The ID of the player if already existing.",
        },
    },
    async resolve(_, { name, email }, { mongoDbService }) {
        try {
            await mongoDbService.createUser(name, email);
            return "User was saved into the database successfully!";
        } catch (err) {
            throw new GraphQLError(`Error occurred while adding player to game: ${err}`);
        }
    },
};