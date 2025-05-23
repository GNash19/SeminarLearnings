// src/seminars/4.tsx
import React from "react";
import Layout from "../Layout";
import { 
  BookOpen, Code, Cpu, Database, 
  Headphones, Layers, MessageSquare, Mic,
  Smartphone, Users, Video, Calendar, Map, 
  CheckCircle, CloudOff, Clock, Heart, 
  Smile, Frown, GitMerge, GitPullRequest
} from "lucide-react";
import caja from "@/assets/images/caja.jpg";

const Seminar4: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <Mic className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium">Seminar #3</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            <span className="font-medium">TherapEase:</span> Bridging & Fostering
          </h1>
          <p className="text-xl text-gray-600">
            Collaboration for Therapists and Carers
          </p>
        </section>

        {/* Speaker Profile */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={caja} 
              alt="Mr. Hizon B. Caja"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Mr. Hizon B. Caja</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span>CCS Alumnus Batch 2024 | CCS Faculty</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="w-5 h-5 text-gray-600" />
                <span>Developer of TherapEase Mobile Application</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-gray-600" />
                <span>Specializes in frontend website development</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seminar Content */}
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Project Overview</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                TherapEase addresses a critical gap in digital healthcare solutions by providing specialized teletherapy for children with developmental delays. Unlike generic healthcare apps, it offers comprehensive tools specifically designed for therapy collaboration between professionals and caregivers.
              </p>
              <div className="my-6 p-6 bg-gray-50 border-l-4 border-gray-400">
                <p className="font-medium flex items-start gap-2">
                  <Heart className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>"TherapEase represents more than an app—it's a bridge connecting therapists with children who need consistent, quality care regardless of location."</span>
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Key Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Core Functionalities</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    { icon: <Map className="w-5 h-5" />, text: "Navigation system for therapy centers" },
                    { icon: <Video className="w-5 h-5" />, text: "Secure video conferencing" },
                    { icon: <MessageSquare className="w-5 h-5" />, text: "Encrypted messaging system" },
                    { icon: <CloudOff className="w-5 h-5" />, text: "Offline-accessible therapy materials" },
                    { icon: <Calendar className="w-5 h-5" />, text: "Session booking and management" },
                    { icon: <CheckCircle className="w-5 h-5" />, text: "Therapist validation system" }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-600 mt-0.5">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  <span>Technical Implementation</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'Dart', 'Node.js', 'Firebase', 'VS Code'].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Development Approach</h4>
                    <p className="text-gray-700">
                      Iterative design with continuous user testing, following Agile methodology with bi-weekly sprints and stakeholder feedback sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Frown className="w-5 h-5" />
              <span>Development Challenges</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Operational Hurdles</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Unresponsive therapy centers during research phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Backend programming limitations requiring outsourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Team disputes requiring conflict resolution strategies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Smile className="w-5 h-5" />
                  <span>Overcoming Adversity</span>
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Despite challenges, the team developed resilience through structured time management techniques and learned the value of asking for help when facing technical limitations.
                  </p>
                  <div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded border border-gray-200">
                    <GitMerge className="w-4 h-4" />
                    <span>Conflict resolution led to stronger collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Takeaways */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <GitPullRequest className="w-5 h-5" />
              <span>Key Takeaways</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  <span>For Future Capstone Teams</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Begin stakeholder engagement early in the research phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Allocate buffer time for unexpected technical challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Establish clear team communication protocols from day one</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  <span>Professional Growth</span>
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700">
                    The project served as a crucible for developing both technical expertise and essential soft skills. Team members emerged with enhanced capabilities in:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Cross-functional collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Technical problem-solving under constraints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>User-centered design thinking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Heart className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-light mb-2">Final Reflection</h3>
                <p className="text-gray-700">
                  TherapEase stands as testament to the power of perseverance in software development. While the journey presented numerous technical and interpersonal challenges, the team's commitment to creating meaningful impact in the therapy community transformed obstacles into valuable learning experiences. The project underscored that successful development extends beyond code—it requires empathy for end-users, flexibility in problem-solving, and resilience in the face of setbacks. More importantly, we made memories that will last a lifetime, giving us happiness and joy in our hearts that we will cherish forever. 
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Seminar4;