// components/About.tsx
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Layout from "./Layout";
import { BookText, Code2, Cpu, Gamepad2, GraduationCap, Layers3, Library, ScrollText } from "lucide-react";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Profile Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
              <img 
                src="/src/images/me.png" 
                alt="Nash T. Golosino"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-light tracking-tight">Nash T. <span className="font-medium">Golosino</span></h2>
            <p className="text-gray-600 text-sm">Computer Science Student</p>
          </div>

          <div className="md:col-span-2">
            <Card className="border-gray-200">
              <CardHeader className="border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-lg font-medium">Academic Background</h3>
                </div>
              </CardHeader>
              <CardContent className="">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 bg-gray-400 rounded-full"></span>
                    <span>A 20-year old student currently studying Computer Science major in Computational Health Informatics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Passionate in learning machine learning and applying its value to healthcare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Currently attending summer classes focusing on Seminars, Workshops, Tours, and Technical Writing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Favorites Section */}
        <section className="mb-12">
          <h3 className="text-xl font-light mb-6 flex items-center gap-2">
            <Library className="w-5 h-5" />
            <span>Personal <span className="font-medium">Favorites</span></span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-gray-200">
              <CardHeader className="flex items-center gap-2">
                <BookText className="w-5 h-5 text-gray-700" />
                <h4 className="font-medium">Books</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Self-help</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Science</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Biography</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-gray-700" />
                <h4 className="font-medium">Games</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Valorant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Mobile Legends</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-gray-700" />
                <h4 className="font-medium">Food</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Chicken</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Hotdog</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h3 className="text-xl font-light mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            <span>Technical <span className="font-medium">Skills</span></span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-gray-200">
              <CardHeader className="flex items-center gap-2">
                <Layers3 className="w-5 h-5 text-gray-700" />
                <h4 className="font-medium">Languages Learned</h4>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Java', 'Python'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-gray-700" />
                <h4 className="font-medium">Currently Learning</h4>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Laravel'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-xl font-light mb-6 flex items-center gap-2">
            <BookText className="w-5 h-5" />
            <span>Academic <span className="font-medium">Projects</span></span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "PharmTrack",
                description: "Inventory management system for pharmacies with receipt generation capabilities",
                image: "SeminarLearnings/src/images/pharmtrack.png"
              },
              {
                title: "EchoNITES",
                description: "Event management platform with tracking and scheduling features",
                image: "SeminarLearnings/src/images/echonites.png"
              },
              {
                title: "Graduate School Exam System",
                description: "Comprehensive examination system for graduate school applicants",
                image: "SeminarLearnings/src/images/graduate.png"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-gray-200 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <CardHeader>
                  <h4 className="font-medium">{project.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;