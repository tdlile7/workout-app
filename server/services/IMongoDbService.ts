import { MongoClient } from "mongodb";
import { MongoDbService } from "./MongoDbService";

export interface IMongoDbService {
    createUser(name: string, email?: string): Promise<MongoDbService.UserDBO>;
}