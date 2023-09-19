/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `steamId32` on the `User` table. All the data in the column will be lost.
  - Added the required column `steamId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `steamId32`,
    ADD COLUMN `steamId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`steamId`);
