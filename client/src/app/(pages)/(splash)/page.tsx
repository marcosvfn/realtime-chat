import { redirect } from "next/navigation";

export default function SplashPage() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    redirect("/home");
  }

  redirect("/login");

  return <></>;
}
