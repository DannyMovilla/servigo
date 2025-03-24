"use client";


import { useRouter } from "next/navigation";

export default function SenderOSPage() {
  const router = useRouter();

  
  /* const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const data = await getClientes();
        setClientes(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchClientes();
  }, []); */

  return (
    <div className="px-4 lg:px-6">
      <h1 className="text-4xl font-bold text-blue-600">
        Bienvenido a Ordenes de Servicio
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        Gestión eficiente de ordenes de servicio
      </p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => router.push("/ordenServicio/sender")}
      >
        Crear Orden de Servicio
      </button>
    </div>
  );
}
