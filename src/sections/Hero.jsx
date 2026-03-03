import {Button} from "@/components/Button"
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin } from "lucide-react";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/files/CV.pdf";
  link.download = "SBM_CV.pdf";
  link.click();
};

const skills = [
    "React",
    "Git",
    "GitHub",
    "Java",
    "JavaScript",
    "Azure",
    "Node.js",
    "Firebase",
    "SQL",
]

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* bg */}
        <div className="absolute inset-0">
            <img 
                src="/hero-bg.jpg" 
                alt="Hero Image" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/**Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                  style = {{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-36 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/** Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                         <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                             Computer Science Graduate • Software Engineer 
                        </span>
                    </div>
                    {/* Headline*/}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                             A <span className="text-primary glow-text"> Computer Science</span> graduate 
                            <br />
                            pursuing a career as a 
                            <br/>
                            <span className="font-serif italic font-normal text-white"> Software Engineer.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm S'Thabiso Bokang Molepo, although I prefer to be called Bokang. I am a Computer Science graduate pursuing a career as a Software Engineer. Strong foundation in programming, algorithms, and problem-solving. Motivated to build efficient, scalable, and impactful software solutions.

                        </p>
                    </div>

                    {/** CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <a href="#contact" className="transition-all duration-500 scroll-mt-24">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                        </a>
                        <AnimatedBorderButton onClick={downloadCV}>
                            <Download className="w-5 h-5"/>
                            Download CV
                        </AnimatedBorderButton>
                    </div>


                    {/* Social Media */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground"> Follow Me:</span>
                        {
                        [
                            {icon: Github, href: "https://github.com/BokangWAV"}, 
                            {icon: Linkedin, href: "https://www.linkedin.com/in/bokang-profile/"}, 
                            {icon: Instagram, href: "https://www.instagram.com/bokang.wav/"},
                        ].map((social, index) => (
                            <a 
                                key={index} 
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-500"
                            >
                                    { <social.icon  className="w-5 h-5"/>}
                            </a>
                        ))
                        }
                    </div>
                </div>
                {/**Right Column - Profile Picture */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image*/}
                    <div className="realtive max-w-md mx-auto">
                        <div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="realtive glass rounded-3xl p-2 glow-border">
                            <img src="/profile-picture.jpg" 
                            alt="S'Thabiso Bokang Molepo" 
                            className="w-full aspect-4/5 object-cover rounded-2xl"/>

                            {/* Floating Badge*/}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium"> 
                                            Available For Work
                                        </span>
                                </div>
                            </div>

                            {/**Stats */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 ">
                                <div className="text-sm font-bold text-primary">BSC COMP. SCI.</div>
                                <div className="text-xs text-muted-foreground">At WITs.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/**Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies & Languages I've Workd With
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
               href= "#about"
               className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>

    </section>
    );
}