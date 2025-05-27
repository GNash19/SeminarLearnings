// components/Documentation.tsx
import React from "react";
import Layout from "./Layout";
import { Camera, Image as ImageIcon, Album, BookOpen } from "lucide-react";
import sempic1_1 from '@/assets/images/sempic-1-1.jpg';
import sempic1_2 from '@/assets/images/sempic-1-2.jpg';
import sempic1_3 from '@/assets/images/sempic-1-3.jpg';
import sempic1_4 from '@/assets/images/sempic-1-4.jpg';
import sempic2_1 from '@/assets/images/seminar-2-1.jpg';
import sempic2_2 from '@/assets/images/seminar-2-2.jpg';
import sempic2_3 from '@/assets/images/seminar-2-3.jpg';
import sempic2_4 from '@/assets/images/seminar-2-4.jpg';
import sempic3_1 from '@/assets/images/seminar-3-1.jpg';
import sempic3_2 from '@/assets/images/seminar-3-2.jpg';
import sempic3_3 from '@/assets/images/seminar-3-3.jpg';
import sempic4_1 from '@/assets/images/seminar-4-1.jpg';
import sempic4_2 from '@/assets/images/seminar-4-2.jpg';
import sempic4_3 from '@/assets/images/seminar-4-3.jpg';
import sempic4_4 from '@/assets/images/seminar-4-4.jpg';
import sempic5_1 from '@/assets/images/sempic-5-1.jpg';
import sempic5_2 from '@/assets/images/sempic-5-2.jpg';
import sempic5_3 from '@/assets/images/sempic-5-3.jpg';
import sempic5_4 from '@/assets/images/sempic-5-4.jpg';

const Documentation: React.FC = () => {
  // Dummy seminar photo data
  const seminarPhotos = [
    {
      id: 1,
      title: "Navigating Software Development in the Industry",
      date: "May 17, 2025",
      images: [
        sempic1_1,
        sempic1_2,
        sempic1_3,
        sempic1_4
      ]
    },
    {
      id: 2,
      title: "Enhancing Audio Processing: Development and Evaluation of a Transcriber Tool",
      date: "May 21, 2025",
      images: [
        sempic2_1,
        sempic2_2,
        sempic2_3,
        sempic2_4
      ]
    },
    {
      id: 3,
      title: "Research 101: Conference Presentation & Funding Techniques",
      date: "May 22, 2025",
      images: [
        sempic3_1,
        sempic3_2,
        sempic3_3
      ]
    },
    {
      id: 4,
      title: "TherapEase: Bridging & Fostering Therapy Collaboration for Therapists and Carers",
      date: "May 22, 2025",
      images: [
        sempic4_1,
        sempic4_2,
        sempic4_3,
        sempic4_4
      ]
    },
    {
      id: 5,
      title: "Research 101: The Ins and Outs of Software Engineering Research Project",
      date: "May 26, 2025",
      images: [
        sempic5_1,
        sempic5_2,
        sempic5_3,
        sempic5_4
      ]
    }
  ];

  // Flatten all images into one array for random display
  const allImages = seminarPhotos.flatMap(seminar => 
    seminar.images.map(image => ({
      imageUrl: image,
      seminarTitle: seminar.title,
      seminarDate: seminar.date
    }))
  );

  // Shuffle the array for random display
  const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <Album className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium">SEMINAR DOCUMENTATION</span>
          </div>
          <h1 className="text-4xl font-light mb-4 tracking-tight">
            Creative <span className="font-medium">Visual Records</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Documented moments from various seminars, workshops, and tours throughout my Seminars, Workshops, and Tours class.
          </p>
        </section>
    
        {/* Gallery Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border border-gray-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={`Seminar documentation ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-medium">{item.seminarTitle}</h3>
                  <p className="text-sm text-gray-300">{item.seminarDate}</p>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white/80 text-gray-800 p-1.5 rounded-full">
                <Camera className="w-4 h-4" />
              </div>
            </div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="mt-16 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-light mb-2 flex items-center justify-center gap-2">
                <ImageIcon className="w-6 h-6" />
                <span>{allImages.length}</span>
              </div>
              <p className="text-sm text-gray-600">Total Photos</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-light mb-2 flex items-center justify-center gap-2">
                <BookOpen className="w-6 h-6" />
                <span>{seminarPhotos.length}</span>
              </div>
              <p className="text-sm text-gray-600">Seminars Documented</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-light mb-2">2025</div>
              <p className="text-sm text-gray-600">Academic Year</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Documentation;