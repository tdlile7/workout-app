import { GymLockerDb } from "./GymLockerDb";

export interface IGymLockerDb {
    createUser(user: Omit<GymLockerDb.UserDBO, "_id">): Promise<GymLockerDb.UserDBO>;
}