import { Navbar } from "../Components/Navbar"
import { StarBackground } from "../Components/StarBackground"
import { ThemeToggle } from "../Components/ThemeToggle"
import { HeroSection } from "../Components/HeroSection"
import { AboutSection } from "../Components/AboutSection"
import { SkilsSection } from "../Components/SkilsSection"
import { ContactSection } from "../Components/ContactSection"
import {Footer} from "../Components/Footer"
import { ProjectSection } from "../Components/ProjectSection"


export const Home=()=>{
    return(
        <div className="min-h-screen"> 
            <ThemeToggle />

            {/* BackGrand Effects */}
            <StarBackground></StarBackground>

            {/* Navbar */}
            <Navbar></Navbar>

            {/* Main Content */}
            <main>
               <HeroSection />
               <AboutSection />
               <SkilsSection />
               <ProjectSection />
               <ContactSection/>
            </main>

            

            {/* Footer */}
            <Footer></Footer>
        </div>
    )
}