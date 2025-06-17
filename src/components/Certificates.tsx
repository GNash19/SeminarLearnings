// src/components/Certificates.tsx
import React, { useState, useEffect } from 'react';
import Layout from "./Layout";
import { 
  Award, BookOpen, Calendar, ChevronLeft, 
  ChevronRight, FileText, Shield, X
} from "lucide-react";
import cert1 from "@/assets/images/cert1.jpg";
import cert2 from "@/assets/images/cert2.jpg";

const Certificates: React.FC = () => {
  // Dummy certificate data
  const certificates = [
    {
      id: 1,
      title: "Build a Chatbot Using LangChain",
      issuer: "SimpliLearn | SkillUp",
      date: "6th June 2025",
      skills: ["Neural Networks", "Chatbot", "Regular Expression"],
      description: "Learn how to build a chatbot using LangChain, a powerful framework for developing AI applications.",
      image: cert1
    },
    {
      id: 2,
      title: "LangChain Course for Beginners",
      description: "A comprehensive course on LangChain, covering its core concepts and practical applications.",
      issuer: "SimpliLearn | SkillUp",
      date: "6th June 2025",
      skills: ["LangChain", "AI Applications", "Python"],
      image: cert2
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 mt-16 py-12 relative">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <Award className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium tracking-wider">CERTIFICATES</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            Professional <span className="font-medium">Certifications</span>
          </h1>
          <p className="text-xl text-gray-600">
            Validations of technical expertise and continuous learning
          </p>
        </section>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Slides */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Certificate Image */}
                  <div className="h-64 overflow-hidden cursor-zoom-in" onClick={() => openImageModal(cert.image)}>
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="p-6">
                    <h2 className="text-2xl font-medium mb-2">{cert.title}</h2>
                    
                    <div className="flex items-center gap-3 text-gray-700 mb-4">
                      <Shield className="w-5 h-5" />
                      <span>{cert.issuer}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                      <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{cert.description}</span>
                    </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Skills Validated</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>                 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button 
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Full certificate view"
              className="w-full h-full object-contain max-h-[90vh]"
            />
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <button 
                onClick={closeImageModal}
                className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;