/*
  Warnings:

  - Added the required column `endDate` to the `Week` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Week` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Week` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Week" ADD COLUMN     "closed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "observation" TEXT,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
