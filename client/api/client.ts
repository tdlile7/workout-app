import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// declare let inMemoryToken: any;

/** Define the api url where the graphql calls will be sent. */
const httpLink = new HttpLink({ uri: `${process.env.API_URL}/graphql` });

/** Create auth middleware to concat cached token into every graphql request header. */
// const authMiddleware = new ApolloLink((operation, forward) => {
//     if (inMemoryToken) {
//         operation.setContext({
//             headers: {
//                 Authorization: `Bearer ${inMemoryToken}`,
//             }
//         });
//     }

//     return forward(operation);
// });

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});