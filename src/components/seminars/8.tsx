// src/seminars/8.tsx
import React from "react";
import Layout from "../Layout";
import SeminarPagination from "../SeminarPagination"
import { 
  Code, Cpu, FileText, 
  GitBranch, Globe, Layers, Lightbulb, ListOrdered, 
  Network, Rocket, Search, Settings, Shield, MessageSquare,
  Terminal, TrendingUp, Users, Zap, Cloud, Navigation 
} from "lucide-react";
import ralph from "@/assets/images/ralph.jpg"; 

const Seminar8: React.FC = () => {
  const speakerImage = ralph;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16 max-w-5xl">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <Navigation className="w-4 h-4 text-gray-900" />
            <span className="text-sm font-medium text-gray-900">Seminar #8</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">June 13, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            <span className="font-medium">Language Models</span> in Practice
          </h1>
          <p className="text-xl text-gray-600">
            From training fundamentals to real-world applications
          </p>
        </section>

        {/* Speaker Profile */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={speakerImage} 
              alt="Ralph Vincent Regalado"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Ralph Vincent Regalado</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-gray-600" />
                <span>Chief Scientist and Head of AI at Kollab</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-gray-600" />
                <span>Co-founder, Senti AI</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span>Google Developer Expert - AI & Cloud</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seminar Content */}
        <div className="space-y-16">
          {/* Training Section */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              <span>Language Model Training</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  <span>Pre-training</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Next token prediction objective</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Large corpus training data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Foundation for all downstream tasks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  <span>Post-training</span>
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      <span>Supervised Fine-Tuning (SFT)</span>
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Adapts model to follow instructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Establishes response style</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>RLHF (Reinforcement Learning from Human Feedback)</span>
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Aligns model outputs with human values and intentions through preference tuning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Applications */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              <span>Current Applications</span>
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    <span>Common Use Cases</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "AI coding assistants (GitHub Copilot)",
                      "Domain-specific AI copilots",
                      "Conversational interfaces (ChatGPT, Gemini)",
                      "Content generation and summarization"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Cloud className="w-5 h-5" />
                    <span>Deployment Options</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cloud API providers",
                      "Local model deployments",
                      "Hybrid approaches",
                      "Edge deployments"
                    ].map((option, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Working with APIs */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              <span>API Integration</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span>Implementation Steps</span>
                  </h3>
                  <ol className="space-y-3 text-gray-700">
                    {[
                      "Prepare prompts programmatically",
                      "Make API calls with proper authentication",
                      "Receive and process responses",
                      "Iterate or chain with other tools"
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="font-medium">{index + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span>Best Practices</span>
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Implement rate limiting",
                      "Handle errors gracefully",
                      "Cache frequent responses",
                      "Monitor usage and costs"
                    ].map((practice, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Prompt Engineering */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Advanced Prompting</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  <span>Key Strategies</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Clear, descriptive instructions",
                    "Few-shot examples",
                    "Relevant context (static/dynamic)",
                    "Chain of Thought reasoning",
                    "Task decomposition"
                  ].map((strategy, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <ListOrdered className="w-5 h-5" />
                  <span>Intent Detection</span>
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Systematic approach to route tasks to appropriate prompt strategies and models
                  </p>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="font-medium flex items-start gap-2">
                      <Search className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>"Determine which LM to use based on detected task requirements and complexity"</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations & Solutions */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Overcoming Limitations</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Challenge</th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Solution</th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      challenge: "Hallucination",
                      solution: "Retrieval Augmented Generation (RAG)",
                      implementation: "Augment with external knowledge sources"
                    },
                    {
                      challenge: "Knowledge cutoff",
                      solution: "Web search integration",
                      implementation: "Tool usage for real-time information"
                    },
                    {
                      challenge: "Limited context",
                      solution: "Summarization & chunking",
                      implementation: "Hierarchical processing"
                    }
                  ].map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 border-b border-gray-200">{item.challenge}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{item.solution}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{item.implementation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Agentic Workflows */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Network className="w-5 h-5" />
              <span>Agentic LM Patterns</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Planning",
                  description: "Multi-step reasoning and task decomposition",
                  icon: <ListOrdered className="w-6 h-6 text-blue-600" />
                },
                {
                  title: "Reflection",
                  description: "Self-improvement through iterative feedback",
                  icon: <Lightbulb className="w-6 h-6 text-yellow-500" />
                },
                {
                  title: "Tool Usage",
                  description: "Integration with external APIs and functions",
                  icon: <Terminal className="w-6 h-6 text-green-600" />
                },
                {
                  title: "Multi-agent",
                  description: "Collaborative systems with specialized roles",
                  icon: <Users className="w-6 h-6 text-purple-600" />
                }
              ].map((pattern, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {pattern.icon}
                    </div>
                    <h3 className="font-medium">{pattern.title}</h3>
                  </div>
                  <p className="text-gray-700">{pattern.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real-world Applications */}
          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold mb-4">Real-world Impact</h2>
                <p className="text-gray-700">
                  Language models are transforming industries through automation, augmentation, and entirely new capabilities.
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Automated documentation",
                    "Legal contract analysis",
                    "Medical literature review",
                    "Customer support automation",
                    "Educational tutoring",
                    "Scientific research assistance"
                  ].map((application, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>My <span className="font-medium">Takeaways</span> in Seminar 8</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-justify">
                In Seminar 8, I gained a comprehensive understanding of how <span className="font-medium">language models are trained and adapted</span>. I learned about the two-phase process: pre-training using large datasets and next-token prediction, and post-training using supervised fine-tuning and reinforcement learning with human feedback. This gave me insight into how models like ChatGPT are not just trained on data but also refined to align with <span className="font-medium">human intentions and usability</span>.
              </p>
              <p className="text-justify">
                I also learned how language models are used in real-world applications such as <span className="font-medium">AI coding assistants, domain-specific copilots, and conversational interfaces</span>. The session showed me how these models can be deployed either through cloud APIs or locally. I now understand the typical workflow of integrating LMs via APIs—preparing prompts, making API calls, handling responses, and chaining them for complex logic. This highlighted the importance of <span className="font-medium">clear and structured prompt engineering</span> to ensure accurate and helpful model responses.
              </p>
              <p className="text-justify">
                One of the most practical takeaways was the importance of <span className="font-medium">breaking down complex tasks</span> and applying “Chain of Thought” prompting to improve reasoning. I also saw how Retrieval-Augmented Generation (RAG) helps address limitations like hallucination and context length by augmenting the LM with real-time knowledge. The concept of agentic LMs—capable of reasoning, planning, and interacting with tools—was fascinating. I saw how this enables automation in workflows like customer support or multi-agent systems in smart homes.
              </p>
              <p className="text-justify">
                Overall, Seminar 8 deepened my awareness of both the <span className="font-medium">capabilities and limitations</span> of LMs. It motivated me to continue exploring areas like intent detection, tool integration, and agent design patterns to build smarter, context-aware AI solutions. I now see LMs not just as tools for generating text, but as <span className="font-medium">intelligent systems that can reason, act, and learn</span>.
              </p>
            </div>
          </section>

          <SeminarPagination 
          currentPage={8} // Current seminar number
          totalSeminars={9} // Total number of seminars
          seminarsPerPage={1} // Usually 1 seminar per page
          basePath="/seminars" // Your base path
        />
        </div>
      </div>
    </Layout>
  );
};

export default Seminar8;