// src/seminars/5.tsx
import React from "react";
import Layout from "../Layout";
import { 
  BookOpen, ClipboardCheck, FileText, GitMerge, Globe, 
  Lock, MessageSquare, Monitor, Shield,
  TrendingUp, Users, AlertTriangle, BarChart2, 
  Calendar, CheckCircle, Clock, Code, Database, Mic, MessageCircleCode
} from "lucide-react";
import shen from "@/assets/images/shen.jpg";

const Seminar5: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <Mic className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium">Seminar #5</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
           <span className="font-medium">Research 101: The Ins and Outs</span> of
          </h1>
          <p className="text-xl text-gray-600">
            Software Engineering Research Project
          </p>
        </section>

        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={shen} 
              alt="Ma'am Shenna Rhea Cloribel"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Ma'am Shenna Rhea Cloribel</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span>CCS Faculty | Project Management Specialist</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span>Networking and Research Methodology Expert</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>Focuses on Ethical Research Practices</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seminar Content */}
        <div className="space-y-16">
          {/* Questionnaire Validation */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              <span>Questionnaire Validation</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Routing Form Essentials</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Comprehensive recording creates accurate minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Highlighted revisions streamline panel review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Version control ensures document integrity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5" />
                  <span>Standardized Models</span>
                </h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>UTAUT Model</span>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">Unified Theory of Acceptance and Use of Technology</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>TAM Model</span>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">Technology Acceptance Model</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ethical Dimensions */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Ethical Dimensions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Globe className="w-5 h-5" />, 
                  title: "Social Value", 
                  content: "Research must align with UN SDGs and NUHRA, demonstrating clear community benefit" 
                },
                { 
                  icon: <FileText className="w-5 h-5" />, 
                  title: "Informed Consent", 
                  content: "Participants must receive complete information about study purpose and procedures" 
                },
                { 
                  icon: <AlertTriangle className="w-5 h-5" />, 
                  title: "Vulnerability", 
                  content: "Special protections required for participants from marginalized groups" 
                },
                { 
                  icon: <Lock className="w-5 h-5" />, 
                  title: "Privacy", 
                  content: "Data must be anonymized and stored securely with limited access" 
                },
                { 
                  icon: <GitMerge className="w-5 h-5" />, 
                  title: "Justice", 
                  content: "Benefits and burdens of research should be distributed fairly" 
                },
                { 
                  icon: <Monitor className="w-5 h-5" />, 
                  title: "Transparency", 
                  content: "Full disclosure of researcher qualifications and facility adequacy" 
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sample Project */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>Case Study: Repro Project</span>
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-3">Bridging SRH Education Gaps</h3>
                  <p className="text-gray-700 mb-4">
                    Repro addresses critical deficiencies in sexual and reproductive health (SRH) education through an innovative online chat platform. The system serves as both preliminary consultation channel and educational resource, preparing youth for in-person healthcare interactions.
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <MessageSquare className="w-4 h-4" />
                    <span>Anonymous chat interface reduces stigma barriers</span>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Implementation Challenges</span>
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Academic workload competing with development time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Sensitive subject matter requiring careful handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Balancing anonymity with data collection needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Research Challenges */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Common Research Challenges</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                Conducting ethical, rigorous research in software engineering presents numerous obstacles that require proactive management and mitigation strategies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    <span>Methodological Hurdles</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Recruiting representative participant samples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Developing valid, reliable measurement instruments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Ensuring research reproducibility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Practical Constraints</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Time management amid academic commitments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Resource limitations for comprehensive studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Balancing scope with available data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Essential Research Principles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gray-400 pl-6">
                <h3 className="text-lg font-medium mb-3">Methodological Rigor</h3>
                <p className="text-gray-700 mb-4">
                  Valid research requires carefully constructed instruments, appropriate statistical analysis, and transparent reporting of limitations.
                </p>
                <div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded">
                  <CheckCircle className="w-4 h-4" />
                  <span>Pilot test questionnaires before full deployment</span>
                </div>
              </div>
              <div className="border-l-4 border-gray-400 pl-6">
                <h3 className="text-lg font-medium mb-3">Ethical Imperatives</h3>
                <p className="text-gray-700 mb-4">
                  Research must prioritize participant welfare through informed consent, risk mitigation, and equitable benefit distribution.
                </p>
                <div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded">
                  <Shield className="w-4 h-4" />
                  <span>Obtain IRB approval before data collection</span>
                </div>
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
                Our fifth seminar guided us through the core of what it truly means to conduct a sound and ethical research project. Truly, her perspective was grounded yet empowering. The discussion began with the importance of <span className="font-medium">questionnaire validation</span>, emphasizing tools like <span className="font-medium">Unified Theory of Acceptance and Use of Technology</span> (UTAUT) and <span className="font-medium">Total Addressable Market</span> (TAM). I realized how crucial it is not only to prepare questionnaires but to ensure that they meet academic standards. Even simple elements like <span className="font-medium">highlighting changes in documents</span> or <span className="font-medium">recording panel discussions</span> play a big role in streamlining the revision process.
              </p>
              <p className="text-justify">
                The emphasis on the <span className="font-medium">ethical dimensions of research</span> strucked me the most for this seminar. Too often, we focus so much on getting the system to work that we forget the people it’s built for. Ma’am Shenna reminded us that research must align with <span className="font-medium">social value and community involvement</span>. Anchoring our topics on frameworks like <span className="font-medium">UN SDG</span> and <span className="font-medium">NUHRA</span> is a responsibility. I was reminded of the importance of <span className="font-medium">informed consent</span>, respecting the <span className="font-medium">vulnerability of participants</span>, and ensuring <span className="font-medium">privacy and safety</span> in all aspects of data collection. These are not just requirements;  they are ethical commitments that define the integrity of our work.
              </p>
              <p className="text-justify">
                Lastly, we were shown a sample project, <span className="font-medium">Repro</span>, which bridges gaps in sexual and reproductive health (SRH) services for youth through chat-based innovation. I liked how the project responded to a real societal need while also acknowledging the challenge of balancing academics with development. It made me reflect on how research should not only be functional, but also impactful. As I prepare for my own research, I now feel more confident in understanding the technical, moral, and social weight that research carries. This seminar was more than informative—it was a call to pursue research that is <span className="font-medium">intentional, ethical, and community-centered</span>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Seminar5;