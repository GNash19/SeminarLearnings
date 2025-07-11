// components/seminars/1.tsx
import React from "react";
import Layout from "../Layout";
import SeminarPagination from "../SeminarPagination"
import { 
  BookOpen, Code, Cpu, GitBranch, Globe, GraduationCap, Navigation,
  Layers3, MessageSquare, Monitor, ScrollText, Slack, TrendingUp, Users, Briefcase
} from "lucide-react";
import ned from '@/assets/images/ned.jpg';

const Seminar1: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-5 py-12 max-w-5xl mt-16">
        <section className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <Navigation className="w-4 h-4 text-gray-900" />
            <span className="text-sm font-medium text-gray-900">Seminar #1</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">May 17, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            Navigating <span className="font-medium">Software Development</span> in the Industry
          </h1>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-200 mb-3">
              <img 
                src={ned}
                alt="Sir Ned Isaiah Palacios"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-medium">Sir Ned Isaiah Palacios</h2>
            <div className="flex flex-col items-center space-y-2 mt-2">
              <div className="flex items-center gap-2 text-gray-600">
                <GraduationCap className="w-4 h-4" />
                <span>CCS Alumnus Batch 2024</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="w-4 h-4" />
                <span>Software Engineer @ Norg.ai</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>Tech Community Builder</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
            <ScrollText className="w-5 h-5" />
            <span>The <span className="font-medium">Journey</span></span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {[
                {
                  icon: <GraduationCap className="w-5 h-5 text-gray-700" />,
                  title: "From Lowkey Student to GDG Lead",
                  content: "Started as a quiet student but emerged as a leader in Google Developer Groups"
                },
                {
                  icon: <Users className="w-5 h-5 text-gray-700" />,
                  title: "Founded DICE Community",
                  content: "Co-founded developer community that became a hub for tech enthusiasts"
                },
                {
                  icon: <Globe className="w-5 h-5 text-gray-700" />,
                  title: "Fateful Crypto Connection",
                  content: "Met a crypto ambassador who would later offer him a job opportunity"
                },
                {
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  title: "Crash Course in AI",
                  content: "Learned LangChain from scratch to build Emma chatbot for student handbook"
                },
                {
                  icon: <Code className="w-5 h-5 text-gray-700" />,
                  title: "The Interview Challenge",
                  content: "Faced with tough technical questions but demonstrated problem-solving skills. He got the job!"
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Workflow */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            <span>A Day at <span className="font-medium">Norg.ai</span></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <Slack className="w-5 h-5 text-gray-700" />
                <span>Workflow</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Standup meetings where reporters choose next speaker",
                  "Coding & problem-solving sessions",
                  "Pull request creation and code reviews",
                  "Feature verification testing",
                  "Continuous Slack communication"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium flex items-center gap-2 mb-3">
                <Layers3 className="w-5 h-5 text-gray-700" />
                <span>Tools Stack</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Postman", icon: "🛠️" },
                  { name: "Azure", icon: "☁️" },
                  { name: "GitHub", icon: "🐙" },
                  { name: "ChatGPT", icon: "🤖" },
                  { name: "PyCharm", icon: "⌨️" },
                  { name: "VSCode", icon: "💻" },
                  { name: "Jira", icon: "📊" },
                  { name: "Confluence", icon: "📝" }
                ].map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm flex items-center gap-1.5"
                  >
                    <span>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span>Industry <span className="font-medium">Insights</span></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-700" />
                <span>Job Market Trends</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "AI/ML specialization in high demand",
                  "Shift to skill-based hiring over degrees",
                  "Growth of gig economy in tech",
                  "Remote/hybrid work becoming standard"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-gray-700" />
                <span>Career Pathways</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Build portfolio projects to showcase skills",
                  "Continuous practice and upskilling",
                  "Community engagement is crucial",
                  "Developers need more than coding skills",
                  "Master your tools and stay trend-aware"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-light mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            <span>My <span className="font-medium">Takeaways</span></span>
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-justify">
              Attending the seminar gave me a deeper appreciation of how vital it is to <span className="font-medium">build in order to learn and showcase my skills</span>. One of the standout lessons for me was realizing that projects, even small ones, are powerful learning tools. I was inspired by how tools like LangChain can be leveraged to create solutions like Emma, an AI-powered chatbot. It reminded me that <span className="font-medium">learning doesn’t always come from formal instruction</span>—often, it’s the self-driven projects that push us to understand complex concepts. Even when the process isn’t ideal, such as being asked tough technical questions in an interview, having tangible experience to back you up makes all the difference. 
            </p>
            <p className="text-justify">
              Another big takeaway was the importance of <span className="font-medium">engaging with the tech community</span>. I used to prefer staying lowkey, but hearing how being part of communities like GDG and DICE can lead to growth and opportunities made me reflect on my own approach. It became clear to me that <span className="font-medium">developers are more than just coders</span>. We’re also collaborators, communicators, and leaders when needed. From code standups to pull requests, and from idea-sharing on Slack to organizing tasks on Jira, everything contributes to building a culture of shared progress. Community is where skills are sharpened, friendships are built, and opportunities often come unexpectedly. 
            </p>
            <p className="text-justify">
              Finally, the seminar emphasized how rapidly the industry is evolving. We are entering an era where <span className="font-medium">AI, skill-based hiring, the gig economy,</span> and <span className="font-medium">remote/hybrid work</span> are reshaping how careers are built. To stay competitive, I realized that I need to <span className="font-medium">master my tools</span>—from development platforms like GitHub and Postman to deployment via Azure, and even utilizing ChatGPT for technical insights. The session reminded me that to thrive, I must always be willing to <span className="font-medium">persist, practice, and progress</span>. It’s not just about writing code—it’s about staying relevant, adaptable, and informed.
            </p>
          </div>
        </section>

        <SeminarPagination 
          currentPage={1} // Current seminar number
          totalSeminars={9} // Total number of seminars
          seminarsPerPage={1} // Usually 1 seminar per page
          basePath="/seminars" // Your base path
        />
      </div>
    </Layout>
  );
};

export default Seminar1;