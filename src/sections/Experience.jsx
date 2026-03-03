
const experiences = [
    {
    period: "2025 - present",
    role: "Frontend Developer (Freelance Project)",
    company: "Ever Green Projects",
    description:
      "Designed and developed a responsive advertising website for a small gardening business. Built as a static React application and deployed using GitHub Pages.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub Pages"
    ],
    current: true,
  },
  {
    period: "2024",
    role: "Full-Stack Web Application Developer (University Project)",
    company: "University Group Project",
    description:
      "Collaborated in a team using Agile/SCRUM methodology to design and develop a full-stack web application. Worked with cloud technologies and modern frontend frameworks, contributing to both frontend development and backend integration.",
    technologies: [
      "React",
      "Microsoft Azure",
      "Firebase",
      "SCRUM",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    current: false,
  },
    {
    period: "2022 - 2024",
    role: "Bachelor of Science in Computer Science",
    company: "University of the Witwatersrand",
    description:
      "Graduated with a BSc in Computer Science, majoring in Computer Science and Computational Applications. Completed coursework in Software Development, Machine Learning, and Operating Systems while working extensively on individual and group-based software projects.",
    technologies: [
      "Java",
      "Python",
      "C++",
      "JavaScript",
      "React",
      "MySQL",
      "Azure",
      "Firebase"
    ],
    current: false,
  },
    {
    period: "2022",
    role: "IT Intern",
    company: "New Star Networks Pty Ltd",
    description:
      "Worked in a telecommunications and cloud phone systems environment. Gained exposure to professional IT workflows, client communication, and real-world problem solving. Developed strong adaptability, teamwork, and communication skills in a fast-paced working environment.",
    technologies: [
      "Telecommunications Systems",
      "Cloud Phone Systems",
      "IT Support"
    ],
    current: false,
  },
];

export const Experience = () => {
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
       <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
       <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Experience that 
                <span className="font-serif italic font-normal text-white"> 
                    {" "}
                    speaks volumes
                </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                A timeline of my growth, from bright-eyed student to aspiring software engineer.
            </p>
        </div>

        {/* Timeline */}
        <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

            {/* Exp. */}
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} 
                    className="relative grid md:grid-cols-2 gap-8 animate-fade-in" 
                    style={{animationDelay: `${(index + 1) * 150}ms`}}> 
                        {/* Timeline dot*/}
                        <div 
                        className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                        </div>

                        {/* Content */}
                        <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}> 
                            <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50  transition-all duration-500`}> 
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground mt-4">{exp.company}</p>
                                <p>{exp.description}</p>
                                 <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ?  "md:justify-end" : ""}`}>
                                    {exp.technologies.map((techs, techIndex) => (
                                        <span  
                                        key={techIndex} 
                                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"> {techs}</span>
                                    ))} 
                                 </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    </section>);
}