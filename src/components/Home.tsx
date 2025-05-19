import React from "react";
import { Link } from "react-router-dom";
import Layout from './Layout';

const Home: React.FC = () => {
  // Dummy seminar data
  const seminars = [
    {
      id: 1,
      title: "Navigating Software Development in the Industry",
      date: "May 17, 2023",
      speaker: "Sir Ned Isaiah Palacios",
      description: "Learning how the industry works and how to get there.",
      image: "src/images/seminar1.jpg"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <main className="container mx-auto p-8 space-y-12">
          <section className="py-12 border-b border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-4 tracking-tight"><span className="font-medium"> Seminars, Workshops, & Tours</span></h2>
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
                src="src/images/homeback.jpg" 
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
        </main>
      </div>
    </Layout>
  );
};

export default Home;