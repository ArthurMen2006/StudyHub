import { PrismaClient } from '../../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

export async function createTask(title: string, description: string | null = null, userId: string) {
    return prisma.task.create({
        data: {title, description, userId},
    });
    
}

export async function getAllTask() {
    return prisma.task.findMany();
}

export async function getTaskById(id: string) {
    return prisma.task.findUnique({
        where: {id}
    })
}