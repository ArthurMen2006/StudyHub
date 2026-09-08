import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

export async function getAllStudyGroupMembers() {
    return prisma.studyGroupMembers.findMany()
}

export async function getStudyGroupMembersById(id:string) {
    return prisma.studyGroupMembers.findUnique({
        where: {id}
    })
}

export async function createStudyGroupMembers(userId: string, studyGroupId: string) {
    return prisma.studyGroupMembers.create({
        data: {userId,studyGroupId}
    })
}

export async function updateStudyGroupMembers(studyGroupMembersId:string, userId: string, studyGroupId: string) {
    return prisma.studyGroupMembers.update({
        data: {userId,studyGroupId},
        where:{id:studyGroupMembersId}
    })
}

export async function deleteStudyGroupMembers(studyGroupMembersId:string) {
    return prisma.studyGroupMembers.delete({
        where: {id:studyGroupMembersId}
    })
}