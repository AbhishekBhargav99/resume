import { Github, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Abhishek Bhargav</h1>
          <p className="text-xl mb-6">Full Stack Developer</p>
          <div className="flex space-x-4">
            <a href="https://github.com/AbhishekBhargav99" className="flex items-center hover:text-blue-200">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/AbhishekBhargav" className="flex items-center hover:text-blue-200">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="mailto:bhargavab720@gmail.com" className="flex items-center hover:text-blue-200">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a href="tel:+917889963163" className="flex items-center hover:text-blue-200">
              <Phone className="w-5 h-5 mr-2" />
              Call
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-4">
            I'm a Full Stack Developer with expertise in building scalable web applications using Spring Boot, React, and Angular. 
            Currently working at BNY Mellon, I specialize in developing secure and efficient applications using modern technologies 
            including OAuth2.0, Redux, and GitLab CI/CD pipelines.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          
          <div className="space-y-8">
            {/* BNY Mellon */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Full Stack Developer</h3>
                  <p className="text-gray-600">BNY Mellon</p>
                </div>
                <span className="text-gray-500">2023 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                  Developed secure applications using Spring Boot and Spring Security with OAuth2.0 integration
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                  Built responsive front-end applications using React and Angular with Redux state management
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                  Implemented CI/CD pipelines using GitLab for automated testing and deployment
                </li>
              </ul>
            </div>

            {/* Sandvine */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Software Engineer</h3>
                  <p className="text-gray-600">Sandvine Technologies, Bengaluru</p>
                </div>
                <span className="text-gray-500">Aug 2022 - June 2023</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                  Developed 15+ Spring Boot REST APIs for performance monitoring and subscriber analysis dashboards
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                  Increased code coverage from 68% to 82% through comprehensive UI testing using TestCafe
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                  Optimized API response times by 70% using Java Parallelism and Redis caching
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Electronic Healthcare Records on Blockchain</h3>
              <p className="text-gray-700 mb-4">
                Built a permissioned blockchain system using Hyperledger Fabric with Angular frontend and Express.js backend.
                Implemented secure data storage using MongoDB Cloud Atlas and JWT authentication.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Hyperledger Fabric</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Angular</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">College Admissions Portal</h3>
              <p className="text-gray-700 mb-4">
                Developed a Java-based console application for college admissions counseling using core Java concepts,
                multithreading, and JDBC with MySQL database.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JDBC</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Multithreading</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">C++</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Angular</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Redux</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">GitLab CI/CD</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Jira</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Redis</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MySQL</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Abhishek Bhargav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;