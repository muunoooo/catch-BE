/*
  Warnings:

  - You are about to drop the column `promotor_id` on the `OrderDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderDetails" DROP CONSTRAINT "OrderDetails_promotor_id_fkey";

-- AlterTable
ALTER TABLE "OrderDetails" DROP COLUMN "promotor_id";

-- DropEnum
DROP TYPE "RatingRange";
