// src/seminars/4.tsx
import React from "react";
import Layout from "../Layout";
import SeminarPagination from "../SeminarPagination";
import { 
  BookOpen, Code, Cpu, Database, 
  Headphones, Layers, MessageSquare, 
  Smartphone, Users, Video, Calendar, Map, 
  CheckCircle, CloudOff, Clock, Heart, HeartPlus,
  Smile, Frown, GitMerge, GitPullRequest
} from "lucide-react";
import caja from "@/assets/images/caja.jpg";

const Seminar4: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <HeartPlus className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Seminar #4</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">May 23, 2025</span>
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

          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>My <span className="font-medium">Takeaways</span></span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-justify">
                <span className="font-medium">Sir Hizon B. Caja</span> gave me a clearer picture of how meaningful a capstone project can become when it addresses real societal needs. Their project, <span className="font-medium">TherapEase</span>, stood out because it wasn’t just another healthcare app—it was specifically designed to assist therapists and carers of children with developmental delays. I found its features impressive: <span className="font-medium">video conferencing</span>, <span className="font-medium">offline therapy materials</span>, <span className="font-medium">session booking</span>, and even <span className="font-medium">therapist validation</span>. It was clear that they aimed to fill a gap that most general healthcare apps failed to address. Seeing how they embedded accessibility and collaboration into one platform inspired me to think about how technology can be used to bridge more personal and community-based needs.
              </p>
              <p className="text-justify">
                As a developer-in-progress, I was particularly drawn to how they built the system using <span className="font-medium">Flutter, Dart, and Node.js.</span> The process involved a lot of trial and error through <span className="font-medium">iterative design and testing</span>. But more than the technical details, what resonated with me were the challenges they faced—unresponsive therapy centers, backend limitations, time pressure, and even internal group disputes. These struggles felt real and familiar. Yet despite everything, they found ways to laugh, bond, and push through. That reminded me that development isn't just about the code—it’s about <span className="font-medium">resilience, empathy, and the people you work with</span>.
              </p>
              <p className="text-justify">
                The lesson that truly took away from this seminar is that great projects are not always perfect—they are meaningful. I admired how they didn’t pretend everything went smoothly, but instead showed how growth came from the difficult parts. It made me realize that in my own future capstone, I need to prioritize both <span className="font-medium">technical strength</span> and <span className="font-medium">team dynamics</span>. I now see how important it is to ask for help, listen actively, and focus on creating solutions that matter. This session didn’t just teach me how to build systems—it reminded me why I chose this path in the first place.
              </p>
            </div>
          </section>

          <SeminarPagination 
            currentPage={4} // Current seminar number
            totalSeminars={9} // Total number of seminars
            seminarsPerPage={1} // Usually 1 seminar per page
            basePath="/seminars" // Your base path
          />
        </div>
      </div>
    </Layout>
  );
};

export default Seminar4;