import { Slot } from "expo-router";
import AuthProvider from "@/providers/AuthProvider";
import { ReactNode } from "react";

export default function RootLayout(): ReactNode {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}