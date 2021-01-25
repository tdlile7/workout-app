import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { client } from "../api/client";
import { Login } from "../components/Login";
import { HomeView } from "./HomeView";


export const Main: FC = () => {
    console.log("TEST Again, once more. Here we go.");
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={HomeView} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
}