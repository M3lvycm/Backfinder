-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "imagen" TEXT[],
    "banos" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL DEFAULT 0,
    "numeroContacto" INTEGER NOT NULL DEFAULT 0,
    "habitaciones" INTEGER NOT NULL,
    "garajes" INTEGER NOT NULL,
    "amueblado" BOOLEAN NOT NULL,
    "ciudad" TEXT NOT NULL,
    "metrosCuadrados" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
