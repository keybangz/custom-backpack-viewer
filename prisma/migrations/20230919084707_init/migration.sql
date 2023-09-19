/*
  Warnings:

  - Added the required column `steamId32` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `steamId32` VARCHAR(191) NOT NULL;
