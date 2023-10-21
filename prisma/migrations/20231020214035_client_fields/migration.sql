/*
  Warnings:

  - You are about to drop the column `contato` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engaged` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalContact` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professionalContact` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "nationality" TEXT NOT NULL,
    "personalContact" TEXT NOT NULL,
    "professionalContact" TEXT NOT NULL,
    "engaged" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "cep" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "province" TEXT,
    "streetAddress" TEXT,
    "streetAddress2" TEXT
);
INSERT INTO "new_Cliente" ("email", "id") SELECT "email", "id" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
