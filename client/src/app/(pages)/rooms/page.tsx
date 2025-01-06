import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { HubModule } from "@/features/hub";

export default async function RoomsPage() {
  const cookieStore = await cookies();

  const user = cookieStore.get("user")?.value;
  const jwt = cookieStore.get("jwt")?.value;

  if (!user || !jwt) {
    redirect("/");
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <HubModule />
    </main>
  );
}
