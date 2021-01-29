const dotenv = require("dotenv");

dotenv.config();

export const PORT = process.env.PORT || "8080";

export const DB_URI = process.env.MONGODB_URL || "";

export const DATABASE_NAME = process.env.DATABASE_NAME || "";
