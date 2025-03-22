import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ClientesPage() {
  return (
    <div className="px-4 lg:px-6">
      <h1 className="text-4xl font-bold text-blue-600">
        Bienvenido a Clientes
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        Gestión eficiente de clientes
      </p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Daniel Movilla</TableCell>
            <TableCell>movilla.daniel@gmail.com</TableCell> 
            <TableCell className="text-center">
              <Button variant="outline" className="w-24">
                Editar
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
