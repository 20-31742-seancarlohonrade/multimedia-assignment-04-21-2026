export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A unique blend of technical prowess and creative writing, bringing both logic and language to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
            <p className="text-gray-600 mb-4">
              As a recent Computer Engineering graduate, I've developed a unique perspective on technology. 
              My education equipped me with deep technical knowledge in web development and system administration, 
              while my passion for communication led me to explore professional writing.
            </p>
            <p className="text-gray-600">
              This combination allows me to not only build robust systems but also articulate complex technical 
              concepts clearly. Whether I'm developing a web application, managing IT infrastructure, or crafting 
              compelling content, I bring precision, creativity, and dedication to every task.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Offer</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Web Development</h4>
                  <p className="text-gray-600">Building responsive, modern web applications with clean code</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">System Administration</h4>
                  <p className="text-gray-600">Managing and optimizing IT infrastructure and networks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Writing</h4>
                  <p className="text-gray-600">Ghostwriting, grant writing, copy editing, and proofreading services</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Technical Documentation</h4>
                  <p className="text-gray-600">Creating clear, comprehensive technical documentation and guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
