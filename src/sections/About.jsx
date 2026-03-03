import { Code2, Lightbulb, Rocket, Users2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Coding",
        description: "Writing clean, functional and maintainable code.",
    },

    {
        icon: Users2,
        title: "Collaboration",
        description: "Always willing to work alongside a team and colloborate to bring the best solution."
    },

    {
        icon: Rocket,
        title: "Performance",
        description: "Able to peform under pressure to bring fast and optimized solutions."
    },

    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Always open to learning new skills and technologies.",
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden"> 
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center ">
             {/*Left Column */}
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me 
                    </span> 
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Aspiring Software Engineer,
                    <span className="font-serif italic font-normal text-white">
                         {" "}
                         eager to learn, build, and contribute.
                    </span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                       I am a passionate aspiring Software Engineer, who has achieved their Bachelors Degree in Computer Science at the University of The Witwatersrand. This was a three year degree in which I learnt the fundamentals of coding, object-oriented programming, problem solving as working within a team to provide sustainable software solutions using the scrum methodology to achieve this.
                    </p>
                    <p>
                        I am determined, good at problem solving and willing to learn and adapt to any new situation. I have experience in programming in languages such as Python, Java, JavaScript, MySQL, C++, HTML, CSS. I have also worked with React to build web applications and have experience deploying using Azure as well as GitHub pages.
                    </p>
                    <p>
                        As an aspiring Software Engineer, when not coding you will find me job hunting for oppurtunities to provide my skills to a company as well as learn from that company and while going through this job hunting process you will find I am willing to learn any technologies required for the job that I may not be familiar with.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "Aspiring software engineer eager to contribute strong technical skills while learning from experienced teams to build impactful, scalable solutions."
                    </p>
                </div>

                </div>

                {/*Right Column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(index + 1) * 100}ms`}}
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>);
}