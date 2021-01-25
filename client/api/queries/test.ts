import { gql } from "@apollo/client";

export type testResponse = {
    data: {
        hello: string;
    }
};

export const TEST_QUERY = gql`
    query {
        hello
    }
`;