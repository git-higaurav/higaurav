import Float from "./flot"
export default function Main() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] right-0 top-0 border border-white/5 rounded-full"></div>
        <div className="absolute w-[300px] h-[300px] left-20 bottom-20 border border-white/5 rounded-full"></div>
        <div className="absolute w-[200px] h-[200px] right-40 bottom-40 bg-white/[0.01] rounded-lg rotate-45"></div>
        <div className="absolute w-[150px] h-[150px] left-40 top-40 bg-white/[0.01] rounded-lg -rotate-12"></div>
      </div>

      <div className="max-w-[1200px] w-full px-8 py-32 relative z-10">
        {/* Hero Section with centered content */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-7xl font-light text-white mb-4">
            Full Stack Developer
          </h1>
          <h2 className="text-5xl font-light text-gray-400 mb-8">
            & Designer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl font-light">
            Specialized in building scalable enterprise applications with modern technologies and best practices
          </p>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400"
          fill="none" 
          strokeWidth="2"
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <Float />
    </div>
  );
}
