import React from "react";
import {
  Monitor,
  FlaskConical,
  Trophy,
  BookOpen,
  Bus,
  Users,
  Star,
  ArrowRight,
  Wifi,
  Shield,
  Zap,
  Heart,
} from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      id: "classrooms",
      title: "Smart Classrooms",
      subtitle: "Modern Learning Environment",
      icon: Monitor,
      description:
        "State-of-the-art smart classrooms equipped with interactive whiteboards, projectors, and digital learning tools to enhance the learning experience.",
      features: [
        "Interactive Whiteboards",
        "Digital Projectors",
        "Audio-Visual Equipment",
        "Comfortable Seating",
        "Climate Control",
        "Modern Lighting",
      ],
      image: "/src/assets/images/smart-classrooms.jpg",
    },
    {
      id: "labs",
      title: "Science Laboratories",
      subtitle: "Hands-on Learning Experience",
      icon: FlaskConical,
      description:
        "Well-equipped physics, chemistry, and biology laboratories where students can conduct experiments and develop practical skills.",
      features: [
        "Physics Lab",
        "Chemistry Lab",
        "Biology Lab",
        "Computer Lab",
        "Mathematics Lab",
        "Language Lab",
      ],
      image: "/src/assets/images/science-labs.jpg",
    },
    {
      id: "sports",
      title: "Sports Complex",
      subtitle: "Physical Development & Fitness",
      icon: Trophy,
      description:
        "Comprehensive sports facilities including indoor and outdoor games, swimming pool, and fitness center for overall physical development.",
      features: [
        "Indoor Games Hall",
        "Outdoor Sports Ground",
        "Swimming Pool",
        "Fitness Center",
        "Basketball Court",
        "Cricket Ground",
      ],
      image: "/src/assets/images/sports-complex.jpg",
    },
    {
      id: "library",
      title: "Modern Library",
      subtitle: "Knowledge Hub",
      icon: BookOpen,
      description:
        "Extensive collection of books, digital resources, and study spaces to encourage reading and research among students.",
      features: [
        "Extensive Book Collection",
        "Digital Resources",
        "Study Spaces",
        "Reading Corners",
        "Research Facilities",
        "Online Catalog",
      ],
      image: "/src/assets/images/library.jpg",
    },
    {
      id: "transport",
      title: "Transportation",
      subtitle: "Safe & Convenient Travel",
      icon: Bus,
      description:
        "Safe and reliable transportation service covering multiple routes with GPS tracking and trained drivers for student safety.",
      features: [
        "GPS Tracking",
        "Trained Drivers",
        "Multiple Routes",
        "Safety Equipment",
        "Regular Maintenance",
        "Parent Communication",
      ],
      image: "/src/assets/images/transport.jpg",
    },
    {
      id: "cafeteria",
      title: "Cafeteria",
      subtitle: "Healthy & Nutritious Food",
      icon: Heart,
      description:
        "Modern cafeteria serving healthy and nutritious meals prepared under strict hygiene standards for students and staff.",
      features: [
        "Healthy Menu Options",
        "Hygiene Standards",
        "Vegetarian Options",
        "Fresh Ingredients",
        "Quality Control",
        "Comfortable Seating",
      ],
      image: "/src/assets/images/cafeteria.jpg",
    },
  ];

  const additionalFacilities = [
    {
      title: "Wi-Fi Campus",
      description: "High-speed internet connectivity throughout the campus",
      icon: Wifi,
    },
    {
      title: "Security System",
      description: "24/7 security with CCTV surveillance and trained personnel",
      icon: Shield,
    },
    {
      title: "Power Backup",
      description: "Uninterrupted power supply for continuous learning",
      icon: Zap,
    },
    {
      title: "Medical Room",
      description: "First-aid facilities and regular health check-ups",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">World-Class Facilities</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              At JAI MODERN SR. SEC. SCHOOL DULHERA, we provide state-of-the-art
              facilities that create an ideal learning environment. Our
              infrastructure supports both academic excellence and holistic
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Facilities
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.id}
                  id={facility.id}
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
                            {facility.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">
                            {facility.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {facility.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        {facility.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center space-x-3"
                          >
                            <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>


                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative group">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        {facility.image ? (
                          <img
                            src={facility.image}
                            alt={facility.title}
                            className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-80 bg-gray-50 rounded-xl shadow-lg flex items-center justify-center">
                            <div className="text-center text-gray-500">
                              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                <facility.icon className="w-8 h-8 text-blue-600" />
                              </div>
                              <p className="text-sm">
                                Upload facility images through admin panel
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

      {/* Additional Facilities */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Additional Facilities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-yellow-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-yellow-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Infrastructure Highlights
            </h2>
            <p className="text-xl opacity-90">
              Our commitment to quality infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Smart Classrooms", icon: Monitor },
              { number: "6", label: "Laboratories", icon: FlaskConical },
              { number: "12", label: "Sports Facilities", icon: Trophy },
              { number: "50,000+", label: "Books in Library", icon: BookOpen },
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

      {/* Safety & Security */}
      <section className="py-20 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Safety & Security
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CCTV Surveillance",
                description:
                  "24/7 monitoring with high-definition cameras covering all areas",
                icon: Shield,
              },
              {
                title: "Trained Security",
                description:
                  "Professional security personnel ensuring campus safety",
                icon: Users,
              },
              {
                title: "Emergency Response",
                description:
                  "Quick response system for any emergency situations",
                icon: Zap,
              },
              {
                title: "Fire Safety",
                description:
                  "Comprehensive fire safety equipment and protocols",
                icon: Shield,
              },
              {
                title: "Medical Support",
                description:
                  "First-aid facilities and regular health check-ups",
                icon: Heart,
              },
              {
                title: "Parent Communication",
                description: "Regular updates and communication with parents",
                icon: Users,
              },
            ].map((safety, index) => {
              const Icon = safety.icon;
              return (
                <div
                  key={index}
                  className="bg-yellow-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-yellow-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {safety.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {safety.description}
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

export default Facilities;
