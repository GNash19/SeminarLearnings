import React from "react";
import { Link } from "react-router-dom";
import Layout from './Layout';
import seminar1 from '@/assets/images/seminar1.jpg';
import seminar2 from '@/assets/images/Seminar2.jpg';
import seminar3 from '@/assets/images/seminar3.jpg';
import seminar4 from '@/assets/images/seminar4.jpg';
import seminar5 from '@/assets/images/seminar5.jpg';
import seminar6 from '@/assets/images/seminar6.jpg';
import seminar7 from '@/assets/images/seminar7.jpg';
import seminar8 from '@/assets/images/seminar8.jpg';
import seminar9 from '@/assets/images/seminar9.jpg';
import homepic from '@/assets/images/homeback.jpg';
import media from '@/assets/images/media.jpg';

const Home: React.FC = () => {
  const seminars = [
    {
      id: 1,
      title: "Navigating Software Development in the Industry",
      date: "May 17, 2025",
      speaker: "Mr. Ned Isaiah Palacios",
      description: "Learning how the industry works and how to get there.",
      image: seminar1
    },
    {
      id: 2,
      title: "Enhancing Audio Processing: Development and Evaluation of a Transcriber Tool",
      date: "May 21, 2025",
      speaker: "Mr. Carlo Castro",
      description: "Exploring ways in improving audio processing and transcription.",
      image: seminar2
    },
    {
      id: 3,
      title: "Research 101: Conference Presentation & Funding Techniques",
      date: "May 22, 2025",
      speaker: "Mr. Cris John David Manero",
      description: "Learning how to present your research and get funding for it.",
      image: seminar3
    },
    {
      id: 4,
      title: "TherapEase: A Healthcare App for Therapists and Children",
      date: "May 23, 2025",
      speaker: "Mr. Hizon B. Caja",
      description: "A seminar on exploring a therapy healthcare app.",
      image: seminar4
    },
    {
      id: 5,
      title: "Research 101: The Ins and Outs of Software Engineering Research Project",
      date: "May 26, 2025",
      speaker: "Ms. Shenna Rhea Cloribel",
      description: "Understanding the fundamentals of software engineering research projects.",
      image: seminar5
    },
    {
      id: 6,
      title: "Bridging Academia and Startup Innovation",
      date: "May 27, 2025",
      speaker: "Mr. Ceasar Ian P. Benablo",
      description: "Exploring the intersection of academic research and startup innovation.",
      image: seminar6
    },
    {
      id: 7,
      title: "Prompt Engineering",
      date: "May 28, 2025",
      speaker: "Mr. Eric John Emberda",
      description: "Understanding the principles and practices of prompt engineering in AI.",
      image: seminar7
    },
    {
      id: 8,
      title: "Understanding Agentic AI",
      date: "June 13, 2025",
      speaker: "Mr. Ralph Vincent Regalado",
      description: "A seminar on the principles and applications of agentic AI.",
      image: seminar8
    },
    {
      id: 9,
      title: "Exploring Web3 and Blockchain Technologies",  
      date: "June 14, 2025",
      speaker: "Mr. Berey, Mr. Nervida, Mr. Albores, and Mr. Bastes",
      description: "An in-depth look at Web3 and blockchain technologies and their impact on the future.",
      image: seminar9
    },
  ];

  const tours = [
    {
      id: 1,
      title: "Educational Tour",
      date: "May 31, 2025",
      speaker: "Mindanao Media Hub",
      description: "Exploring the world of media and technology at the Mindanao Media Hub.",
      image: media
    }
  ];
  
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans mt-16">
        <main className="container mx-auto p-8 space-y-12">
          <section className="py-12 border-b border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-light mb-4 tracking-tight"><span className="font-medium"> Seminars, Workshops, & Tours</span></h2>
              <p className="text-gray-600 text-lg">Documented learning experiences from industry leaders and academic pioneers</p>
            </div>
          </section>

          <section className="py-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-tight">Nash T. <span className="font-medium">Golosino</span></h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Second-year Computer Science student specializing in Computational Health Informatics at University of the Immaculate Conception. 
                Passionate about developing ethical AI solutions that address real-world challenges.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Academic Focus:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Machine Learning Techniques</li>
                  <li>Computer Vision Applications</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 md:h-80 bg-gray-200 overflow-hidden rounded">
              <img 
                src={homepic} 
                alt="Computer Science Student"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="py-8">
            <h3 className="text-2xl font-light mb-8 tracking-tight text-center">Attended <span className="font-medium">Seminars</span></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {seminars.map((seminar) => (
                <Link
                  to={`/seminars/${seminar.id}`}
                  key={seminar.id}
                  className="group block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={seminar.image} 
                      alt={seminar.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h4 className="text-xl font-medium">{seminar.title}</h4>
                      <p className="text-sm text-gray-300">{seminar.date}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-sm text-gray-500 mb-2">Presented by {seminar.speaker}</p>
                    <p className="text-gray-700">{seminar.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="py-8">
            <h3 className="text-2xl font-light mb-8 tracking-tight text-center">Attended <span className="font-medium">Tours</span></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {tours.map((tours) => (
                <Link
                  to={`/Tour`}
                  className="group block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={tours.image} 
                      alt={tours.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h4 className="text-xl font-medium">{tours.title}</h4>
                      <p className="text-sm text-gray-300">{tours.date}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-sm text-gray-500 mb-2">Went to {tours.speaker}</p>
                    <p className="text-gray-700">{tours.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Home;