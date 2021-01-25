import express = require("express");
import cors = require("cors");
import { ApolloServer } from "apollo-server-express";
import { PORT } from "./utils/env";
import { schema } from "./schema";
import * as path from "path";
import * as fs from "fs";

/**
 * Create the Express application instance.
 */
const app = express();

app.use(cors());

/** Set up graphql endpoint */
const server = new ApolloServer({
    schema,
    playground: true,
});

server.applyMiddleware({ app });

app.use(express.static(path.resolve(__dirname, "../public")));

app.use((req, res) => {
    const filePath = path.resolve(__dirname + "/../dist/index.html");
    let html = fs.readFileSync(filePath, "utf8");

    /** API url from which the client will connect. */
    const apiUrl = `${req.protocol}://${req.hostname}${PORT ? `:${PORT}` : ""}`;

    /** Inject environment variables into html that will be sent back to the client. */
    html = html.replace(
        "<var></var>",
        `<script>var API_URL = "${apiUrl}";</script>`,
    );

    res.type("html").send(html);
});

/** Start up server */
app.listen(PORT, () => {
    console.log(`Server starting on PORT: ${PORT}`);
})
