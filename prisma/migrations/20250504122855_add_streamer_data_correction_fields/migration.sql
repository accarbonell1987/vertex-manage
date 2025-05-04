/*
  Warnings:

  - You are about to drop the column `agency` on the `StreamingData` table. All the data in the column will be lost.
  - You are about to drop the column `bonus` on the `StreamingData` table. All the data in the column will be lost.
  - You are about to drop the column `diamonds` on the `StreamingData` table. All the data in the column will be lost.
  - You are about to drop the column `money` on the `StreamingData` table. All the data in the column will be lost.
  - You are about to drop the column `penalties` on the `StreamingData` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `StreamingData` table. All the data in the column will be lost.
  - Added the required column `agencySalary` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamondsAndPoints` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamondsPenalties` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamondsTotal` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streamerSalary` to the `StreamingData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StreamingData" DROP COLUMN "agency",
DROP COLUMN "bonus",
DROP COLUMN "diamonds",
DROP COLUMN "money",
DROP COLUMN "penalties",
DROP COLUMN "points",
ADD COLUMN     "agencySalary" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "diamondsAndPoints" INTEGER NOT NULL,
ADD COLUMN     "diamondsPenalties" INTEGER NOT NULL,
ADD COLUMN     "diamondsTotal" INTEGER NOT NULL,
ADD COLUMN     "streamerSalary" DOUBLE PRECISION NOT NULL;
