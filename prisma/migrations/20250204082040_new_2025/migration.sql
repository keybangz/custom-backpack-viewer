-- CreateTable
CREATE TABLE `User` (
    `steamId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `steamId64` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',

    PRIMARY KEY (`steamId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Server` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serverIdentifier` VARCHAR(191) NOT NULL,
    `serverName` VARCHAR(191) NOT NULL,
    `serverIp` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Server_serverIdentifier_key`(`serverIdentifier`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeaponInServer` (
    `serverId` INTEGER NOT NULL,
    `weaponId` INTEGER NOT NULL,

    PRIMARY KEY (`serverId`, `weaponId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Weapon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weaponId` VARCHAR(191) NOT NULL,
    `weaponName` VARCHAR(191) NOT NULL,
    `weaponClass` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Weapon_weaponId_key`(`weaponId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeaponAttributes` (
    `attributeId` VARCHAR(191) NOT NULL,
    `attributeValue` VARCHAR(191) NOT NULL,
    `weaponId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`weaponId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WeaponInServer` ADD CONSTRAINT `WeaponInServer_serverId_fkey` FOREIGN KEY (`serverId`) REFERENCES `Server`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeaponInServer` ADD CONSTRAINT `WeaponInServer_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Weapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Weapon` ADD CONSTRAINT `Weapon_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`steamId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeaponAttributes` ADD CONSTRAINT `WeaponAttributes_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Weapon`(`weaponId`) ON DELETE RESTRICT ON UPDATE CASCADE;
