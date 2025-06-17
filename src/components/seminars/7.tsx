// src/seminars/7.tsx
import React from "react";
import Layout from "../Layout";
import SeminarPagination from "../SeminarPagination";
import { 
  BrainCircuit, Code, Cpu, FileText, 
  GitBranch, GraduationCap, Hash, Layers, 
  Lightbulb, ListOrdered, Network, PieChart, 
  Rocket, Settings, Timer, MessageCircleCode
} from "lucide-react";
import eric from "@/assets/images/eric.jpg"; 

const Seminar7: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <BrainCircuit className="w-4 h-4 text-gray-600"/>
            <span className="text-sm font-medium text-gray-900">Seminar #7</span>
            <span className="text-sm font-medium">•</span>
            <span className="text-sm font-normal text-gray-900">May 28, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            <span className="font-medium">Prompt Engineering</span>
          </h1>
          <p className="text-xl text-gray-600">
            For Online and Offline Large Language Models
          </p>
        </section>

        {/* Speaker Profile */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={eric} 
              alt="Sir Eric John Emberda"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Sir Eric John Emberda</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-gray-600" />
                <span>CCS MIS Director</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="w-5 h-5 text-gray-600" />
                <span>Prompt Engineering Expert</span>
              </li>
              <li className="flex items-center gap-2">
                <Network className="w-5 h-5 text-gray-600" />
                <span>Tech Enthusiast</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seminar Content */}
        <div className="space-y-16">
          {/* Student Use Cases */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              <span>AI Applications for Students</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  <span>Practical Use Cases</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    { icon: <Code className="w-5 h-5" />, text: "Coding assistance & debugging" },
                    { icon: <FileText className="w-5 h-5" />, text: "Research paper analysis" },
                    { icon: <GraduationCap className="w-5 h-5" />, text: "Exam preparation review" },
                    { icon: <GitBranch className="w-5 h-5" />, text: "Brainstorming creative solutions" },
                    { icon: <ListOrdered className="w-5 h-5" />, text: "Proofreading & editing" },
                    { icon: <Timer className="w-5 h-5" />, text: "Time management scheduling" },
                    { icon: <PieChart className="w-5 h-5" />, text: "Note summarization" }
                  ].map((useCase, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gray-600 mt-0.5">{useCase.icon}</span>
                      <span>{useCase.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  <span>ML Engineering Insights</span>
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    These student applications demonstrate fundamental AI principles that form the building blocks of machine learning engineering: pattern recognition, natural language processing, and predictive modeling.
                  </p>
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <p className="font-medium flex items-start gap-2">
                      <BrainCircuit className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>"Understanding prompt engineering provides the foundation for developing and fine-tuning machine learning models."</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mathematical Modeling */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Hash className="w-5 h-5" />
              <span>Mathematical Modeling Primer</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                Machine learning begins with mathematical modeling—the process of creating mathematical representations of real-world phenomena. Consider this study hours vs. test scores dataset:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left border-b border-gray-200">Hours Studied</th>
                      <th className="px-4 py-2 text-left border-b border-gray-200">Test Scores</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[[3, 61], [8, 85], [1, 50], [10, 92], [12, 95]].map(([hours, score], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2 border-b border-gray-200">{hours}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    <span>Basic Model Structure</span>
                  </h3>
                  <div className="text-center p-4 bg-gray-50 rounded border border-gray-200">
                    <p className="font-mono mb-2">input x → model f(x) → output y</p>
                    <p className="text-sm text-gray-600">
                      The fundamental ML paradigm where x is input features, f(x) is the learned function, and y is the prediction
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Network className="w-5 h-5" />
                    <span>Key Mathematical Disciplines</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Linear Algebra', 'Statistics', 'Calculus', 'Probability'].map((subject, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                        <Hash className="w-3 h-3" />
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Model Comparison */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>LLM Architecture Comparison</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Model Name</th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Provider</th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Prompt Structure</th>
                    <th className="px-4 py-2 text-left border-b border-gray-200">Performance Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "GPT-4.5 (Orion)",
                      provider: "OpenAI",
                      structure: "Instruction - Content - Task",
                      notes: "Responds well to clear, concise instructions"
                    },
                    {
                      name: "Claude 3.7 Sonnet",
                      provider: "Anthropic",
                      structure: "Context - Instruction - Step-by-Step",
                      notes: "Excels with contextual framing and reasoning requests"
                    },
                    {
                      name: "DeepSeek R1",
                      provider: "DeepSeek",
                      structure: "Instruction - Context - Plan - Format",
                      notes: "Requires detailed structure for optimal output"
                    }
                  ].map((model, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">{model.name}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{model.provider}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{model.structure}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{model.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ML Concepts */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Network className="w-5 h-5" />
              <span>Machine Learning Foundations</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5" />
                  <span>Artificial Neural Networks</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Biological neuron-inspired architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Numerical representation of all inputs (vectors/tensors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Layered structure: Input → Hidden → Output</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  <span>Backpropagation</span>
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    The algorithm that enables neural networks to learn from errors by:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Calculating loss between prediction and actual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Propagating error backward through network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Adjusting weights via gradient descent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Prompting Methods */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Advanced Prompting Techniques</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  name: "Zero-shot Prompting", 
                  desc: "Direct query without examples", 
                  use: "General knowledge tasks"
                },
                { 
                  name: "One-shot Prompting", 
                  desc: "Single example provided", 
                  use: "Pattern recognition"
                },
                { 
                  name: "Few-shot Prompting", 
                  desc: "Multiple examples given", 
                  use: "Complex task demonstration"
                },
                { 
                  name: "Chain of Thought", 
                  desc: "Step-by-step reasoning", 
                  use: "Problem solving"
                },
                { 
                  name: "Self-consistency", 
                  desc: "Multiple reasoning paths", 
                  use: "Improving accuracy"
                }
              ].map((method, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium mb-2">{method.name}</h3>
                  <p className="text-gray-700 text-sm mb-3">{method.desc}</p>
                  <div className="text-xs bg-gray-100 px-2 py-1 rounded inline-flex items-center gap-1">
                    <Lightbulb className="w-3 h-3" />
                    <span>{method.use}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ML Engineering Focus */}
          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-60 h-60  overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
                    alt="Machine Learning"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-light mb-3">Path to Machine Learning Engineering</h3>
                <p className="text-gray-700 mb-4">
                  Prompt engineering serves as an accessible introduction to core ML concepts. As you progress toward becoming a machine learning engineer, focus on:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                    <span>Mastering mathematical foundations (linear algebra, calculus, statistics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                    <span>Understanding neural network architectures and training processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                    <span>Developing proficiency in ML frameworks (TensorFlow, PyTorch)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-600 rounded-full"></span>
                    <span>Implementing end-to-end ML pipelines</span>
                  </li>
                </ul>
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
                Seminar 7 on Prompt Engineering by <span className="font-medium">Sir Eric John Emberda</span> was truly eye-opening for me as a student. I never realized how versatile prompt engineering could be until he laid out its <span className="font-medium">use cases</span> in our daily academic life—from <span className="font-medium">coding and research</span> to <span className="font-medium">brainstorming, proofreading, and even time management</span>. AI can help us <span className="font-medium">provide interactive review materials</span> or <span className="font-medium">post tech-related contents</span>, acting like a digital study and media partner.
              </p>
              <p className="text-justify">
                He also gave us a taste of <span className="font-medium">machine learning fundamentals</span>, starting with simple <span className="font-medium">mathematical modeling</span>. I understood better how input-output relationships work, especially through his example of <span className="font-medium">test scores vs. study hours</span>, which revealed a clear linear pattern. We explored the equation: <span className="font-medium">input x → model f(x) → output y</span>, helping me visualize the math behind AI.
              </p>
              <p className="text-justify">
                He then introduced us to various <span className="font-medium">AI models</span> like <span className="font-medium">GPT-4.5 (Orion)</span>, <span className="font-medium">Claude 3.7 Sonnet</span>, and <span className="font-medium">DeepSeek R1</span>, each with its own <span className="font-medium">recommended prompt structure</span>. This made me realize that asking the right question isn’t enough—we need to <span className="font-medium">structure prompts strategically</span> for optimal results. Lastly, he tackled deeper concepts like <span className="font-medium">Artificial Neural Networks</span> and <span className="font-medium">backpropagation</span>, tying it all together with powerful <span className="font-medium">prompting techniques</span> like <span className="font-medium">zero-shot, one-shot, few-shot, chain-of-thought,</span> and <span className="font-medium">self-consistency</span>. This seminar indeed teach me how to use AI better and motivated me to understand how it works, so I can build smarter with it.
              </p>
            </div>
          </section>

          <SeminarPagination 
            currentPage={7} // Current seminar number
            totalSeminars={9} // Total number of seminars
            seminarsPerPage={1} // Usually 1 seminar per page
            basePath="/seminars" // Your base path
          />
        </div>
      </div>
    </Layout>
  );
};

export default Seminar7;