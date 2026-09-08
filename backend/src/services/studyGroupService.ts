import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

export async function getAllStudyGroup() {
    return prisma.studyGroup.findMany()
}

export async function getStudyGroupById(id: string) {
    return prisma.studyGroup.findUnique({
        where: {id}
    })
}

export async function createStudyGroup(name:string, description: string | null = null ) {
    return prisma.studyGroup.create({
        data: {name,description}
    })
}

export async function updateStudyGroup(studyGroupId:string, name:string, description: string | null = null ) {
    return prisma.studyGroup.update({
        data: {name,description},
        where: {id:studyGroupId}
    })
}

export async function deleteStudyGroup(studyGroupId:string) {
    return prisma.studyGroup.delete({
        where: {id:studyGroupId}
    })
}
