let inMemoryToken;

export function login({ jwtToken, jwtTokenExpiry }: any) {
    inMemoryToken = {
        token: jwtToken,
        expiry: jwtTokenExpiry
    };
}