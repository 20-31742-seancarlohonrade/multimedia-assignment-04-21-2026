import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Available for Projects
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-purple-600">Sean Carlo Honrade</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Computer Engineer | Developer | Writer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fresh graduate with a passion for technology and storytelling. I blend technical expertise 
              in web development and system administration with professional writing skills to create 
              comprehensive digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg transition-colors">
                Download CV
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-purple-600 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-purple-600 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-purple-600 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Replace with your actual photo */}
              <div className="w-full h-[500px] bg-gradient-to-br from-purple-200 to-purple-400 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">SCH</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-400 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
