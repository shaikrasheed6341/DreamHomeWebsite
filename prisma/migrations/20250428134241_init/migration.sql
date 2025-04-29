-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "frisname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_gmail_key" ON "User"("gmail");
