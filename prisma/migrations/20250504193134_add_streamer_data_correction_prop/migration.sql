/*
  Warnings:

  - You are about to drop the column `enchantingGodesBonus` on the `StreamingData` table. All the data in the column will be lost.
  - Added the required column `enchantingGoddessBonus` to the `StreamingData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StreamingData" DROP COLUMN "enchantingGodesBonus",
ADD COLUMN     "enchantingGoddessBonus" DOUBLE PRECISION NOT NULL;
