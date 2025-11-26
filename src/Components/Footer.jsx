import {ArrowUp, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-linear-to-t from-footer to-background pt-2">
        <footer className=" rounded-full mt-3 mx-7 p-7 backdrop-blur-[2px] shadow-xs relative flex flex-wrap justify-between items-center">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <MapPin className="h-6 w-6 text-primary " />
        </div>

        <div className="flex flex-col items-start w-full">
          <h4 className="font-medium">Location</h4>
          <p className="text-muted-foreground hover:text-primary transition-colors">
            Tehran, Iran
          </p>
        </div>
      </div>

      
        <p className="hidden md:flex text-lg items-center ">
          &copy; {new Date().getFullYear()}{"  "}
          <span>
            <img className="h-6 ml-2 text-muted-foreground"
            src="public/Amirali.ico" />{" "}
          </span>
          .co. All reights reserved.
        </p>

        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-color">
            <ArrowUp></ArrowUp>
        </a>
      
    </footer>

    </div>
  );
};
