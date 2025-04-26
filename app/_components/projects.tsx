export default function Projects() {
  const projects = [
    {
      title: "Pixel Animation",
      description: "A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://portfolio-demo.com",
      sourceUrl: "https://github.com/username/portfolio",
      image: "/projects/thepixelanimation.png",
      alt: "Portfolio Website"
    },
    {
      title: "The Prime Infra",
      description: "A full-stack task management application using React, Node.js, and MongoDB. Includes real-time updates, collaborative features, and mobile responsiveness.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://taskapp-demo.com",
      sourceUrl: "https://github.com/username/taskapp",
      image: "/projects/theprimeinfra.png",
      alt: "Task Management App"
    },
    {
      title: "Project X Flow",
      description: "A full-stack task management application using React, Node.js, and MongoDB. Includes real-time updates, collaborative features, and mobile responsiveness.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://taskapp-demo.com",
      sourceUrl: "https://github.com/username/taskapp",
      image: "/projects/projectxflow.png",
      alt: "Task Management App"
    },
    {
      title: "SUMIT WALIA PORTFOLIO",
      description: "A full-stack task management application using React, Node.js, and MongoDB. Includes real-time updates, collaborative features, and mobile responsiveness.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://taskapp-demo.com",
      sourceUrl: "https://github.com/username/taskapp",
      image: "/projects/hisumit.png",
      alt: "Task Management App"
    },
    {
      title: "My Portfolio",
      description: "A full-stack task management application using React, Node.js, and MongoDB. Includes real-time updates, collaborative features, and mobile responsiveness.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://taskapp-demo.com",
      sourceUrl: "https://github.com/username/taskapp",
      image: "/projects/portfolio.png",
      alt: "Task Management App"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-10 sm:py-16 md:py-20">
      <div className="max-w-[1200px] w-full px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-8 sm:mb-10 md:mb-12">Selected Work</h2>
        
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-[#141414] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/3 p-4 sm:p-6 md:p-8 bg-[#1a1a1a] relative">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-100 mb-2">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 font-medium mb-2 sm:mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-blue-300">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
                    <a 
                      href={project.liveUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group/link text-sm sm:text-base"
                    >
                      <span>View Live</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a 
                      href={project.sourceUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group/link text-sm sm:text-base"
                    >
                      <span>Source Code</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative w-full md:w-2/3 h-48 sm:h-64 md:h-[400px] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
