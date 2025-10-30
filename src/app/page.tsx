import { Mail, MapPin, Award, Briefcase, GraduationCap } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Wonderschool",
      period: "November 2024 - September 2025",
      achievements: [
        "Implemented a new monetization system for the platform, collaborating with the UX team to design it and leading the end-to-end implementation",
        "Worked on the stabilization of the payments module",
        "Re-wrote the mail notifications for invoices",
        "First responder for SEV-1 issues on a monthly rotation",
        "Used Cursor agent to support solutions, write unit tests, create documentation, and review pull requests"
      ],
      technologies: ["Node.js", "TypeScript", "Firebase", "Google Cloud", "Stripe", "NestJS", "React", "React Native", "Elixir", "GitHub Actions"]
    },
    {
      title: "Tech Lead",
      company: "Double Nines",
      period: "July 2021 - October 2024",
      achievements: [
        "Led a team of engineers in the development of new features",
        "Contributed to the refactor of the solution to enable it to scale",
        "Contributed to deploying the solution to production every three weeks",
        "Led and coded most of the Stripe-related features"
      ],
      technologies: ["Node.js", "TypeScript", "MongoDB", "HubSpot", "Stripe", "React", "Circle CI"]
    },
    {
      title: "Senior Software Engineer",
      company: "Dataart",
      period: "January 2021 - July 2021",
      achievements: [
        "Worked for a client in the fintech industry as tech lead",
        "Integrated the product to Western Union through an automation script",
        "Advised on agile methodologies as the client was new to them"
      ],
      technologies: [".NET Core", "Playwright", "Node.js", "SQL Server", "Azure"]
    },
    {
      title: "Tech Lead",
      company: "CloudX",
      period: "February 2020 - January 2021",
      achievements: [
        "Participated in several presales and high-level estimations",
        "Created the architecture and led the development team for a mobile-first product",
        "Successfully handed off a long-term development to a new team"
      ],
      technologies: [".NET Core", "React", "React Native", "Next.js", "Node.js", "SQL Server", "Azure", "AWS", "Fastlane", "GitHub Actions"]
    },
    {
      title: "Software Architect - Consultant",
      company: "AustralBit",
      period: "January 2018 - July 2021",
      achievements: [
        "Made decisions regarding technology and architecture to be used",
        "Technical leader of three small development teams simultaneously",
        "Deployed solutions to Azure",
        "Created solutions that interface with third-party applications like Facebook and Google",
        "Analyzed business/process requirements and met with clients"
      ],
      technologies: [".NET Core", "Angular", "Ionic", "Electron", "SQL Server", "Salesforce", "Apex", "Odoo", "Azure", "OAuth"]
    },
    {
      title: "Tech Lead",
      company: "InAllMedia",
      period: "July 2017 - February 2020",
      achievements: [
        "Led a team of five developers",
        "Performed reverse engineering over a legacy system",
        "Implemented AngularJS component-oriented solution",
        "Migrated existing functionality from ASP.NET to a REST application",
        "Improved SQL queries performance and wrote unit tests"
      ],
      technologies: ["AngularJS", "SQL Server", "C#", "ASP.NET"]
    },
    {
      title: "Senior Software Engineer",
      company: "Globant",
      period: "March 2014 - June 2017",
      achievements: [
        "Wrote unit and integration tests to meet 80% coverage required by QA",
        "Refactored SQL stored procedures to improve performance",
        "Involved in the successful launch of a fintech product from the discovery phase"
      ],
      technologies: ["AngularJS", "SQL Server", "jQuery", "Kendo UI", "ASP.NET", "C#"]
    },
    {
      title: "Semi Senior Software Engineer",
      company: "Hexacta",
      period: "August 2011 - February 2014",
      achievements: [
        "Analysis of business requirements",
        "Support for a web app recently launched",
        "Developed several short projects using an in-house CRM"
      ],
      technologies: ["SQL Server", "jQuery", "ASP.NET", "C#", "Drupal", "PHP"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-blue-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cristian Conde
            </h2>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium hover:text-blue-600 transition-colors">Experience & Education</a>
              <a href="#awards" className="text-sm font-medium hover:text-blue-600 transition-colors">Awards</a>
              <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl animate-pulse">
              CC
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cristian Conde
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Tech Lead & Senior Software Engineer
            </p>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Results-oriented software engineer with 12+ years of experience in developing cutting-edge
            engineering solutions with a wide range of eCommerce and technology features.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild className="border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50">
              <a href="https://github.com/cristianconde" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50">
              <a href="https://www.linkedin.com/in/cristianconde" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">12+</div>
              <div className="text-gray-600 text-sm font-medium">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">9</div>
              <div className="text-gray-600 text-sm font-medium">Companies</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-600 text-sm font-medium">Projects</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">2</div>
              <div className="text-gray-600 text-sm font-medium">Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Skilled in agile processes, backend and frontend development, and creating
              solutions that integrate with Plaid, Stripe, and other payment APIs. Expertise in
              designing and implementing relational systems, with a proven track record of
              leading development teams and delivering scalable eCommerce solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Bahía Blanca, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                <Mail className="h-4 w-4 text-pink-600" />
                <a href="mailto:cristianconde@gmail.com" className="hover:underline">
                  cristianconde@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Combined Section */}
      <section id="experience" className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Experience & Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experiences Column */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-8">
                {experiences.slice(0, 3).map((exp, index) => (
                  <div key={index} className="relative pl-12 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0">
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">{exp.period}</p>
                      <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-sm text-gray-500">{exp.company}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {exp.achievements[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-8">
                <div className="relative pl-12 pb-8 border-l-2 border-gray-200">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">2002 - 2010</p>
                    <h3 className="text-lg font-bold text-gray-900">Bachelor&apos;s Degree in Computer Science</h3>
                    <p className="text-sm text-gray-500">Universidad Nacional del Sur</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Comprehensive education in computer science fundamentals, algorithms, data structures, and software engineering principles.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 pb-8 border-l-2 border-gray-200">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">2010 - 2012</p>
                    <h3 className="text-lg font-bold text-gray-900">Specialization in Innovation and Technology Management</h3>
                    <p className="text-sm text-gray-500">Universidad Nacional del Sur</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Advanced specialization focusing on innovation strategies, technology management, and business process optimization.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 last:pb-0">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">2018</p>
                    <h3 className="text-lg font-bold text-gray-900">Salesforce Certified Platform App Builder (SU18)</h3>
                    <p className="text-sm text-gray-500">Salesforce</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Professional certification in Salesforce platform development and application building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Experiences Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Complete Work History</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{exp.title}</h3>
                      <p className="text-base font-semibold text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap bg-gray-50 px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600 mt-1 font-bold text-xs">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Think Big Award</h3>
                    <p className="text-gray-700 font-semibold">Globant</p>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full inline-block w-fit">2016</span>
                  </div>
                  <p className="text-gray-700">
                    Recognition for exceptional dedication and commitment to delivering outstanding results beyond standard expectations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Innovate Award</h3>
                    <p className="text-gray-700 font-semibold">Globant</p>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full inline-block w-fit">2015</span>
                  </div>
                  <p className="text-gray-700">
                    Recognition for developing innovative solutions and strategic approaches across multiple client engagements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            I welcome opportunities for professional collaboration and networking
          </p>
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <a
                href="mailto:cristianconde@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
              >
                <Mail className="h-6 w-6" />
                <span>cristianconde@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 shadow-md">
                <a href="https://github.com/cristianconde" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 shadow-md">
                <a href="https://www.linkedin.com/in/cristianconde" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 Cristian Conde. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
