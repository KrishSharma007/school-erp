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
          <div className="bg-yellow-200 rounded-xl p-4 sm:p-6 border border-yellow-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our Story
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              JAI MODERN SR. SEC. SCHOOL DULHERA was established in 2006 with a
              vision to provide modern, quality education that nurtures
              creativity, critical thinking, and character development. Over the
              past 18 years, we have grown from a small institution to one of
              the most respected schools in the region.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-yellow-100 rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-200">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                Our Approach
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                We believe in a holistic approach to education that combines
                academic excellence with character development, creativity, and
                social responsibility.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-200">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                Our Values
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mr-2 flex-shrink-0" />
                  Excellence in everything we do
                </li>
                <li className="flex items-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mr-2 flex-shrink-0" />
                  Integrity and moral values
                </li>
                <li className="flex items-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mr-2 flex-shrink-0" />
                  Innovation and creativity
                </li>
                <li className="flex items-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mr-2 flex-shrink-0" />
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
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed">
              To be a leading educational institution that empowers students to
              become confident, creative, and responsible global citizens who
              contribute positively to society.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed">
              To provide modern, quality education that nurtures creativity,
              critical thinking, and character development, preparing students
              to excel in an ever-changing world through innovative teaching
              methods and holistic development.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg text-center border border-yellow-200">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Academic Excellence
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Fostering a love for learning and achieving academic milestones
              </p>
            </div>

            <div className="bg-yellow-100 rounded-xl p-4 sm:p-6 shadow-lg text-center border border-yellow-200">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Character Building
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Developing strong moral values and ethical principles
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg text-center md:col-span-2 lg:col-span-1 border border-yellow-200">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Leadership Skills
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
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
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-yellow-100 rounded-xl p-4 sm:p-6 lg:p-8 border border-yellow-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 shadow-lg">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Dr. Priya Sharma
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Principal, JAI MODERN SR. SEC. SCHOOL DULHERA
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  M.Ed., Ph.D. in Education
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
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

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                Experience
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                15+ years in educational leadership with expertise in modern
                teaching methodologies and student development.
              </p>
            </div>

            <div className="bg-yellow-100 rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                Philosophy
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
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
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-yellow-100 rounded-xl p-4 sm:p-6 lg:p-8 border border-yellow-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 shadow-lg">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Mr. Rajesh Kumar
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Director, JAI MODERN SR. SEC. SCHOOL DULHERA
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  B.Tech, MBA, Education Management
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
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

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg text-center border border-yellow-200">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Innovation
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Continuously evolving teaching methods and technology
                integration
              </p>
            </div>

            <div className="bg-yellow-100 rounded-xl p-4 sm:p-6 shadow-lg text-center border border-yellow-200">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Excellence
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Maintaining high standards in all aspects of education
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 shadow-lg text-center md:col-span-2 lg:col-span-1 border border-yellow-200">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Community
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Building strong partnerships with parents and the community
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 px-4">
            About JAI MODERN SR. SEC. SCHOOL DULHERA
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 lg:sticky lg:top-24">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 lg:mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:space-y-3 lg:gap-0">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                                              className={`w-full flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                          activeSection === section.id
                            ? "bg-yellow-500 text-white shadow-lg"
                            : "bg-gray-50 text-gray-700 hover:bg-yellow-50"
                        }`}
                    >
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                      <span className="font-medium hidden sm:inline lg:inline">
                        {section.title}
                      </span>
                      {activeSection === section.id && (
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-auto hidden lg:inline" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              {
                sections.find((section) => section.id === activeSection)?.content
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
