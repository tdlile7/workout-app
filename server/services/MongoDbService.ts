import { IMongoDbService } from "./IMongoDbService";
import { Db, ObjectID } from "mongodb";

export class MongoDbService implements IMongoDbService {
    private db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    /** Create new user */
    public async createUser(name: string, email?: string): Promise<MongoDbService.UserDBO> {
        const newUser = {
            _id: new ObjectID(),
            name,
            email,
        };
        await this.db.collection("users").insertOne(newUser);
        return newUser;
    }
}

export namespace MongoDbService {
    export type UserDBO = {
        _id: ObjectID;
        name: string;
        email?: string;
    }
}