// src/seminars/3.tsx
import React from "react";
import Layout from "../Layout";
import { 
  Award, Bookmark, Calendar, ClipboardList, Compass, 
  FileText, Globe, Layers, Mic, Presentation, 
  Search, Settings, TrendingUp, Users, Zap, MessageCircleCode
} from "lucide-react";
import cris from "@/assets/images/cris.jpg";

const Seminar3: React.FC = () => {
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
            <span className="font-medium">Research 101:</span>
          </h1>
          <p className="text-xl text-gray-600">
            Conference Presentation & Funding Techniques
          </p>
        </section>

        {/* Speaker Profile */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={cris} 
              alt="Sir Carlo Castro"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Mr. Cris Johm David Manero</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span>CCS Faculty & International Conference Speaker</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gray-600" />
                <span>Expert in Visual Design and Motion Graphics</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>Specializes in Research and Development in Software Engineering</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Research Content */}
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              <span>Research Paradigm Shift</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                The seminar began with a critical examination of common research misconceptions. Many researchers fall into the trap of solution-first thinking, where they conceptualize a system and then seek problems it might solve. This approach often leads to forced applications and limited impact.
              </p>
              <div className="my-6 p-6 bg-gray-50 border-l-4 border-gray-400">
                <p className="font-medium flex items-start gap-2">
                  <Search className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>"True research begins with identifying genuine problems, not with predetermined solutions. The most impactful studies emerge from observing real-world challenges and then evaluating which systems might effectively address them."</span>
                </p>
              </div>
              <h3 className="text-lg font-medium mt-8 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Key Realizations</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Community impact should be the driving force behind research, not technological novelty alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Tools like Scispace can significantly streamline literature review and citation management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Working citations should be established early to maintain academic rigor</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Research Roadmap */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Research Submission Roadmap</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: <FileText className="w-6 h-6" />, title: "Ideation & Abstract", desc: "Summarize study details concisely" },
                { icon: <Bookmark className="w-6 h-6" />, title: "Initial Submission", desc: "Format according to conference guidelines" },
                { icon: <ClipboardList className="w-6 h-6" />, title: "Full Paper", desc: "Develop upon acceptance notification" },
                { icon: <Mic className="w-6 h-6" />, title: "Presentation", desc: "Tailor content to time constraints" }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conference Submission */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Conference Submission Essentials</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  <span>Technical Considerations</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Thoroughly understand conference themes and technical requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Ensure complete system implementation before submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Adhere strictly to formatting guidelines (font, margins, citation style)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Timeline Management</span>
                </h3>
                <div className="text-sm bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="font-mono mb-2">Abstract Deadline → 3-6 months before conference</p>
                  <p className="font-mono mb-2">Full Paper Submission → 1-2 months after acceptance</p>
                  <p className="font-mono">Presentation Preparation → 2-4 weeks before event</p>
                </div>
              </div>
            </div>
          </section>

          {/* Presentation Mastery */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Presentation className="w-5 h-5" />
              <span>Presentation Mastery Framework</span>
            </h2>
            <div className="space-y-8">
              {/* Content Preparation */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <FileText className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Content Preparation</h3>
                    <p className="text-gray-600">Structuring your research narrative effectively</p>
                  </div>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-4">
                    Effective content preparation begins with audience analysis. Technical conferences demand different approaches than interdisciplinary gatherings. The key message should be distilled into a single, memorable statement that encapsulates your research contribution.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Structure should follow: Problem → Methodology → Findings → Implications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Technical jargon should be minimized or clearly explained</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Originality should be highlighted through comparative analysis</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Slide Design */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Layers className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Slide Design Principles</h3>
                    <p className="text-gray-600">Visual communication of complex information</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-800">Do's</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                        <span>5-7 lines per slide with 28pt+ font size</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                        <span>High-resolution visuals with proper labeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                        <span>Consistent color scheme and typography</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-gray-800">Don'ts</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                        <span>Avoid full paragraphs and small fonts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                        <span>Don't use low-quality or pixelated images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                        <span>Avoid inconsistent formatting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Delivery Techniques */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Mic className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Presentation Delivery</h3>
                    <p className="text-gray-600">Engaging your audience effectively</p>
                  </div>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-4">
                    Delivery transforms content into impact. A well-rehearsed presentation appears effortless yet maintains professional rigor. The rule of three applies: practice your presentation at least three times, with at least one rehearsal in conditions similar to the actual conference.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-gray-800">Verbal Techniques</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                          <span>Moderate pace with intentional pauses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                          <span>Clear articulation and varied intonation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-gray-800">Non-Verbal Techniques</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                          <span>Purposeful movement and gestures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                          <span>Eye contact distributed evenly</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Funding Strategies */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Funding Acquisition Techniques</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Securing research funding requires strategic alignment between your project's objectives and the funder's priorities. Successful proposals demonstrate both academic merit and tangible impact potential.
              </p>
              
              <h3 className="text-lg font-medium mt-8 mb-4 flex items-center gap-2">
                <Bookmark className="w-5 h-5" />
                <span>Proposal Essentials</span>
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Clear problem statement with supporting data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Methodological rigor with feasible timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Detailed budget justification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Dissemination and impact plans</span>
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-8 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Funding Source Alignment</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Academic Grants", desc: "Emphasize theoretical contributions" },
                  { title: "Industry Partnerships", desc: "Highlight practical applications" },
                  { title: "Government Programs", desc: "Align with policy priorities" }
                ].map((source, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">{source.title}</h4>
                    <p className="text-sm text-gray-600">{source.desc}</p>
                  </div>
                ))}
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
                Listening to Sir Cris John David Manero was a turning point in how I view research. As a faculty member of the College of Computer Studies and someone who has presented in international conferences, Sir Manero brought both technical expertise and practical insight to the discussion. What resonated with me the most was his challenge to a common assumption: that research starts with a system idea. Instead, he emphasized that it should begin with <span className="font-medium">a real-world problem</span>. That shift in perspective taught me the importance of <span className="font-medium">community relevance and authenticity</span> in research. Rather than building systems for the sake of output, I learned that our goal should be to create <span className="font-medium">meaningful and positive impact. It a perspective I know will shape the way I approach my future projects. ely aim for technical output</span> but should aspire to create meaningful, positive impact.
              </p>
              <p className="text-justify">
                He also gave us a very clear roadmap on how to navigate the journey from ideation to final presentation. He walked us through the importance of knowing your target conference (it's formatting guidelines, focus areas, and expectations). What stood out was his reminder that we must be fully capable of <span className="font-medium">implementing the systems we propose</span>. He introduced practical tools like SciSpace for citation management, which will surely be helpful in my future papers. His tips on structuring our content—avoiding jargon, using visuals to clarify ideas, and following a logical flow, helping me realize that <span className="font-medium">research isn't just technical work; it’s storytelling with evidence</span>. He encouraged us to value <span className="font-medium">originality</span> by contributing something new to the field, even if it's a small but meaningful step forward. 
              </p>
              <p className="text-justify">
                Beyond the content, Sir Manero provided strategies for <span className="font-medium">effective delivery</span> and <span className="font-medium">question handling</span>. He advised presenters to maintain a minimalist slide design, use large readable fonts, and label visuals clearly to ensure comprehension. Delivery should be <span className="font-medium">practiced thoroughly</span>, respecting time limits, and engaging the audience through eye contact, moderate pacing, and natural gestures. Perhaps most reassuring was his advice for the Q&A portion—often the most nerve-wracking part of any presentation. He urged students to stay composed, ask for clarification when needed, and remain professional even when faced with challenging inquiries. If uncertain, it is perfectly acceptable to <span className="font-medium">acknowledge the limits of one’s current knowledge</span> and offer to follow up later. This session ultimately served not only as a technical guide but also as a reminder that <span className="font-medium">confidence, preparation, and purpose</span> form the foundation of effective research communication.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Seminar3;