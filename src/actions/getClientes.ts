"use server";

import { cookies } from "next/headers";

export async function getClientes() {
    const userCookie = (await cookies()).get("user")?.value;
    const user = userCookie ? JSON.parse(userCookie) : null;
    
    if (!user?.token) {
      throw new Error("No autenticado"); // Manejo de error si no hay token
    }

  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clientes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("Error al obtener los clientes");
    }
  
    return res.json(); // Retorna los clientes como JSON
}