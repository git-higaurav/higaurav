export default function Services() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center py-20">
      <div className="max-w-[1200px] w-full px-8">
        <h2 className="text-4xl font-light text-white mb-12">Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-light text-gray-200">Frontend Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Modern, responsive web interfaces built with React.js, Next.js, and TypeScript.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>React.js & Next.js development</li>
              <li>Responsive design implementation</li>
              <li>State management (Redux, Context)</li>
              <li>Performance optimization</li>
              <li>Component architecture</li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-light text-gray-200">Backend Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Robust server-side solutions using Node.js and Express.js.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>RESTful API development</li>
              <li>Authentication & authorization</li>
              <li>Microservices architecture</li>
              <li>Server-side validation</li>
              <li>Error handling & logging</li>
            </ul>
          </div>

          {/* Database Design */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-light text-gray-200">Database Design</h3>
            <p className="text-gray-400 leading-relaxed">
              MongoDB database architecture and optimization.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>Schema design & modeling</li>
              <li>Indexing strategies</li>
              <li>Query optimization</li>
              <li>Data migration</li>
              <li>Backup & recovery</li>
            </ul>
          </div>

          {/* Deployment & DevOps */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-light text-gray-200">Deployment & DevOps</h3>
            <p className="text-gray-400 leading-relaxed">
              Cloud deployment and infrastructure management.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>AWS & Vercel deployment</li>
              <li>CI/CD pipeline setup</li>
              <li>Docker containerization</li>
              <li>Environment configuration</li>
              <li>Monitoring & logging</li>
            </ul>
          </div>

          {/* MERN Stack Solutions */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-light text-gray-200">MERN Stack Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              End-to-end web applications using MERN stack.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>Full-stack development</li>
              <li>Real-time applications</li>
              <li>Progressive Web Apps</li>
              <li>Single Page Applications</li>
              <li>Scalable architecture</li>
            </ul>
          </div>

          {/* API Integration */}
          <div className="bg-white/5 p-6 rounded-lg space-y-4 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-light text-gray-200">API Integration</h3>
            <p className="text-gray-400 leading-relaxed">
              Third-party API integration and custom API development.
            </p>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>Payment gateway integration</li>
              <li>Social media APIs</li>
              <li>Authentication services</li>
              <li>Webhook implementation</li>
              <li>API documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
