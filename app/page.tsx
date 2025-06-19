"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    languages: ["Python", "JavaScript", "Bash", "SQL"],
    frameworks: ["Flask", "Scikit-learn", "TensorFlow", "Metasploit", "Wireshark", "Git"],
    softSkills: ["Problem-solving", "Adaptability", "Communication"],
  }

  const projects = [
    {
      title: "SentinelBackdoor",
      description: "Reverse shell/backdoor for penetration testing built with Python",
      tech: ["Python", "Cybersecurity", "Networking"],
      github: "#",
    },
    {
      title: "FraudVision",
      description: "ML-based fraud detection using supervised learning algorithms",
      tech: ["Python", "Machine Learning", "Scikit-learn"],
      github: "#",
    },
    {
      title: "NetScanAnalyzer",
      description: "Multi-threaded network scanner and service mapper",
      tech: ["Python", "Networking", "Threading"],
      github: "#",
    },
    {
      title: "AutoCleanPro",
      description: "Flask-based data cleaning and export tool",
      tech: ["Flask", "Python", "Data Processing"],
      github: "#",
    },
    {
      title: "AiSentinel Dashboard",
      description: "React + API tool for visualizing AI model health",
      tech: ["React", "API", "Data Visualization"],
      github: "#",
    },
  ]

  const expertise = [
    {
      icon: "🔐",
      title: "Cybersecurity",
      description: "Penetration testing, vulnerability assessment, and security analysis",
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Building intelligent systems and predictive models",
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Data visualization, statistical analysis, and insights generation",
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "Full-stack development with focus on Python and backend systems",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold">Arnold Imuran</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Mobile menu button */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 space-y-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20">
                <img
                  src="/images/arnold-profile.jpg"
                  alt="Arnold Imuran"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Arnold Imuran
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Cybersecurity Specialist • ML Explorer • Data Analyst • Developer
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <CardContent className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <p className="mb-6">
                    I'm Arnold Imuran, a passionate and skilled Computer Science graduate with a deep fascination for
                    cybersecurity, machine learning, and data analysis. My journey in technology has been driven by an
                    insatiable curiosity to understand how systems work and how they can be made more secure and
                    intelligent.
                  </p>
                  <p className="mb-6">
                    With hands-on experience in cybersecurity labs and building AI models, I've developed a unique
                    perspective that bridges the gap between security and intelligence. I believe in creating solutions
                    that are not only innovative but also secure and reliable.
                  </p>
                  <p>
                    My goal is to contribute to building a safer digital world while leveraging the power of artificial
                    intelligence to solve real-world problems. I'm always eager to take on new challenges and
                    collaborate with like-minded professionals who share my passion for technology and security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Areas of Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((area, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white dark:bg-gray-900"
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                    Frameworks & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-green-600 dark:text-green-400">
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.softSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white dark:bg-gray-900"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">arnoldarno47@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">0792 588 680</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" className="w-full" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" className="w-full" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" rows={4} className="w-full" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-lg font-semibold">Arnold Imuran</p>
                <p className="text-gray-400">Cybersecurity • ML • Data Analysis • Development</p>
              </div>
              <div className="flex space-x-6">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2024 Arnold Imuran. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
