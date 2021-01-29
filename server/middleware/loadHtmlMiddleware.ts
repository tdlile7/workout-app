import * as path from "path";
import * as fs from "fs";
import { Request, Response } from "express";
import { PORT } from "../utils/env";

export const loadHtmlMiddleware = (req: Request, res: Response) => {
    const filePath = path.resolve(__dirname + "/../public/index.html");
    let html = fs.readFileSync(filePath, "utf8");

    /** API url from which the client will connect. */
    const apiUrl = `${req.protocol}://${req.hostname}${PORT ? `:${PORT}` : ""}`;

    /** Inject environment variables into html that will be sent back to the client. */
    html = html.replace(
        "<var></var>",
        `<script>var API_URL = "${apiUrl}";</script>`,
    );

    res.type("html").send(html);
}