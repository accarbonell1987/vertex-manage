/*
  Warnings:

  - Added the required column `baseSalaryIM` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSalaryRoom` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dailyBonusOfSuperStreamer` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamondsComisions` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamondsIM` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamondsRoom` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enchantingGodesBonus` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rewardOfPoints` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomBonus` to the `StreamingData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StreamingData" ADD COLUMN     "baseSalaryIM" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "baseSalaryRoom" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dailyBonusOfSuperStreamer" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "diamondsComisions" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "diamondsIM" INTEGER NOT NULL,
ADD COLUMN     "diamondsRoom" INTEGER NOT NULL,
ADD COLUMN     "enchantingGodesBonus" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rewardOfPoints" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "roomBonus" DOUBLE PRECISION NOT NULL;
