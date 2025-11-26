import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="reletive min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="contianer max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              AmirALi
            </span>
            <span className="text-gradiant ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Salehi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foregraound max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I don’t just build websites; I craft stellar journeys through the
            digital void. Using modern front-end technologies, I transform
            complex code into nebulas of beautiful, functional interfaces.
          </p>

          <a
            href="#project"
            className="cosmic-button opacity-0 animate-fade-in-delay-4"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">

      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>

      </div>
    </section>
  );
};
