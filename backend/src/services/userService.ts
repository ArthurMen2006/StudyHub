import { PrismaClient } from '../../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

export async function getAllUser() {
    return prisma.user.findMany();
}

export async function getUserById(id: string) {
    return prisma.user.findUnique({
        where: { id },
    });
}

export async function createUser(name: string, email: string) {
    return prisma.user.create({
        data: {name,email},
    });
}

export async function updateUser(userId:string, name: string, email: string) {
    return prisma.user.update({
        data: {name,email},
        where: {id:userId}
    })
}

export async function deleteUser(userId:string) {
    return prisma.user.delete({
        where: {id:userId}
    })
}