// src/seminars/9.tsx
import React from "react";
import Layout from "../Layout";
import SeminarPagination from "../SeminarPagination"
import { 
  Award, BookOpen, Briefcase,
  Cpu, Database, FileText, Globe, MessageSquare,
  Layers, Link, Network, PieChart, Shield, 
  TrendingUp, Users 
} from "lucide-react";
import ken from "@/assets/images/ken.jpg";
import ferdie from "@/assets/images/ferdie.jpg";
import rod from "@/assets/images/rod.jpg";
import ejay from "@/assets/images/ejay.jpg";
import blockchain2 from "@/assets/images/blockchain2.png";
import blockchain3 from "@/assets/images/blockchain3.png";

const Seminar9: React.FC = () => {
  const speakers = [
    {
      name: "Ferdie James Nervida",
      role: "Blockchain Investigator",
      image: ferdie,
      topic: "Blockchain Fundamentals"
    },
    {
      name: "Rod Albores",
      role: "AI Engineer",
      image: rod,
      topic: "NFT Ecosystem"
    },
    {
      name: "Ejay Bastes",
      role: "Executive Financial Consultant",
      image: ejay,
      topic: "Crypto Trading"
    },
    {
      name: "Ken Berry",
      role: "Social Media Marketing",
      image: ken,
      topic: "Web3 Social Networking"
    }
  ];

  const blockchainImages = [
    "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    blockchain2,
    blockchain3
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16 max-w-5xl">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 border border-gray-200 hover:bg-white transition-colors duration-200">
            <Database className="w-4 h-4 text-gray-900" />
            <span className="text-sm font-medium text-gray-900">Seminar #9</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">June 14, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            The <span className="font-medium">Decentralized Future</span>
          </h1>
          <p className="text-xl text-gray-600">
            Exploring blockchain, NFTs, and Web3 technologies
          </p>
        </section>

        {/* Speakers Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Featured Speakers</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{speaker.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{speaker.role}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <FileText className="w-4 h-4" />
                    <span>{speaker.topic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blockchain Gallery */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blockchainImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border border-gray-200">
              <img
                src={image}
                alt={`Blockchain visual ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium">Blockchain</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Seminar Content */}
        <div className="space-y-16">
          {/* Blockchain Section */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Link className="w-5 h-5" />
              <span>Blockchain Technology</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Blockchain represents a paradigm shift in how we manage and verify digital transactions. 
                As a decentralized, distributed ledger technology, it provides tamper-proof records 
                that are permanent and accessible based on system configuration.
              </p>
              
              <div className="my-6 p-6 bg-gray-50 border-l-4 border-gray-400">
                <p className="font-medium flex items-start gap-2">
                  <Cpu className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>"The 21 million coin example demonstrates blockchain's scarcity principle - a finite digital resource with verifiable ownership through cryptographic proof."</span>
                </p>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                <span>Key Applications</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Financial Services (DeFi, payments, remittances)",
                      "Healthcare Records (Secure patient data sharing)",
                      "Supply Chain (Provenance tracking, anti-counterfeiting)",
                      "Voting Systems (Tamper-proof elections)"
                    ].map((app, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-medium mb-2">Technical Advantages</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Immutability - Records cannot be altered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Transparency - All participants can verify</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Security - Cryptographic protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NFT Section */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>NFT Ecosystem</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Digital Ownership</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Non-Fungible Tokens (NFTs) revolutionize digital property rights by providing:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Globally recognized ownership certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Royalty mechanisms for creators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                    <span>Interoperable across platforms</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Beyond Art</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  NFT technology enables innovative use cases across industries:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Digital Identity",
                    "Academic Credentials",
                    "Real Estate Tokens",
                    "Gaming Assets",
                    "Music Rights",
                    "Membership Passes"
                  ].map((useCase, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Crypto Exchanges Section */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Crypto Trading Platforms</span>
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Market Types</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <PieChart className="w-5 h-5" />
                        <span>Spot Trading</span>
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Immediate settlement at current market prices
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium flex items-center gap-2">
                        <Network className="w-5 h-5" />
                        <span>Futures Contracts</span>
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Agreements to buy/sell assets at future dates and prices
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Key Considerations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Security measures and insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Liquidity and trading volume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Regulatory compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Fee structures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Web3 Social Section */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Web3 Social Networking</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Decentralized social platforms empower users through data ownership, 
                monetization opportunities, and censorship-resistant communication channels.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Key Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>User-owned data and content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Tokenized community incentives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Interoperable social graphs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>Decentralized content moderation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Project Success Factors</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Web3 projects leverage social networking for:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Community building and governance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Decentralized marketing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                        <span>Token distribution and liquidity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Outlook */}
          <section className="bg-gray-900 text-white p-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-light mb-4">
                The <span className="font-medium">Decentralized Future</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Blockchain technology is evolving beyond cryptocurrency to redefine how we interact with digital systems, 
                own digital assets, and participate in online communities.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Web3</span>
                </button>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-light mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>My <span className="font-medium">Takeaways</span> in Seminar 9</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-justify">
                In Seminar 9, I gained a deeper understanding of how <span className="font-medium">Web3 technologies</span> are shaping the future of digital systems. I learned that blockchain, as a decentralized and tamper-proof ledger, enables secure and transparent digital transactions. It has significant applications in <span className="font-medium">finance, healthcare, supply chains, and voting systems</span>, and is valued for its immutability, transparency, and cryptographic security.
              </p>
              <p className="text-justify">
                I also explored the <span className="font-medium">NFT ecosystem</span>, which introduces digital ownership using blockchain. NFTs act as verifiable digital certificates for assets such as art, academic credentials, music rights, and more. I appreciated how NFTs support creators through <span className="font-medium">royalty mechanisms</span> and enable asset interoperability across platforms.
              </p>
              <p className="text-justify">
                Another key learning was about <span className="font-medium">crypto trading platforms</span>. I now understand the difference between spot trading and futures contracts, as well as the importance of evaluating security, liquidity, regulatory compliance, and fee structures when participating in crypto markets.
              </p>
              <p className="text-justify">
                Finally, I discovered the role of <span className="font-medium">Web3 social networking</span> in empowering users through data ownership, token incentives, and censorship-resistant platforms. These networks rely on decentralized moderation, community governance, and token-based engagement models that redefine how users interact online.
              </p>
              <p className="text-justify">
                Overall, Seminar 9 broadened my awareness of the <span className="font-medium">potential, challenges, and innovations</span> in decentralized technologies. It inspired me to continue exploring how Web3 can revolutionize traditional systems and create more open, secure, and user-centric digital ecosystems.
              </p>
            </div>
          </section>


          <SeminarPagination 
            currentPage={9} // Current seminar number
            totalSeminars={9} // Total number of seminars
            seminarsPerPage={1} // Usually 1 seminar per page
            basePath="/seminars" // Your base path
          />
        </div>
      </div>
    </Layout>
  );
};

export default Seminar9;