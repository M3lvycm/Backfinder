-- CreateTable
CREATE TABLE `Property` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `banos` INTEGER NOT NULL,
    `habitaciones` INTEGER NOT NULL,
    `garajes` INTEGER NOT NULL,
    `amueblado` BOOLEAN NOT NULL,
    `ciudad` VARCHAR(191) NOT NULL,
    `metrosCuadrados` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
