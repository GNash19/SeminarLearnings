// components/seminars/1.tsx
import React from "react";
import Layout from "../Layout";
import { 
  BookOpen, Code, Cpu, GitBranch, Globe, GraduationCap, 
  Layers3, MessageSquare, Mic, Monitor, ScrollText, Slack, TrendingUp, Users, Briefcase
} from "lucide-react";
import ned from '@/assets/images/ned.jpg';

const Seminar1: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-5 py-12 max-w-5xl mt-16">
        <section className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <Mic className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium">Seminar #1</span>
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
              This seminar revealed that success in tech isn't just about technical skills—it's about <span className="font-medium">problem-solving</span>, <span className="font-medium">adaptability</span>, and <span className="font-medium">community</span>. Sir Ned's journey from student to professional demonstrated how embracing challenges (like learning LangChain under pressure) can open unexpected doors. Furthermore, I learned that perseverance and a willingness to learn are key to overcoming obstacles in the tech world.
            </p>
            <p className="text-justify">
              The emphasis on <span className="font-medium">portfolio building</span> resonated deeply with me. Rather than just completing assignments, I now understand the value of creating projects that solve real problems and showcase my growing skillset.
            </p>
            <p className="text-justify">
              Most importantly, I learned that the developer's toolkit extends beyond code editors—it includes <span className="font-medium">communication platforms</span>, <span className="font-medium">collaboration workflows</span>, and <span className="font-medium">continuous learning habits</span> that make professionals effective in distributed teams.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Seminar1;