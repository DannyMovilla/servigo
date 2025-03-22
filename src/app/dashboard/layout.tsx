'use client';

import ProtectedRoute from "@/components/auth/ProtectedRoute";


// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <ProtectedRoute>
        {children}
    </ProtectedRoute>
  );
}