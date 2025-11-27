import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {Link} from "react-router-dom"

const navItems = [
  { name: "Home", href: "/" },
 
];

export const AboutMeNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // lock the screen when the menu is open in mobile
      const scrollY = window.scrollY; // این عدد موقعیت اسکرول رو نگه می‌داره
      document.body.style.position = "fixed"; // صفحه ثابت می‌شه
      document.body.style.top = `-${scrollY}px`; // موقعیت اسکرول حفظ می‌شه
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden"; // اسکرول خاموش
    } else {
      // when menu closed convert to the privius positon
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
    document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1); //jump to privius position
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 10); // if it was true the user has scroled then make setIsScrolled true.
    };
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-[2px] shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          className="text-xl font-bold text-primary flex items-center"
          to="/"
        >
          <span className="reletive z-10">
            <span className="text-glow text-foreground">AmirAli Salehi </span>
            Portfolio
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-color duration-300"
            >
              {item.name}
            </Link>
          ))}

          <Link to="/AboutMe">more about me</Link>
        </div>

        {/* mobile nav */}

        <div className="flex flex-col space-y-8 text-xl">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 fixed  top-10 right-5"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95  backdrop-blur-[2px] shadow-xs z-40 flex flex-col items-center justify-center ",
            "transition-all duration-300 md:hidden ",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-color duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/AboutMe">more about me</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
