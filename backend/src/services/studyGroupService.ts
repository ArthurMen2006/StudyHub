import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

export async function createStudyGroup(name:string, description: string | null ) {
    return prisma.studyGroup.create({
        data: {name,description}
    })
}

export async function getAllStudyGroup() {
    return prisma.studyGroup.findMany()
}

export async function getStudyGroupById(id: string) {
    return prisma.studyGroup.findUnique({
        where: {id}
    })
}