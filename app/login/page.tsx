import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function loginPage() {
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
          <div className="flex justify-end pr-24 mt-1">
            <Link href={"test"}>
              <Label className="text-blue-600 cursor-pointer underline">
                Forgot password?
              </Label>
            </Link>
          </div>
          <div className="w-full pl-24 pr-24">
            <Button className=" w-full mt-6">Login</Button>
          </div>
          <p className=" flex justify-center gap-1">
            Do you not have an account?
            <Link className="text-blue-500" href={"#"}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
      {/* ==== RIGHT COLUMN END ==== */}
    </div>
  );
}
