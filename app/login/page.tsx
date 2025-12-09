"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

export default function loginPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function doLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetErrorFields();
    validFields();
    if (hasErrors()) {
      return;
    }
    console.log(email, password);
    const apiRoute = process.env.NEXT_PUBLIC_API_URL + "/login";

    const response = await fetch(apiRoute, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // get body of response
    const data = await response.json();
    //show error if request failed
    if (!response.ok) {
      toast.error(data.message);
    }
  }
  function validFields(): boolean {
    if (email.length == 0) {
      setEmailError("Email field not to be empty");
    }
    if (password.length == 0) {
      setPasswordError("Password field not to be empty");
    }
    return true;
  }
  function hasErrors(): boolean {
    return passwordError.length > 0 || emailError.length > 0;
  }
  function resetErrorFields() {
    setEmailError("");
    setPasswordError("");
  }
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
        <form onSubmit={doLogin} className="mt-12 flex gap-2 flex-col">
          {/* EMAIL INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="email">Email</Label>
            <Input
              className="w-full"
              id="email"
              type="email"
              value={email}
              //update email value
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <span className="text-red-500">{emailError}</span>
          </div>
          {/* PASSWORD INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              // update password value
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
            <span className="text-red-500">{passwordError}</span>
          </div>
          <div className="flex justify-end pr-24 mt-1">
            <Link href={"test"}>
              <Label className="text-blue-600 cursor-pointer underline">
                Forgot password?
              </Label>
            </Link>
          </div>
          <div className="w-full pl-24 pr-24">
            <Button className="w-full h-12 mt-6">Login</Button>
          </div>
          <p className=" flex justify-center gap-1">
            Do you not have an account?
            <Link className="text-blue-500" href={"/register"}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
      {/* ==== RIGHT COLUMN END ==== */}
    </div>
  );
}
