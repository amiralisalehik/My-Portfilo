import { Laptop, University } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import "./page.css";
import { AboutMeNavBar } from "../components/AboutMeNavBar";

export const AboutMe = () => {
  return (
    <div className="min-h-screen bg-mybackground ">
      <ThemeToggle></ThemeToggle>
      <AboutMeNavBar></AboutMeNavBar>

      <section className="w-full min-h-screen flex flex-col items-center justify-between px-6 md:px-12 py-20 gap-10">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="m-5">
            <h1
              style={{ fontFamily: "Croissant" }}
              className=" font-bold text-4xl md:text-5xl text-blue-400"
            >
              امیرعلی صالحی
            </h1>

            <p style={{fontFamily:"Vazir"}} dir="rtl"
            className="mt-4 text-lg text-foreground leading-relaxed max-w-lg text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <video src="/public/videos/typing.mp4"
          className="w-full md:w-1/2 rounded-2xl object-cover shadow-xl"
          poster="/public/videos/typing.png"
          autoPlay
          loop
          muted
          playsInline>
          </video>
        </div>

        <h1 style={{ fontFamily: "Vazir" }}>امیرعلی صالجی</h1>
        <h1 style={{ fontFamily: "tahriri" }}>امیرعلی صالجی</h1>
      </section>
    </div>
  );
};
