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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
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

      {/* Curriculum Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Curriculum Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Academic Programs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {academicPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.id}
                  id={program.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
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

                      <div className="space-y-3">
                        {program.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6">
                        {program.image ? (
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-80 object-cover rounded-xl shadow-lg"
                          />
                        ) : (
                          <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl shadow-lg flex items-center justify-center">
                            <div className="text-center text-gray-500">
                              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                <program.icon className="w-8 h-8 text-blue-600" />
                              </div>
                              <p className="text-sm">
                                Upload academic images through admin panel
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

      {/* Academic Excellence Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academic Excellence</h2>
            <p className="text-xl opacity-90">
              Our commitment to quality education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Pass Rate", icon: Award },
              { number: "85%", label: "First Division", icon: Star },
              {
                number: "100%",
                label: "College Placement",
                icon: GraduationCap,
              },
              { number: "50+", label: "Awards Won", icon: BookOpen },
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

      {/* Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Teaching Methodology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                description:
                  "Engaging students through hands-on activities and real-world applications",
                icon: Users,
              },
              {
                title: "Technology Integration",
                description:
                  "Using modern technology to enhance learning experiences",
                icon: Target,
              },
              {
                title: "Individual Attention",
                description:
                  "Personalized learning plans tailored to each student's needs",
                icon: Star,
              },
              {
                title: "Project-Based Learning",
                description:
                  "Learning through practical projects and real-world problem solving",
                icon: BookOpen,
              },
              {
                title: "Continuous Assessment",
                description:
                  "Regular evaluation and feedback to track student progress",
                icon: Award,
              },
              {
                title: "Career Guidance",
                description:
                  "Early career counseling and skill development programs",
                icon: GraduationCap,
              },
            ].map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
