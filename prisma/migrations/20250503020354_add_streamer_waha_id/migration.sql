/*
  Warnings:

  - Added the required column `wahaID` to the `Streamer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streamer" ADD COLUMN     "wahaID" TEXT NOT NULL;
