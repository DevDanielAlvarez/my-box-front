import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function loginPage() {
  return (
    <div className="bg-red-400 h-screen grid grid-cols-2">
      <img
        className="h-full w-full overflow-hidden"
        src="img/login_image.jpg"
      />
      {/* items-center(Y-axis) | justify-center(X-axis) */}
      <div className="flex items-center justify-center">
        {/* h-120 to send input to top */}
        <form className="bg-amber-400 w-full h-120 p-12 flex items-center justify-center flex-col">
          {/* EMAIL INPUT */}
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
          </div>
          {/* PASSWORD INPUT */}
          <div className="grid w-full max-w-sm items-center gap-3 mt-12">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </form>
      </div>
    </div>
  );
}
