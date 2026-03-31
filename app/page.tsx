// app/page.tsx
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Button variant="primary">
        HeroUI v3 is successfully installed!
      </Button>
    </main>
  );
}