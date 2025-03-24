"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SenderOSCreatePage() {

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([
    { title: "", description: "", quantity: 1, price: 0, total: 0 },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { title: "", description: "", quantity: 1, price: 0, total: 0 },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Aquí iría la lógica para enviar la orden al backend
      toast.success("Orden creada con éxito");
    } catch (error) {
      console.error(error);
      toast.error("Error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

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
        Crear Orden de Servicio
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        Gestión eficiente de ordenes de servicio
      </p>

      <Card className="p-6 rounded-xl w-full max-w-4xl mx-auto">
        <CardContent>
          {/* Cabecera */}
          <div className="flex justify-between border-b pb-4 mb-4">
            <div>
              <p className="font-bold">From:</p>
              <p>Jayvion Simon</p>
              <p>19034 Verna Unions Apt. 164 - Honolulu, RI / 87535</p>
              <p>+1 202-555-0143</p>
            </div>
            <div>
              <p className="font-bold">To:</p>
              <Input placeholder="Cliente" className="w-60" />
            </div>
          </div>

          {/* Datos principales */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="Invoice number"
              defaultValue="INV-1990"
              disabled
            />
            <Select>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Input type="date" defaultValue="2025-03-23" />
            <Input type="date" placeholder="Due date" />
          </div>

          {/* Tabla de detalles */}
          <div className="mb-4">
            <p className="font-bold mb-2">Details:</p>
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-2 items-center mb-2"
              >
                <Input placeholder="Title" />
                <Input placeholder="Description" />
                <Input type="number" placeholder="Qty" />
                <Input type="number" placeholder="$ Price" />
                <Input type="number" placeholder="$ Total" disabled />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveItem(index)}
                >
                  <IconTrashX className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" className="mt-2" onClick={handleAddItem}>
              <IconCirclePlus className="w-4 h-4 mr-2" /> Add Item
            </Button>
          </div>

          {/* Resumen y botones */}
          <div className="flex justify-between items-center border-t pt-4">
            <div>
              <p>Subtotal: $83.74</p>
              <p>Shipping: -</p>
              <p>Discount: -</p>
              <p>Taxes: -</p>
              <p className="font-bold">Total: $83.74</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Save as draft</Button>
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Creating..." : "Create & send"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
