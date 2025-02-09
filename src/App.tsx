import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Rocket, Brain, Coffee, BookOpen, Briefcase, Award, User, ExternalLink } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8 text-4xl md:text-6xl font-bold text-emerald-400 animate-float">
            🙏 नमस्ते
          </div>
          <Terminal className="w-16 h-16 text-emerald-400 mb-8 animate-pulse" />
          <div className="inline-block">
            <h2 className="typewriter text-xl md:text-2xl text-emerald-400 font-mono">
              Initializing Development Environment...
            </h2>
          </div>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="mt-4 text-emerald-400/80 text-sm font-mono animate-pulse">
            Welcome to Paras Mahajan's Portfolio
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/your-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-emerald-400 font-bold text-xl">PM</div>
            <div className="flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section id="home" className={`min-h-[80vh] flex flex-col items-center justify-center text-center ${activeSection !== 'home' ? 'hidden' : ''}`}>
  
            <Terminal className="w-16 h-16 text-emerald-400 mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Paras Mahajan
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">Full Stack Developer</p>
            <div className="flex space-x-4 mb-12">
              <a href="https://github.com/paras-mahajann" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/paras-mahajan-developer/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:mahajanparas912@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatsCard icon={<Code2 />} title="Projects" value="2" />
              <StatsCard icon={<Coffee />} title="Coffee Cups" value="100+" />
              <StatsCard icon={<Brain />} title="Technologies" value="7+" />
              <StatsCard icon={<Rocket />} title="Learning Experience" value="2 Years" />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className={`py-20 ${activeSection !== 'about' ? 'hidden' : ''}`}>
            <SectionTitle icon={<User />} title="About Me" />
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate Developer with expertise in building scalable web applications
                and implementing cutting-edge technologies. With a strong foundation in both frontend and
                backend development, I strive to create elegant solutions to complex problems.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className={`py-20 ${activeSection !== 'skills' ? 'hidden' : ''}`}>
            <SectionTitle icon={<Brain />} title="Skills" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { category: 'Frontend', skills: ['React', 'TKinter', 'Tailwind CSS', 'React-Native'] },
                { category: 'Backend', skills: ['Node.js', 'Python', 'Django', 'FastAPI'] },
                { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Mysql'] },
                { category: 'DevOps', skills: ['Docker', 'AWS', 'Git'] },
              ].map((group) => (
                <div key={group.category} className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <h3 className="text-emerald-400 font-semibold mb-4">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-gray-300">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className={`py-20 ${activeSection !== 'experience' ? 'hidden' : ''}`}>
            <SectionTitle icon={<Briefcase />} title="Experience" />
            <div className="space-y-8">
              {/* <TimelineItem
                title="Senior Full Stack Developer"
                company="Tech Corp"
                period="2020 - Present"
                description="Led development of enterprise applications, mentored junior developers, and implemented CI/CD pipelines."
              />
              <TimelineItem
                title="Full Stack Developer"
                company="StartUp Inc"
                period="2018 - 2020"
                description="Developed and maintained multiple web applications using React and Node.js."
              /> */}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className={`py-20 ${activeSection !== 'projects' ? 'hidden' : ''}`}>
            <SectionTitle icon={<Code2 />} title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Advanced Attendance System"
                description="An intelligent attendance tracking system built with OpenCV and Python. Features include face detection, recognition, and automated attendance marking. The system uses deep learning models for accurate face recognition and maintains attendance records in a database."
                tags={['Python', 'OpenCV', 'Deep Learning', 'MYSQl']}
                image="dist\assets\images\attendancepython.jpeg"
              />
              {/* <ProjectCard
                title="E-Commerce Platform"
                description="Full-featured e-commerce platform with real-time inventory management."
                tags={['React', 'Node.js', 'MongoDB']}
                image="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              /> */}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className={`py-20 ${activeSection !== 'education' ? 'hidden' : ''}`}>
            <SectionTitle icon={<BookOpen />} title="Education" />
            <div className="space-y-8">
              <TimelineItem
                title="Master's in Computer Science"
                company="Tech University"
                period="2016 - 2018"
                description="Specialized in Artificial Intelligence and Machine Learning"
              />
              <TimelineItem
                title="Bachelor's in Computer Engineering"
                company="Engineering College"
                period="2012 - 2016"
                description="First Class with Distinction"
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={`py-20 ${activeSection !== 'contact' ? 'hidden' : ''}`}>
            <SectionTitle icon={<Mail />} title="Contact" />
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700 text-white focus:border-emerald-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700 text-white focus:border-emerald-400 focus:outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700 text-white focus:border-emerald-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-emerald-400 text-gray-900 rounded-lg font-semibold hover:bg-emerald-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatsCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-colors group">
      <div className="text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400">{title}</div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center justify-center space-x-3 mb-12">
      <div className="text-emerald-400">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

function TimelineItem({ title, company, period, description }: { title: string; company: string; period: string; description: string }) {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-emerald-400 mb-2">{company}</div>
      <div className="text-gray-400 text-sm mb-4">{period}</div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags, image }: { title: string; description: string; tags: string[]; image: string }) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-8 h-8 text-emerald-400" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;