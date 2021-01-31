import express = require("express");
import cors = require("cors");
import { ApolloServer } from "apollo-server-express";
import { PORT, DB_URI, DATABASE_NAME } from "./utils/env";
import { schema } from "./schema";
import * as path from "path";
import { IGymLockerDb } from "./services/IGymLockerDb";
import { GymLockerDb } from "./services/GymLockerDb";
import { MongoClient } from "mongodb";
import { loadHtmlMiddleware } from "./middleware/loadHtmlMiddleware";
import { INutritionApi } from "./services/INutritionApi";
import { NutritionApi } from "./services/NutritionApi";

export type GraphQlContext = {
    gymLockerDb: IGymLockerDb;
}

async function main() {
    /** Connect to mongodb cluster. */
    const client = new MongoClient(DB_URI, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(DATABASE_NAME);

    const gymLockerDb = new GymLockerDb(db);

    const nutritionApi = new NutritionApi();

    const context: GraphQlContext = {
        gymLockerDb,
    };

    /**
     * Create the Express application instance.
     */
    const app = express();

    app.use(cors());

    /** Set up graphql endpoint */
    const server = new ApolloServer({
        schema,
        playground: true,
        context,
    });

    server.applyMiddleware({ app });

    app.use(express.static(path.resolve(__dirname, "../public")));

    /** Load html template from  */
    app.use(loadHtmlMiddleware);

    /** Start up server */
    app.listen(PORT, () => {
        console.log(`Server starting on PORT: ${PORT}`);
    })
}

main();
