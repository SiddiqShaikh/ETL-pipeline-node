-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "commonName" TEXT NOT NULL,
    "capital" TEXT[],
    "region" TEXT NOT NULL,
    "subregion" TEXT,
    "population" INTEGER NOT NULL,
    "area" DOUBLE PRECISION,
    "languages" JSONB,
    "currencies" JSONB,
    "borders" TEXT[],
    "flag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Country_name_idx" ON "Country"("name");

-- CreateIndex
CREATE INDEX "Country_region_idx" ON "Country"("region");
