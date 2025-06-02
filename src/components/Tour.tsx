// src/components/Tour.tsx
import React from "react";
import Layout from "./Layout";
import { 
  Calendar, Clock, Compass, MapPin, 
  BookOpen, Lightbulb, Users, Star, TrendingUp
} from "lucide-react";
import tour1 from "@/assets/images/tour-1.jpg";
import tour2 from "@/assets/images/tour-2.jpg";
import tour3 from "@/assets/images/tour-3.jpg";
import tour4 from "@/assets/images/tour-4.jpg";
import tour5 from "@/assets/images/tour-5.jpg";
import tour6 from "@/assets/images/tour-6.jpg";
import tour7 from "@/assets/images/tour-7.jpg";
import tour8 from "@/assets/images/tour-8.jpg";
import tour9 from "@/assets/images/tour-9.jpg";
import tour10 from "@/assets/images/tour-10.jpg";
import tour11 from "@/assets/images/tour-11.jpg";
import tour12 from "@/assets/images/tour-12.jpg";
import tour13 from "@/assets/images/tour-13.jpg";
import tour14 from "@/assets/images/tour-14.jpg";
import tour15 from "@/assets/images/tour-15.jpg";
import tour16 from "@/assets/images/tour-16.jpg";

const Tour: React.FC = () => {
  const tourImages = [
    tour1,
    tour2,
    tour3,
    tour4,
    tour5,
    tour6,
    tour7,
    tour8,
    tour9,
    tour10,
    tour11,
    tour12,
    tour13,
    tour14,
    tour15,
    tour16
  ];

  // Tour details
  const tourDetails = [
    { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Mindanao Media Hub" },
    { icon: <Calendar className="w-5 h-5" />, title: "Date", value: "May 30, 2025" },
    { icon: <Clock className="w-5 h-5" />, title: "Duration", value: "1 Day" },
    { icon: <Users className="w-5 h-5" />, title: "Participants", value: "CCS Students Batch 2023" }
  ];

  // Key learnings
  const learnings = [
    {
      title: "Industry Workflows",
      description: "Gain firsthand exposure to real-world industry workflows that shape the broadcasting landscape.",
      icon: <Compass className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Emerging Technologies",
      description: "Hands-on exposure to expensive cameras and advanced media technologies used in modern broadcasting.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Professional Networking",
      description: "Connected with industry professionals and peers, expanding my professional network.",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      title: "Career Insights",
      description: "Gained valuable insights into potential career paths in media and broadcasting.",
      icon: <Star className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        {/* Header Section */}
        <section className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full mb-6 border">
            <Compass className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">INDUSTRY IMMERSION</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm font-normal text-gray-900">May 31, 2025</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            Media and Tech Innovation <span className="font-medium">Hub Tour</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the Mindanao Media Hub: A Journey Through Davao City's Premier Media Facility
          </p>
        </section>
        
        {/* Tour Gallery */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <img
                src={image}
                alt={`Tour image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm font-medium">Mindanao Media Hub</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Tour Details */}
        <section className="mb-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-light mb-8 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span>Tour Overview</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">{detail.title}</h3>
                  <p className="text-lg">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Tour Description</h3>
            <p className="text-gray-700 leading-relaxed">
              This immersive one-day tour offered exclusive access to Davao City's premier media and innovation facility, the Mindanao Media Hub. Participants experienced behind-the-scenes tours of state-of-the-art broadcast studios and production suites, gaining insights into the operations of key government media agencies such as the People's Television Network (PTV), Radyo Pilipinas, and the Philippine News Agency . The program included hands-on technology demonstrations showcasing the latest in media technologies. Additionally, networking sessions with industry professionals provided valuable opportunities for collaboration and learning.
            </p>
          </div>
        </section>

        {/* Learning Reflections */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-8 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            <span>Key Learnings & Insights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {learnings.map((learning, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    {learning.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{learning.title}</h3>
                    <p className="text-gray-700">{learning.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Growth */}
       <section className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-light mb-6">Professional Growth</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Skills Development</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Broadened understanding of media production workflows and digital broadcasting",
                  "Hands-on exposure to content management and post-production tools",
                  "Insights into the integration of ICT in public information systems",
                  "Improved media literacy and technical communication in digital platforms"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 mt-2 bg-white rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                <span>Career Impact</span>
              </h3>
              <p className="mb-4">
                Visiting the Mindanao Media Hub sparked new perspectives on career opportunities in digital communication, 
                government media, and broadcasting technology, opening doors to paths I had never explored before.
              </p>
              <div className="bg-black/20 p-4 rounded-lg border border-white/10">
                <p className="italic">
                  "Seeing the scale and sophistication of the Mindanao Media Hub enlightened me to appreciate the careers in media technology and public service communication."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Tour;