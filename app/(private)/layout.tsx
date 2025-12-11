import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get token from cookie
  const cookieStorage = await cookies();
  const token = cookieStorage.get("auth_token");

  console.log(cookieStorage);

  return <>{children}</>;
}
