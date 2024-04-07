"use client";

import { Button } from "@repo/ui/components";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button variant="secondary" size="sm" onClick={() => signOut()}>
      Sair
    </Button>
  );
}
