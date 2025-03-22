'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenido a ServiGo</h1>
      <p className="text-gray-600 mt-2 text-lg">Gestión eficiente de órdenes de servicio</p>

      <div className="mt-6 flex gap-4">
        <Button onClick={() => router.push("/auth/login")} className="bg-blue-600 hover:bg-blue-700">
          Ingresar
        </Button>
        <Button onClick={() => router.push("/auth/registro")} variant="outline">
          Registrarse
        </Button>
      </div>
    </div>
  );
}