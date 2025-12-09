"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { error } from "console";
import { Eye, EyeOff } from "lucide-react"; // ou ícone equivalente
import { appRouterContext } from "next/dist/server/route-modules/app-route/shared-modules";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function registerPage() {
  // ====> START STATES TO FORM FIELDS <====
  // Name
  const [name, setName] = useState("");
  const [nameFieldMessage, setNameFieldMessage] = useState("");
  // email
  const [email, setEmail] = useState("");
  const [emailFieldMessage, setEmailFieldMessage] = useState("");
  // password
  const [password, setPassword] = useState("");
  const [passwordFieldMessage, setPasswordFieldMessage] = useState("");
  // password confirmation
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [
    passwordConfirmationFieldMessage,
    setPasswordConfirmationFieldMessage,
  ] = useState("");
  // ====> END STATES TO FORM FIELDS <====

  function resetMessageFields() {
    setNameFieldMessage("");
    setEmailFieldMessage("");
    setPasswordFieldMessage("");
    setPasswordConfirmationFieldMessage("");
  }

  /**
   * submit form register to back-end serve
   * @param event
   */
  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    //Prevents the default submit logic of html
    event.preventDefault();
    //reset message fields
    resetMessageFields();
    // get api url to concat
    const apiBasePath = process.env.NEXT_PUBLIC_API_URL;
    //await the fetch finish to get response
    const response = await fetch(apiBasePath + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    });

    if (response.ok) {
      toast.success("User created successfully");
      return;
    }
    //else
    const data = await response.json();
    if (data.errors) {
      Object.entries(data.errors).forEach(([key, value]: [string, any]) => {
        console.log(key);
        console.log(value);
        /*example:

        {
          key : "value"
          name: "required"
        }

        */
        if (key == "name") {
          setNameFieldMessage(value[0]);
        }
        if (key == "email") {
          setEmailFieldMessage(value[0]);
        }
        if (key == "password") {
          setPasswordFieldMessage(value[0]);
        }
        if (key == "password_confirmation") {
          setPasswordConfirmationFieldMessage(value[0]);
        }
      });
    }
  }

  return (
    <div className=" h-screen grid grid-cols-2">
      {/* ==== LEFT COLUMN START ==== */}
      <div className="bg-[url('/img/login_image.jpg')] bg-cover bg-center"></div>
      {/* ==== LEFT COLUMN END ==== */}

      {/* ==== RIGHT COLUMN START ==== */}
      <div className="col-span-1 w-full">
        {/* LOGO */}
        <div className="w-full flex justify-center items-center">
          <img className="w-[250px] " src={"logo.jpg"} />
        </div>
        {/* FORM */}
        <form onSubmit={submitForm} className="mt-12 flex gap-2 flex-col">
          {/* NAME INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full"
              id="name"
              type="text"
            />
            <span className="text-red-500">{nameFieldMessage}</span>
          </div>
          {/* EMAIL INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="email">Email</Label>
            <Input
              className="w-full"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span className="text-red-500">{emailFieldMessage}</span>
          </div>
          {/* PASSWORD INPUT */}
          <div className="grid w-full items-center gap-3 pr-24 pl-24">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="text-red-500">{passwordFieldMessage}</span>
          </div>
          {/* CONFIRM PASSWORD INPUT*/}
          <div className="grid w-full items-center gap-3 pr-24 pl-24 relative">
            <Label htmlFor="confirm password">Confirm your password</Label>
            <Input
              id="confirm_password"
              type="password"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />

            <span className="text-red-500">
              {passwordConfirmationFieldMessage}
            </span>
          </div>

          <div className="w-full pl-24 pr-24">
            <Button className=" w-full mt-6 h-12" type="submit">
              Register
            </Button>
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
