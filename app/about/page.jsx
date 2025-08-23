'use client'
import React from 'react';
import company from '../../public/company.jpg'
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">About NextHire</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Connecting exceptional talent with world-class opportunities through our innovative platform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-[75rem] px-4 py-12">
        {/* Our Story */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, NextHire was born from a simple observation: the job search process was broken for both candidates and employers. Talented professionals struggled to find roles that matched their skills and aspirations, while companies spent excessive resources sorting through unqualified applications.
              </p>
              <p className="text-gray-600">
                We set out to create a platform that uses intelligent matching technology to connect the right talent with the right opportunities, making hiring more efficient, effective, and enjoyable for everyone involved.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                
                  <Image src={company} className='w-full h-full object-cover rounded-2xl' alt="Company Image"></Image>
                
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16  max-w-[75rem]">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="bg-blue-50 rounded-xl p-8 text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 italic">
              "To transform the hiring landscape by creating meaningful connections between professionals and organizations, fostering career growth and business success through innovative technology and personalized service."
            </p>
          </div>
        </section>

        {/* How We Do It */}
        <section className="mb-16  max-w-[75rem]">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">How We Do It</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Matching</h3>
              <p className="text-gray-600">
                Our advanced algorithm matches candidates with opportunities based on skills, experience, culture fit, and career aspirations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Every job and candidate is vetted to ensure high-quality opportunities and talent for our community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p className="text-gray-600">
                We foster a community where professionals can grow, learn, and connect with like-minded individuals and organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 bg-gray-800  max-w-[75rem] text-white py-12 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-gray-300">Active Jobs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500K+</p>
              <p className="text-gray-300">Professionals</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">12K+</p>
              <p className="text-gray-300">Company Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 max-w-[75rem]">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">4.6/5</span>
              </div>
              <p className="text-gray-600 mb-4">
                "NextHire completely transformed our hiring process. We found the perfect candidate in just two weeks instead of our usual two-month search!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-500">HR Director, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">4.8/5</span>
              </div>
              <p className="text-gray-600 mb-4">
                "As a recent graduate, I was struggling to find opportunities that matched my skills. NextHire connected me with my dream job at an amazing startup."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-gray-500">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default About;