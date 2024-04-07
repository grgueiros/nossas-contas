"use client";

import { Button } from "@repo/ui/components";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginButton() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "";
  return (
    <Button onClick={() => signIn("google", { callbackUrl })}>
      Faça seu login com o Google
    </Button>
  );
}
