import { IGymLockerDb } from "./IGymLockerDb";
import { Db, ObjectID } from "mongodb";
import bcrypt from "bcrypt";

export class GymLockerDb implements IGymLockerDb {
    private db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    /** Method that will create a new user */
    public async createUser(user: Omit<GymLockerDb.UserDBO, "_id">): Promise<GymLockerDb.UserDBO> {
        /** Hash password before storing into database */
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        /** Append record ID to the new user document. */
        const newUser = {
            ...user,
            _id: new ObjectID(),
            password: hashedPassword,
        };

        /** Save the new user in teh db. */
        await this.db.collection("users").insertOne(newUser);
        return newUser;
    }
}

export namespace GymLockerDb {
    export type UserDBO = {
        _id: ObjectID;
        firstName: string;
        lastName: string;
        password: string;
        email?: string;
    }
}