import React from "react";
import {
  BookOpen,
  Users,
  Award,
  GraduationCap,
  Target,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Academics = () => {
  const academicPrograms = [
    {
      id: "primary",
      title: "Primary Education",
      subtitle: "Classes I-V",
      icon: BookOpen,
      description: "Foundation building with interactive learning methods",
      features: [
        "Play-based Learning Approach",
        "Basic Skills Development",
        "Creative Activities & Arts",
        "Physical Education",
        "Moral Values & Ethics",
        "Language Development",
      ],
      image: "/src/assets/images/primary-education.jpg",
    },
    {
      id: "secondary",
      title: "Secondary Education",
      subtitle: "Classes VI-X",
      icon: Users,
      description: "Comprehensive curriculum with focus on critical thinking",
      features: [
        "Advanced Subject Knowledge",
        "Practical Learning Methods",
        "Skill Development Programs",
        "Competitive Exam Preparation",
        "Career Guidance",
        "Leadership Development",
      ],
      image: "/src/assets/images/secondary-education.jpg",
    },
    {
      id: "senior",
      title: "Senior Secondary",
      subtitle: "Classes XI-XII",
      icon: Award,
      description: "Career-oriented programs with college preparation",
      features: [
        "Stream Selection (Science/Commerce/Arts)",
        "Career Guidance & Counseling",
        "Competitive Exam Preparation",
        "Research & Project Work",
        "Industry Exposure",
        "College Application Support",
      ],
      image: "/src/assets/images/senior-secondary.jpg",
    },
  ];

  const curriculumHighlights = [
    {
      title: "Modern Teaching Methods",
      description:
        "Integration of technology and interactive learning techniques",
      icon: Target,
    },
    {
      title: "Holistic Development",
      description: "Focus on academic, physical, and character development",
      icon: Star,
    },
    {
      title: "Individual Attention",
      description: "Personalized learning plans for every student",
      icon: Users,
    },
    {
      title: "Career Preparation",
      description: "Early career guidance and skill development",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              At JAI MODERN SR. SEC. SCHOOL DULHERA, we provide a comprehensive
              curriculum that nurtures creativity, critical thinking, and
              character development. Our academic programs are designed to
              prepare students for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Academic Programs
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {academicPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">
                            {program.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">
                            {program.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        {program.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>


                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative group">
                      <div className="bg-yellow-200 rounded-2xl p-6 border border-yellow-300">
                        {program.image ? (
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-80 bg-yellow-100 rounded-xl shadow-lg flex items-center justify-center border border-yellow-300">
                            <div className="text-center text-gray-500">
                              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                <program.icon className="w-8 h-8 text-blue-600" />
                              </div>
                              <p className="text-sm">
                                Upload program images through admin panel
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Curriculum Highlights
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Academic Achievements
            </h2>
            <p className="text-xl opacity-90">
              Excellence in numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Pass Rate", icon: Award },
              { number: "85%", label: "First Division", icon: Star },
              { number: "50+", label: "Scholarships", icon: GraduationCap },
              { number: "100%", label: "College Placement", icon: Users },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Join Our Academic Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how our comprehensive academic programs can shape your
              child's future and prepare them for success in higher education
              and beyond.
            </p>
                         <button 
               onClick={() => {
                 window.location.href = '/contact';
               }}
               className="group px-8 py-4 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg mx-auto"
             >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
