/*
  Warnings:

  - A unique constraint covering the columns `[wahaID]` on the table `Streamer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Streamer_wahaID_key" ON "Streamer"("wahaID");
