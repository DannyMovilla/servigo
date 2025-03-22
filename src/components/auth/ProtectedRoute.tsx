"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoadingSpinner } from "../loading-spinner";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/"); // Redirige si no está autenticado
    }
  }, [user, loading, router]);

  if (loading) return  <LoadingSpinner />; // Puedes mejorar esto con un spinner

  return user ? <>{children}</> : null;
}
