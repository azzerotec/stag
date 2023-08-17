/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oab` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CartaoCredito" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "vencimento" TEXT NOT NULL,
    "codigoSeguranca" TEXT NOT NULL,
    "recorrencia" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "CartaoCredito_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Processo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "clienteId" TEXT NOT NULL,
    CONSTRAINT "Processo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "clienteId" TEXT NOT NULL,
    CONSTRAINT "Evento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "vencimento" DATETIME NOT NULL,
    "atribuicao" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL,
    "prioridadeTarefaId" TEXT NOT NULL,
    CONSTRAINT "Tarefa_prioridadeTarefaId_fkey" FOREIGN KEY ("prioridadeTarefaId") REFERENCES "PrioridadeTarefa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PrioridadeTarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "NotificationType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notificacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "processoId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "notificationTypeId" TEXT NOT NULL,
    CONSTRAINT "Notificacoes_processoId_fkey" FOREIGN KEY ("processoId") REFERENCES "Processo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Notificacoes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Notificacoes_notificationTypeId_fkey" FOREIGN KEY ("notificationTypeId") REFERENCES "NotificationType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contato" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PessoaFisica" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeCompleto" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "nomeDaMae" TEXT NOT NULL,
    "nomeDoPai" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    CONSTRAINT "PessoaFisica_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PessoaJuridica" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "razaoSocial" TEXT NOT NULL,
    "responsavelLegal" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    CONSTRAINT "PessoaJuridica_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MovimentacaoFinanceiraTipo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MovimentacaoFinanceira" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "discricao" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "tipoId" TEXT NOT NULL,
    CONSTRAINT "MovimentacaoFinanceira_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovimentacaoFinanceira_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "MovimentacaoFinanceiraTipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" DATETIME,
    "cpf" TEXT,
    "oab" TEXT NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "updatedAt") SELECT "createdAt", "email", "id", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "PessoaFisica_clienteId_key" ON "PessoaFisica"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "PessoaJuridica_clienteId_key" ON "PessoaJuridica"("clienteId");
