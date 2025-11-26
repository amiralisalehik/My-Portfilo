import { BadgeAlert } from "lucide-react";
import { StarBackground } from "../Components/StarBackground";
import { Link } from "react-router-dom";

export const NotFound = () => {
  document.documentElement.classList.add("dark");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <StarBackground />

      <div className="flex flex-col items-center gap-4 z-10">
        <div className="w-20 h-20 text-primary animate-bounce">
          <BadgeAlert className="w-full h-full" />
        </div>
        <p className="text-7xl font-semibold text-primary/90">404</p>
        <p className="text-4xl font-semibold text-muted-foreground">Lost in space?</p>
        <p className="text-lg text-muted-foreground text-center max-w-md">
          It seems you've drifted too far from the known universe.
        </p>

        <Link to="/" className="cosmic-button mt-6 z-10  hover:text-black ">
          To Infinity And Beyond
        </Link>
      </div>
    </div>
  );
};
