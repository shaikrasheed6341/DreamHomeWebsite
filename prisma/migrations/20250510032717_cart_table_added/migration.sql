-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "buldingimage" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "squrefeet" TEXT NOT NULL,
    "price" TEXT,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);
