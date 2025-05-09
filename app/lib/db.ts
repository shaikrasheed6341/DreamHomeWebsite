import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

let db: PrismaClient;

try {
  // Check if Prisma Client is already initialized
  if (globalForPrisma.prisma) {
    db = globalForPrisma.prisma;
    console.log('Using existing Prisma Client instance');
  } else {
    db = new PrismaClient();
    console.log('Created new Prisma Client instance');
  }

  // Store the instance for reuse in development
  if (process.env.NODE_ENV !== 'development') {
    globalForPrisma.prisma = db;
  }
} catch (error) {
  console.error('Failed to initialize Prisma Client:', error);
  throw new Error('Prisma Client initialization failed');
}

export { db };