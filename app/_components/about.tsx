export default function About() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background lighting effects - very subtle */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] -right-40 -top-40 bg-gradient-to-l from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] -left-20 -bottom-20 bg-gradient-to-r from-violet-500/3 to-indigo-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] w-full px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-white">About Me</h2>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer with a keen eye for design, dedicated to crafting elegant solutions for complex problems. With expertise in modern web technologies and a strong foundation in software architecture, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring that every project I undertake not only functions flawlessly but also delivers an exceptional user experience.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-white">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-gray-300 mb-2">Frontend</h4>
                <p className="text-gray-400 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-gray-300 mb-2">Backend</h4>
                <p className="text-gray-400 text-sm">Node.js, Python, SQL, REST APIs</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-gray-300 mb-2">Design</h4>
                <p className="text-gray-400 text-sm">UI/UX, Figma, Adobe Creative Suite</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-gray-300 mb-2">Tools</h4>
                <p className="text-gray-400 text-sm">Git, Docker, AWS, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
