import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Interests } from "@/sections/Interests";
import { Projects } from "@/sections/Projects";
import { NavBar } from "@/layout/NavBar";
import { Footer } from "@/layout/Footer";


function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
    <NavBar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
      <Footer />
    </main>

    </div>
  )
}

export default App
