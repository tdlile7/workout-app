import { GraphQLError, GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQlContext } from "../..";
import { User } from "../types/User";

type Args = {
    /** First name of the new user. */
    firstName: string;
    /** Last name of the new user. */
    lastName: string;
    /** Password of the new user. */
    password: string;
    /** Email of the first user. */
    email?: string;
}

export const createUser: GraphQLFieldConfig<null, GraphQlContext, Args> = {
    type: new GraphQLNonNull(User),
    description: "Creates a new user.",
    args: {
        firstName: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The first name of the new user.",
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The last name of the new user.",
        },
        email: {
            type: GraphQLString,
            description: "The email of the new user.",
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The password of the new user.",
        },
    },
    async resolve(_, { firstName, lastName, email, password }, { gymLockerDb }) {
        try {
            return await gymLockerDb.createUser({
                firstName,
                lastName,
                password,
                email
            });
        } catch (err) {
            throw new GraphQLError(`Error occurred while storing new user into the database: ${err}`);
        }
    },
};