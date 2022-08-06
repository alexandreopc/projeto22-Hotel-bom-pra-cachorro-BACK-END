-- AlterTable
ALTER TABLE "reservations" ALTER COLUMN "isExpired" SET DEFAULT false;

-- AlterTable
ALTER TABLE "rooms" ALTER COLUMN "isReserved" SET DEFAULT false;
