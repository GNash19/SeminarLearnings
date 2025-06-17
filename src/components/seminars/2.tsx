// src/seminars/2.tsx
import React from "react";
import Layout from "../Layout";
import { 
  BookOpen, Code, Cpu, Database, FileText, Headphones, 
  Languages, Mic, Users, GraduationCap,
  Award, Book, ClipboardList, CpuIcon, GitBranch, Globe, Layers, MessageCircleCode
} from "lucide-react";
import SeminarPagination from "../SeminarPagination";

import carlo from "@/assets/images/carlo.jpg";

const Seminar2: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <Mic className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Seminar #2</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">May 21, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            Enhancing <span className="font-medium">Audio Processing:</span>
          </h1>
          <p className="text-xl text-gray-600">
            Development and Evaluation of a Transcriber Tool
          </p>
        </section>

        {/* Speaker Profile */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src={carlo} 
              alt="Sir Carlo Castro"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-medium mb-2">Sir Carlo Castro</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-gray-600" />
                <span>CCS Alumnus Batch 2024</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span>Faculty, University of the Immaculate Conception</span>
              </li>
              <li className="flex items-center gap-2">
                <Code className="w-5 h-5 text-gray-600" />
                <span>Teaches Programming and Technical Writing</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Research Context */}
        <section className="mb-16 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
            <Book className="w-5 h-5" />
            <span>Research Background</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Conference Presentation</span>
              </h3>
              <p className="text-gray-700">
                This work was presented at the Philippine Computing Science Conference with co-author Mr. Ontong, developed during their third year with mentorship from MinNa LProc Faculty, Ma'am Kristine, and Ma'am Aurora.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Inspiration</span>
              </h3>
              <p className="text-gray-700">
                Inspired by the SultiWag thesis project and a real-world scenario where language barriers prevented effective communication between a nurse and elderly patient.
              </p>
            </div>
          </div>
        </section>

        {/* Research Gallery */}
        {/* <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border border-gray-200">
              <img
                src={image}
                alt={`Research visual ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium">Research Documentation</p>
                </div>
              </div>
            </div>
          ))}
        </section> */}

        {/* Research Content */}
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Introduction</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                This research addresses the critical need for improved language classification accuracy in indigenous language preservation, focusing on Manobo (314 samples) and Kagan (405 samples) datasets totaling 2,959 audio recordings. The current 70% accuracy in language classification was insufficient for practical applications.
              </p>
              <div className="my-6 p-6 bg-gray-50 border-l-4 border-gray-400">
                <p className="font-medium flex items-start gap-2">
                  <Layers className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>"Standardizing audio processing is like factory refinement - transforming raw materials into consistent, trainable data."</span>
                </p>
              </div>
              <h3 className="text-lg font-medium mt-8 mb-4 flex items-center gap-2">
                <CpuIcon className="w-5 h-5" />
                <span>Key Objectives</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Develop advanced audio pre-processing methods to enhance quality and feature extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Compare direct spectrogram extraction (visual sound representation) versus JPG conversion approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                  <span>Improve overall model accuracy beyond the 70% benchmark for practical use</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Methodology */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              <span>Methodology</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  <span>Data Collection Process</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Collaborated directly with indigenous communities to ensure authentic language samples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Collected diverse speaker representation across age groups (20-80 years) and dialects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Implemented strict ethical guidelines including informed consent and data privacy measures</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  <span>Technical Implementation</span>
                </h3>
                <div className="text-sm bg-gray-50 p-4 rounded border border-gray-200 font-mono space-y-2">
                  <p className="font-semibold">Audio Processing Pipeline:</p>
                  <p>1. Raw MP3 → Minna Transcriber Tool</p>
                  <p>2. Audio Metadata Extraction Service</p>
                  <p>3. Spectrogram Generation (Direct vs JPG)</p>
                  <p>4. Database Storage & Feature Extraction</p>
                  <p>5. Model Training & Validation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Results & Discussion</span>
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Headphones className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Accuracy Improvements</h3>
                  <p className="text-gray-600">Achieved 83% accuracy for both Manobo and Kagan datasets (from 70% baseline)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Learnings */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Languages className="w-5 h-5" />
              <span>My Key Learnings</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200">
                <CardHeader className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h3 className="font-medium">Research Perspective</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    This seminar expanded my understanding of how technical solutions can preserve cultural heritage. The emphasis on ethical data collection from indigenous communities highlighted the human aspect behind technical research.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-gray-700" />
                  <h3 className="font-medium">Presentation Skills</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Observing how complex technical concepts were communicated to diverse audiences demonstrated the importance of clear explanations and visual aids in research presentations.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h3 className="font-medium">Technical Insights</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The comparison between spectrogram extraction methods gave me practical understanding of optimizing audio processing pipelines, applicable to my own projects.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-700" />
                  <h3 className="font-medium">Cultural Impact</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The seminar profoundly showed how technology can help preserve endangered languages and cultural identity, changing my perspective on the social impact of computing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Further Applications */}
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>Future Applications</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium mb-2">Minna Transcriber Tool</h3>
                <p className="text-sm text-gray-700">Development of a user-friendly interface for indigenous communities to document their languages</p>
              </div>
              <div className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium mb-2">Dataset Expansion</h3>
                <p className="text-sm text-gray-700">Incorporating more Philippine languages and dialects into the model</p>
              </div>
              <div className="p-4 bg-white rounded border border-gray-200">
                <h3 className="font-medium mb-2">Model Architecture</h3>
                <p className="text-sm text-gray-700">Exploring transformer-based models for improved accuracy</p>
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
                Mr. Carlo Castro’s presentation on their technical research paper, which they started in their third year and later showcased at the Philippine Computing Science Conference, gave me a compelling insight into the intersection of artificial intelligence and cultural preservation. Their project, aimed at improving the language classification accuracy of the SultiWag initiative, resonated deeply with me—especially when I learned that it was inspired by a real-world encounter between a nurse and an elderly woman who couldn’t understand each other due to a language barrier. That simple but profound moment of miscommunication became a turning point that led their team to <span className="font-medium">build a more inclusive AI system</span>. By focusing on indigenous languages such as Manobo and Kagan and refining their audio data pre-processing, they were able to increase classification accuracy from 70% to 83%. It reminded me how <span className="font-medium">technology can preserve identity, memory, and culture</span> when used intentionally. 
              </p>
              <p className="text-justify">
                What struck me most was their systematic and thoughtful approach in developing the language classification model. They didn't just chase performance metrics—they integrated <span className="font-medium">ethical considerations</span> throughout the process. I admired how they engaged directly with indigenous communities, secured proper consent, and prioritized quality and diversity in their audio data. Their data pipeline—from converting MP3 files to using the MinNa Transcriber Tool and extracting metadata—showed the power of <span className="font-medium">streamlining workflows for better model performance</span>. I was particularly fascinated by how they challenged the typical practice of saving spectrograms as image files and instead implemented direct spectrogram extraction. That small shift significantly improved accuracy and efficiency, teaching me that <span className="font-medium">innovation often begins by questioning the norm</span>. 
              </p>
              <p className="text-justify">
                More than the technical aspect, Mr. Castro's reflections on presenting their research made a lasting impression on me. He shared that the Q&A may be manageable, but the real challenge lies in the <span className="font-medium">ability to communicate, humanize, and defend a technical study</span>. That made me realize that doing research isn’t just about data or algorithms—it's also about <span className="font-medium">narrative, empathy, and clarity</span>. It reminded me that the drive to explore often begins with curiosity, but what sustains innovation is a deep sense of purpose. Seeing how they presented their work reinforced a valuable lesson for me: <span className="font-medium">research done with integrity where intelligence meets compassion. It is what truly makes an impact</span>.
              </p>
            </div>
          </section>

          <SeminarPagination 
            currentPage={2}
            totalSeminars={9} 
            seminarsPerPage={1}
            basePath="/seminars" 
          />
        </div>
      </div>
    </Layout>
  );
};

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={`border-b border-gray-200 px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Seminar2;