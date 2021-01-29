import { useQuery } from "@apollo/client";
import React, { ChangeEvent, FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { testResponse, TEST_QUERY } from "../../api/queries/hello";
import { login } from "../../utils/login";

type Props = RouteComponentProps & {};

export const Login: FC<Props> = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { data, loading, error } = useQuery<testResponse>(TEST_QUERY);

    if (loading) {
        return <div>Is still loading</div>;
    } else if (error || !data) {
        return <div>No data found</div>;
    }

    /** Handles updating username input */
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)
    /** Handles updating password input */
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)

    /** Handles submitting loging form */
    const handleSubmit = async () => {
        /** Make the login API call */
        // const response = await fetch(`/auth/login`, {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password })
        // })

        // /** Extract the JWT from the response */
        // const { jwtToken } = await response.json()

        // /** Do something the token in the login method */
        // await login({ jwtToken })
        console.log("USERNAME", username);
        console.log("PASSWORD", password);
        history.push("/home");
    }

    return (
        <div className="Login">
            <div className="Login-Form">
                <div className="Login-Input">
                    <span>Username</span>
                    <input value={username} onChange={handleUsernameChange} />
                </div>
                <div className="Login-Input">
                    <span>Password</span>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="Login-SubmitButton" onClick={handleSubmit}>Submit</div>
            </div>
        </div>
    )
}