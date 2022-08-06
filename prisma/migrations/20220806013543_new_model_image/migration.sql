/*
  Warnings:

  - You are about to drop the column `name` on the `images` table. All the data in the column will be lost.
  - Added the required column `number` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "rooms" ADD COLUMN     "number" INTEGER NOT NULL;
