// src/seminars/6.tsx
import React from "react";
import Layout from "../Layout";
import SeminarPagination from "../SeminarPagination";
import { 
  BookOpen, Briefcase, Clock, Compass, 
  FileText, Globe, GraduationCap, Layers, Lightbulb, 
  Map, PieChart, Rocket, Settings, TrendingUp, Users, MessageCircleCode
} from "lucide-react";
import sempic6_1 from '@/assets/images/sempic-6-1.jpg';
import sempic6_2 from '@/assets/images/sempic-6-2.jpg';
import sempic6_3 from '@/assets/images/sempic-6-3.jpg';
import ian from '@/assets/images/ian.jpg';

const Seminar6: React.FC = () => {
  const innovationImages = [
    sempic6_1,
    sempic6_2,
    sempic6_3
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <Rocket className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Seminar #6</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">May 27, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            Bridging <span className="font-medium">Academia and Startup Innovation</span>
          </h1>
          <p className="text-xl text-gray-600">
            Transforming Research Compliance into Commercial Utilization
          </p>
        </section>

        {/* Speaker Profile */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={ian} 
              alt="Mr. Ceasar Ian P. Benablo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Mr. Ceasar Ian P. Benablo</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-gray-600" />
                <span>CCS Dean | Marian Incubator Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>Startup Development Specialist</span>
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-gray-600" />
                <span>Academic-Commercial Bridge Builder</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Innovation Gallery */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {innovationImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border border-gray-200">
              <img
                src={image}
                alt={`Innovation visual ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium">Marian TBI</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Seminar Content */}
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>The Academic-Commercial Gap</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Students often treats research as a compliance exercise rather than a springboard for innovation. Although students develop systems as part of their coursework, they often don't see these ideas as something that can be commercialized or used to solve real problems in the community, as they are not trained to identify the commercial value of their ideas.
              </p>
              
              <div className="my-6 p-6 bg-gray-50 border-l-4 border-gray-400">
                <p className="font-medium flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>"Research should be measured by utilization impact, not just academic compliance. Every student project has potential to solve real-world problems if given proper pathways to commercialization."</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Current Reality</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Research ends at prototype demonstration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Lack of commercialization pathways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Academic incentives misaligned with market needs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Map className="w-5 h-5" />
                    <span>Ideal Pathway</span>
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: <BookOpen className="w-5 h-5" />, text: "Research → Identify societal problems" },
                      { icon: <Settings className="w-5 h-5" />, text: "Prototyping → Functional solutions" },
                      { icon: <Users className="w-5 h-5" />, text: "Validation → Market testing" },
                      { icon: <TrendingUp className="w-5 h-5" />, text: "Utilization → Commercial impact" }
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-full">
                          {step.icon}
                        </div>
                        <span>{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Required Changes */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Transforming the Ecosystem</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Academic Changes */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Academic Reforms</span>
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Strengthen entrepreneurial mindset in curriculum",
                    "Faculty training on commercialization",
                    "Community-engaged research projects",
                    "Participation in innovation movements",
                    "Support for technology incubators"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Government Support */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Policy & Infrastructure</span>
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Innovation-friendly policies and laws",
                    "Accessible funding mechanisms",
                    "Collaborative public innovation spaces",
                    "Incentive programs for startups",
                    "Public-private partnership frameworks"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              <span>The Innovation Pipeline</span>
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-lg font-medium mb-3">From Classroom to Market</h3>
                  <p className="text-gray-700 mb-4">
                    The envisioned pipeline transforms academic output into economic value through structured stages of development, validation, and commercialization support.
                  </p>
                  
                  <div className="grid grid-cols-4 gap-2 text-center text-sm">
                    {[
                      { icon: <BookOpen className="w-5 h-5 mx-auto" />, label: "Research" },
                      { icon: <Settings className="w-5 h-5 mx-auto" />, label: "Prototype" },
                      { icon: <Users className="w-5 h-5 mx-auto" />, label: "Validate" },
                      { icon: <Briefcase className="w-5 h-5 mx-auto" />, label: "Commercialize" }
                    ].map((stage, index) => (
                      <div key={index} className="p-3 bg-white rounded border border-gray-200">
                        <div className="w-8 h-8 mx-auto mb-2 text-gray-700">
                          {stage.icon}
                        </div>
                        <div>{stage.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/3 border-l border-gray-200 pl-6">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Long-Term Impact</span>
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Vibrant startup ecosystem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Solutions to local challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Economic growth through innovation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full mb-6">
              <div className="bg-white px-8 py-6 rounded-full">
                <h3 className="text-2xl font-light mb-3">
                  Changing the <span className="font-medium">Philippines</span> Starts Here
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Each student's innovative potential represents a step toward national progress. The transformation from compliance-driven to impact-focused research begins with your idea.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-4 flex items-center gap-2">
              <MessageCircleCode className="w-5 h-5" />
              <span>My <span className="font-medium">Takeaways</span></span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-justify">
                The seminar struck a personal chord with me as <span className="font-medium">Mr. Ceasar Ian P. Benablo</span>, our CCS Dean and Marian Incubator Manager, asked a simple yet powerful question: <span className="font-medium">“What’s your end goal?”</span> At first, I chuckled—of course I want to master coding, graduate, and get rich, but the deeper message was clear: we should be aiming for impact. He challenged us to shift our mindset from <span className="font-medium">research as mere compliance</span> to <span className="font-medium">research as utilization</span>. Too often, we treat projects as requirements to pass, not as opportunities to address real-world problems.
              </p>
              <p className="text-justify">
                Mr. Benablo walked us through a roadmap: from <span className="font-medium">research</span> that identifies societal gaps, to <span className="font-medium">prototyping</span> solutions, to <span className="font-medium">customer validation</span> that tests practicality, and finally to <span className="font-medium">utilization</span>—the ultimate goal. Yet sadly, most student projects stop at the prototype. We’re missing out on <span className="font-medium">commercializing innovations</span> because the mindset just isn’t there. He emphasized that change starts with a <span className="font-medium">shift in mindset</span>: we need to foster an <span className="font-medium">entrepreneurial spirit</span> in students, empower teachers, and connect deeply with our communities.
              </p>
              <p className="text-justify">
                What inspired me most was his vision of the future where schools, government, and industries work together to make innovation flourish. He called for <span className="font-medium">accessible funding</span>, <span className="font-medium">collaborative public spaces</span>, and <span className="font-medium">incentives for startups</span>. As someone aspiring to make a difference through tech, I felt that challenge deeply. <span className="font-medium">We are heading toward innovation, startup development, and commercialization</span>—and I want to be part of that. As Sir Benablo powerfully said, <span className="font-medium">"Change the Philippines one step at a time, and it starts with you."</span>
              </p>
            </div>
          </section>

          <SeminarPagination 
            currentPage={6} // Current seminar number
            totalSeminars={9} // Total number of seminars
            seminarsPerPage={1} // Usually 1 seminar per page
            basePath="/seminars" // Your base path
          />
        </div>
      </div>
    </Layout>
  );
};

export default Seminar6;