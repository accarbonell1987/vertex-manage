-- AlterTable
ALTER TABLE "Streamer" ADD COLUMN     "penalties" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "agencyName" TEXT NOT NULL,
    "payAffiliateProgram" BOOLEAN NOT NULL,
    "payAffiliateProgramPercentage" DOUBLE PRECISION NOT NULL,
    "applyPenalties" BOOLEAN NOT NULL,
    "penaltyPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);
