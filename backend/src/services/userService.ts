import { PrismaClient } from '../../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

export async function createUser(name: string, email: string) {
    return prisma.user.create({
        data: {name,email},
    });
}

export async function getAllUser() {
    return prisma.user.findMany();
}

export async function getUserById(id: string) {
    return prisma.user.findUnique({
        where: { id },
    });
}
