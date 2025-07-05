// src/pages/About.jsx
import React from 'react';

const About = () => (
  <>
    {/* Page Banner */}
     <section className="bg-[#E0F7FA] py-10 px-6 text-[#0D3B66] text-justify">
  

  <p className="max-w-4xl mx-auto text-justify text-slate-800 text-lg font-[Poppins] px-4">
    <h2 className="text-3xl font-bold mb-4 text-center">
    Discover Nepal with Us: Your Gateway to Authentic Travel & Timeless Adventures
  </h2>

    Welcome to Tours & Travels in Nepal, your trusted partner in exploring the beauty, culture,
    and adventure of Nepal. Founded with a passion for showcasing the heart of the Himalayas,
    our company is dedicated to making travel easy, memorable, and enriching. With years of
    experience in the tourism industry, we offer personalized tour packages, trekking adventures,
    cultural explorations, and travel services tailored to your interests. Our mission is to
    provide authentic, safe, and affordable travel experiences while promoting responsible tourism
    that respects local communities and nature. We believe in creating not just trips, but
    unforgettable journeys that connect people with the true essence of Nepal.
  </p>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-amber-800">Our Mission</h2>
          <p className="text-gray-700">
            To simplify travel planning for everyone by offering a one‑stop platform that combines convenience,
            affordability, and world‑class support.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-amber-800">Our Vision</h2>
          <p className="text-gray-700">
            To become the leading tourism platform for students, families, and solo travelers across Nepal – and beyond.
          </p>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 bg-blue-50 w-[92%] mx-auto mt-10 rounded-xl shadow px-6">
      <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          { name: 'Hemraj Chettri', role: 'Project Leader',        image: 'man' },
          { name: 'Anisha Thapa',   role: 'Frontend Developer',   image: 'woman' },
          { name: 'Rajan Bhandari', role: 'UI/UX Designer',       image: 'person' },
        ].map((m, i) => (
          <div key={i} className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={`https://source.unsplash.com/120x120/?${m.image}`} alt={m.name} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
