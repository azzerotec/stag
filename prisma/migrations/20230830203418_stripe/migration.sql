/*
  Warnings:

  - You are about to drop the `CartaoCredito` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "customerId" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CartaoCredito";
PRAGMA foreign_keys=on;
