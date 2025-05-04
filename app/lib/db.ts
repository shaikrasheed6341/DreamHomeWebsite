import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error'], // Errors bhi log karo
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

console.log('Prisma - DATABASE_URL:', process.env.DATABASE_URL);
console.log('Prisma - DIRECT_URL:', process.env.DIRECT_URL);