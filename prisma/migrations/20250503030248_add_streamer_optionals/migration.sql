/*
  Warnings:

  - Added the required column `wahaName` to the `Streamer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streamer" ADD COLUMN     "wahaName" TEXT NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "bankAccount" DROP NOT NULL;
