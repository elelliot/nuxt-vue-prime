import { PrismaClient } from "@prisma/client";

let dbInstance: PrismaClient;
export async function getDB() {
    if (!dbInstance) {
        dbInstance = new PrismaClient();
    }
    return dbInstance;
}