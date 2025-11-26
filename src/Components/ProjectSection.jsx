import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Mobile App template",
    description: "Mobile App template using Basic HTML and BootStrap",
    image: "/projects/project4.png",
    tags: ["BootStrap", "Basic HTML"],
    githubUrl: "https://github.com/amiralisalehik/Mobile-App-template",
  },

  {
    id: 2,
    title: "Whack-a-mole Game",
    description: "Whack-a-mole Game using JS with DOM",
    image: "/projects/project2.png",
    tags: ["JavaScript", "Basic HTML/CSS"],
    demoUrl: "https://old2.amiralisalehik.ir/Game/index-START%20(3).html",
    githubUrl: "https://github.com/amiralisalehik/Whack-a-mole-.git",
  },
  {
    id: 3,
    title: "Calculator",
    description: "Calculator using JS with DOM",
    image: "/projects/project3.png",
    tags: ["JavaScript", "Basic HTML/CSS"],
    demoUrl: "https://old2.amiralisalehik.ir/calculator/main.html",
    githubUrl:
      "https://github.com/amiralisalehik/Calculator-Big-Math-Brain.git",
  },
  {
    id: 4,
    title: "first Portfolio",
    description: "first Portfolio using JS with DOM",
    image: "/projects/project1.png",
    tags: ["JavaScript", "Basic HTML/CSS"],
    demoUrl: "https://old2.amiralisalehik.ir/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featurd <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                ></img>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/80 text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}{" "}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary tracking-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary tracking-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" text-center mt-12">
          <a
            href="https://github.com/amiralisalehik"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            <Github sixe={16} />
            <span>Check My GitHub</span>
            <ArrowBigRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
