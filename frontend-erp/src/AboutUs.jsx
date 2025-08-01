import React, { useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  BookOpen,
  Star,
  Quote,
} from "lucide-react";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About Us",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              JAI MODERN SR. SEC. SCHOOL DULHERA was established in 2006 with a
              vision to provide modern, quality education that nurtures
              creativity, critical thinking, and character development. Over the
              past 18 years, we have grown from a small institution to one of
              the most respected schools in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Our Approach
              </h4>
              <p className="text-gray-600">
                We believe in a holistic approach to education that combines
                academic excellence with character development, creativity, and
                social responsibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Our Values
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-600 mr-2" />
                  Excellence in everything we do
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-600 mr-2" />
                  Integrity and moral values
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-600 mr-2" />
                  Innovation and creativity
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-600 mr-2" />
                  Respect for diversity
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "vision-mission",
      title: "Vision & Mission",
      icon: Target,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl leading-relaxed">
              To be a leading educational institution that empowers students to
              become confident, creative, and responsible global citizens who
              contribute positively to society.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl leading-relaxed">
              To provide modern, quality education that nurtures creativity,
              critical thinking, and character development, preparing students
              to excel in an ever-changing world through innovative teaching
              methods and holistic development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Academic Excellence
              </h4>
              <p className="text-gray-600">
                Fostering a love for learning and achieving academic milestones
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Character Building
              </h4>
              <p className="text-gray-600">
                Developing strong moral values and ethical principles
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Leadership Skills
              </h4>
              <p className="text-gray-600">
                Nurturing leadership qualities and social responsibility
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "principal-message",
      title: "Principal's Message",
      icon: Quote,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-6">
                <Quote className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Dr. Priya Sharma
                </h3>
                <p className="text-gray-600">
                  Principal, JAI MODERN SR. SEC. SCHOOL DULHERA
                </p>
                <p className="text-sm text-gray-500">
                  M.Ed., Ph.D. in Education
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Dear Parents and Students,</p>
              <p>
                Welcome to JAI MODERN SR. SEC. SCHOOL DULHERA! As the Principal,
                it gives me immense pleasure to lead this wonderful institution
                that has been shaping young minds for over 18 years.
              </p>
              <p>
                At JAI MODERN SR. SEC. SCHOOL DULHERA, we believe that every
                child is unique and has unlimited potential. Our dedicated team
                of educators works tirelessly to create an environment where
                students feel safe, valued, and inspired to learn and grow.
              </p>
              <p>
                We focus not only on academic excellence but also on developing
                the whole child - their character, creativity, critical
                thinking, and social skills. Our modern teaching methodologies
                combined with traditional values ensure that our students are
                well-prepared for the challenges of tomorrow.
              </p>
              <p>
                I invite you to be part of our journey as we continue to
                innovate, inspire, and empower the next generation of leaders.
              </p>
              <p className="font-semibold">
                Warm regards,
                <br />
                Dr. Priya Sharma
                <br />
                Principal
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Experience
              </h4>
              <p className="text-gray-600">
                15+ years in educational leadership with expertise in modern
                teaching methodologies and student development.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Philosophy
              </h4>
              <p className="text-gray-600">
                Believes in creating a nurturing environment where every child
                can discover their potential and achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "director-message",
      title: "Director's Message",
      icon: Award,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Mr. Rajesh Kumar
                </h3>
                <p className="text-gray-600">
                  Director, JAI MODERN SR. SEC. SCHOOL DULHERA
                </p>
                <p className="text-sm text-gray-500">
                  B.Tech, MBA, Education Management
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Dear Parents and Well-wishers,</p>
              <p>
                It is with great pride and satisfaction that I welcome you to
                JAI MODERN SR. SEC. SCHOOL DULHERA. Since our inception in 2006,
                we have been committed to providing world-class education that
                prepares students for the challenges of the 21st century.
              </p>
              <p>
                Our journey has been marked by continuous innovation, unwavering
                commitment to excellence, and a deep understanding of the
                evolving educational landscape. We have consistently adapted our
                teaching methods and infrastructure to meet the changing needs
                of our students and society.
              </p>
              <p>
                At JAI MODERN SR. SEC. SCHOOL DULHERA, we understand that
                education is not just about imparting knowledge but about
                building character, fostering creativity, and developing
                leadership skills. Our state-of-the-art facilities, experienced
                faculty, and comprehensive curriculum ensure that every student
                receives the best possible foundation for their future.
              </p>
              <p>
                I am confident that our school will continue to be a beacon of
                educational excellence and a nurturing ground for future
                leaders.
              </p>
              <p className="font-semibold">
                Best wishes,
                <br />
                Mr. Rajesh Kumar
                <br />
                Director
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Innovation
              </h4>
              <p className="text-gray-600">
                Continuously evolving teaching methods and technology
                integration
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Excellence
              </h4>
              <p className="text-gray-600">
                Maintaining high standards in all aspects of education
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Community
              </h4>
              <p className="text-gray-600">
                Building strong partnerships with parents and the community
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About JAI MODERN SR. SEC. SCHOOL DULHERA
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                      {activeSection === section.id && (
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {
                sections.find((section) => section.id === activeSection)
                  ?.content
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
