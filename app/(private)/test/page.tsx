"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

export default function testPage() {
  async function logout(event: React.FormEvent<HTMLFormElement>) {
    //prevent that the form from being submitted
    event.preventDefault();
    //send the request to logout
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      toast("You were logged out");
    }
  }
  return (
    <>
      <div>Test Page</div>
      <form onSubmit={logout} method="post">
        <Button>Logout</Button>
      </form>
    </>
  );
}
