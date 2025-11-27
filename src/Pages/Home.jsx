import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkilsSection } from "../components/SkilsSection"
import { ContactSection } from "../components/ContactSection"
import {Footer} from "../components/Footer"
import { ProjectSection } from "../components/ProjectSection"


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