/*
  Warnings:

  - You are about to drop the column `userId` on the `Urls` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Urls" DROP CONSTRAINT "Urls_userId_fkey";

-- AlterTable
ALTER TABLE "Urls" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Urls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
