"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react"; // ou ícone equivalente
import Link from "next/link";
import { useState } from "react";

export default function registerPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" h-screen grid grid-cols-2">
      {/* ==== LEFT COLUMN START ==== */}
      <img className="h-screen w-full object-cover" src="img/login_image.jpg" />
      {/* ==== LEFT COLUMN END ==== */}

      {/* ==== RIGHT COLUMN START ==== */}
      <div className="col-span-1 w-full">
        {/* LOGO */}
        <div className="w-full flex justify-center items-center">
          <img className="w-sm " src={"logo.jpg"} />
        </div>
        {/* FORM */}
        <form className="mt-12 flex gap-2 flex-col">
          {/* NAME INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="name">Name</Label>
            <Input className="w-full" id="name" type="text" />
          </div>
          {/* EMAIL INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="email">Email</Label>
            <Input className="w-full" id="email" type="email" />
          </div>
          {/* PASSWORD INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          {/* CONFIRM PASSWORD INPUT*/}
          <div className="grid w-full items-center gap-3 pr-24 pl-24 relative">
            <Label htmlFor="confirm password">Confirm your password</Label>
            <Input id="confirm_password" type="password" />
          </div>

          <div className="w-full pl-24 pr-24">
            <Button className=" w-full mt-6 h-12">Register</Button>
          </div>
          <p className=" flex justify-center gap-1">
            Do you have an account?
            <Link className="text-blue-500" href={"/login"}>
              Log in
            </Link>
          </p>
        </form>
      </div>
      {/* ==== RIGHT COLUMN END ==== */}
    </div>
  );
}
