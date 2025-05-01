-- CreateTable
CREATE TABLE "Streamer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "bankAccount" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Streamer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Week" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Week_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StreamingData" (
    "id" TEXT NOT NULL,
    "diamonds" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "penalties" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "money" DOUBLE PRECISION NOT NULL,
    "agency" TEXT NOT NULL,
    "streamerId" TEXT NOT NULL,
    "weekId" TEXT NOT NULL,

    CONSTRAINT "StreamingData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referal" (
    "id" TEXT NOT NULL,
    "streamerId" TEXT NOT NULL,
    "referredId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StreamingData" ADD CONSTRAINT "StreamingData_streamerId_fkey" FOREIGN KEY ("streamerId") REFERENCES "Streamer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamingData" ADD CONSTRAINT "StreamingData_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referal" ADD CONSTRAINT "Referal_streamerId_fkey" FOREIGN KEY ("streamerId") REFERENCES "Streamer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referal" ADD CONSTRAINT "Referal_referredId_fkey" FOREIGN KEY ("referredId") REFERENCES "Streamer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
