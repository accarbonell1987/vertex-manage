-- AlterTable
ALTER TABLE "Streamer" ADD COLUMN     "bankAccountCUP" TEXT,
ADD COLUMN     "paymentMethod" TEXT DEFAULT 'MLC';
