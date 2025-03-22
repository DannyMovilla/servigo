'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const registerSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: { role: "cliente" }, // Se guarda el rol en el metadata
      },
    });

    if (error) {
      toast.error("Error al registrarse");
    } else {
      toast.success("Registro exitoso. Verifica tu correo.");
      router.push("/auth/login");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-lg rounded-xl w-80">
        <h2 className="text-xl font-bold text-center mb-4">Registrarse</h2>
        <Input {...register("email")} placeholder="Correo electrónico" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        <Input {...register("password")} type="password" placeholder="Contraseña" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        <Input {...register("confirmPassword")} type="password" placeholder="Confirmar contraseña" />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        <Button type="submit" className="w-full mt-4" disabled={loading}>
          {loading ? "Cargando..." : "Registrarse"}
        </Button>
      </form>
    </div>
  );
}