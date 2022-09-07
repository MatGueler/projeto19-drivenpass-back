-- CreateTable
CREATE TABLE "Urls" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Urls" ADD CONSTRAINT "Urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
