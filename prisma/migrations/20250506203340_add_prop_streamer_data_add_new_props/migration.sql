/*
  Warnings:

  - Added the required column `numberOfDaysCompleted` to the `StreamingData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfDaysInMic` to the `StreamingData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StreamingData" ADD COLUMN     "numberOfDaysCompleted" INTEGER NOT NULL,
ADD COLUMN     "numberOfDaysInMic" INTEGER NOT NULL;
