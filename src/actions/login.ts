"use server";

import { supabase } from "@/lib/supabase";
import { User } from "@/types/user";
import { cookies } from "next/headers";

export async function loginUser(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    const { data: session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      return { success: false, error: "Error al iniciar sesión" };
    }
  
    if (!session || !session.user) {
      return { success: false, error: "No se pudo obtener la sesión del usuario" };
    }
  
    // Construimos el objeto de usuario
    const user: User = {
      id: session.user.id,
      email: session.user.email,
      role: session.user.user_metadata?.role,
      token: session.session?.access_token,
    };
  
    // Guardamos el token en las cookies (opcional, para persistencia en el servidor)
    (await cookies()).set("user", JSON.stringify(user), { httpOnly: true, secure: true });
  
    return { success: true };
  }