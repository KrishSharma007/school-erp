import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Users,
  BookOpen,
  Award,
  Bus,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  GraduationCap,
  Building,
  Image,
  MessageCircle,
  Clock,
  UserCheck,
  Trophy,
  School,
  Microscope,
  Monitor,
  Dumbbell,
  Car,
  Users2,
  Camera,
  Video,
  ChevronLeft,
  ChevronRight,
  Bell,
  Download,
  Eye,
  Heart,
  Share2,
} from "lucide-react";
import { useAdmin } from "./hooks/useAdmin";

const HomePage = () => {
  const {
    slideshowImages,
    galleryImages,
    notices,
    isAdmissionOpen,
    admissionSession,
  } = useAdmin();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  // Filter active slideshow images
  const activeSlides = slideshowImages.filter((img) => img.active);
  const slideCount = activeSlides.length;

  // Filter active notices
  const activeNotices = notices.filter((notice) => notice.active);

  // Auto-play slideshow
  useEffect(() => {
    if (slideCount === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  // Reset slide when slides change
  useEffect(() => {
    if (currentSlide >= slideCount && slideCount > 0) {
      setCurrentSlide(0);
    }
  }, [slideCount, currentSlide]);

  const goToPrev = () => {
    if (slideCount > 0) {
      setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    }
  };

  const goToNext = () => {
    if (slideCount > 0) {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }
  };

  const schoolData = {
    name: "JAI MODERN SR. SEC. SCHOOL DULHERA",
    tagline: "Empowering Minds, Building Futures",
    location: "Dulhera, (Jhajjar), Haryana",
    phone: "9050102999",
    email: "info@jaimodernschool.edu",
    stats: [
      { number: "18+", label: "Years of Excellence", icon: Award },
      { number: "850+", label: "Students", icon: Users },
      { number: "12", label: "Transport Buses", icon: Bus },
      { number: "45+", label: "Expert Faculty", icon: UserCheck },
    ],
    facilities: [
      {
        name: "SCIENCE LABORATORIES",
        icon: Microscope,
        description: "Well-equipped labs for Physics, Chemistry & Biology",
      },
      {
        name: "PLAY SCHOOL",
        icon: School,
        description: "Nurturing environment for early childhood development",
      },
      {
        name: "AUDITORIUM HALL",
        icon: Building,
        description: "Modern auditorium for events and performances",
      },
      {
        name: "SMART CLASSROOMS",
        icon: Monitor,
        description: "Technology-enabled interactive learning spaces",
      },
      {
        name: "COMPUTER LABS",
        icon: Monitor,
        description: "Latest computers with high-speed internet",
      },
      {
        name: "SPORTS COMPLEX",
        icon: Dumbbell,
        description: "Complete facilities for physical education",
      },
      {
        name: "STADIUM",
        icon: Trophy,
        description: "Professional sports ground and athletics track",
      },
      {
        name: "TRANSPORTATION",
        icon: Car,
        description: "Safe and reliable bus service",
      },
    ],
    testimonials: [
      {
        name: "Vishal Kumar",
        qualification: "B.Tech in Electrical Engineering",
        text: "My journey of formal education started at JAI MODERN SR. SEC. SCHOOL DULHERA. I was a slow learner but the teachers here helped me develop my skills and confidence. The supportive environment made all the difference.",
        rating: 5,
        image: "/placeholder-avatar.png",
      },
      {
        name: "Prashant Sharma",
        qualification: "MBBS from MAMC Agroha",
        text: "I joined the Jai Modern family in 2008. The methodology followed in school was excellent and it helped me achieve my dreams. The dedicated faculty and comprehensive curriculum prepared me well for medical entrance exams.",
        rating: 5,
        image: "/placeholder-avatar.png",
      },
      {
        name: "Priya Singh",
        qualification: "CA (Chartered Accountant)",
        text: "The strong foundation in mathematics and analytical thinking I received at Jai Modern School helped me excel in my CA studies. The teachers always encouraged us to think critically and solve problems creatively.",
        rating: 5,
        image: "/placeholder-avatar.png",
      },
    ],
    defaultGallery: [],
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayGallery = galleryImages.length > 0 ? galleryImages : [];

  return (
    <div className="min-h-screen bg-yellow-200">
      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="min-h-screen  flex items-center relative overflow-hidden"
      >
        {/* bg-blue-800 */}
        {/* Enhanced Slideshow */}
        {slideCount > 0 && (
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full overflow-hidden">
              {activeSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title || "Slideshow"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/50"></div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation */}
            {slideCount > 1 && (
              <>
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-3 z-10 transition-all duration-300 hover:scale-110"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-3 z-10 transition-all duration-300 hover:scale-110"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Enhanced Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                  {activeSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-8 h-3 bg-white rounded-full"
                          : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-5">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                {isAdmissionOpen && (
                  <div className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse">
                    <Bell className="w-4 h-4 mr-2" />
                    Admission Open {admissionSession || "2025-26"}
                  </div>
                )}
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">
                    Best School of India
                  </span>
                  <span className="block text-yellow-500 text-3xl lg:text-4xl mt-2">
                    #1 Top Education School
                  </span>
                  <span className="block text-xl lg:text-2xl mt-4 text-blue-100">
                    in Dulhera, (Jhajjar), Haryana
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl font-medium">
                  {schoolData.name}
                </p>
                <p className="text-lg text-blue-200 max-w-2xl leading-relaxed">
                  Nurturing young minds with quality education, moral values,
                  and comprehensive development to create tomorrow's leaders and
                  responsible citizens.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="group px-8 py-4 bg-yellow-600 text-white rounded-lg font-bold hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-yellow-300 rounded-xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                    School Excellence
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {schoolData.stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-blue-900 mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              About Our School
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the legacy of excellence that has been shaping young
              minds for over 18 years
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  A good school district can greatly increase a child's chance
                  of future success. At JAI MODERN SR. SEC. SCHOOL DULHERA, we
                  believe that today's children are tomorrow's leaders, and
                  their growth parallels the future of our nation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Education is not just about academic excellence; it's about
                  nurturing the whole child. Our comprehensive approach focuses
                  on intellectual, emotional, social, and physical development,
                  ensuring that every student reaches their full potential.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We provide a nurturing environment where students can explore
                  their interests, develop critical thinking skills, and build
                  the confidence they need to succeed in an ever-changing world.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: Award,
                    title: "Academic Excellence",
                    desc: "Top-tier curriculum and teaching methods",
                  },
                  {
                    icon: Users,
                    title: "Holistic Development",
                    desc: "Focus on overall personality growth",
                  },
                  {
                    icon: Heart,
                    title: "Value Education",
                    desc: "Strong moral and ethical foundation",
                  },
                  {
                    icon: Trophy,
                    title: "Achievement Record",
                    desc: "Proven track record of success",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-yellow-400 rounded-2xl p-8 transform rotate-3">
                <div className="bg-yellow-200 rounded-xl p-6 shadow-2xl transform -rotate-3">
                  <div className="w-full h-80 bg-yellow-300 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm">
                        Upload images through admin panel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-yellow-200 rounded-xl p-6 shadow-2xl border-l-4 border-blue-500">
                <div className="text-3xl font-bold text-blue-900">18+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Achievements in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Excellence that speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolData.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white group">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="text-5xl font-bold mb-3 text-yellow-500">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Section */}
      <section id="facilities" className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              World-Class Facilities
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure and cutting-edge facilities to support
              comprehensive learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolData.facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="group bg-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-2 border-t-4 border-transparent hover:border-blue-500"
                >
                  <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Teachers Section */}
      <section className="py-20 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Meet Our Faculty
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated educators committed to nurturing every student's
              potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                position: "Principal",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                experience: "15+ Years",
                specialization: "Educational Leadership",
                qualification: "M.Sc. Physics, B.Ed.",
              },
            ].map((teacher, index) => (
              <div
                key={index}
                className="group bg-yellow-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 text-lg">
                    {teacher.position}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Experience:</span>{" "}
                      {teacher.experience}
                    </p>
                    <p>
                      <span className="font-medium">Specialization:</span>{" "}
                      {teacher.specialization}
                    </p>
                    <p>
                      <span className="font-medium">Qualification:</span>{" "}
                      {teacher.qualification}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Updates/Notices Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Latest Updates & Notices
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest announcements and important updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeNotices.length > 0 ? (
              activeNotices.map((notice, index) => (
                <div
                  key={index}
                  className="group bg-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-blue-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-bold uppercase tracking-wide">
                      {notice.type}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {notice.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {notice.content ||
                      "Click to read more details about this notice..."}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-16">
                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                  No Active Notices
                </h3>
                <p className="text-gray-400">
                  Check back later for important updates and announcements.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Photo Gallery
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of learning, growth, and achievement at our
              school
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayGallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedGalleryImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title || `Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      {image.title || `School Memory ${index + 1}`}
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayGallery.length === 0 && (
            <div className="text-center py-16">
              <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">
                No Images Available
              </h3>
              <p className="text-gray-400">
                Gallery images will appear here once uploaded.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedGalleryImage.url}
              alt={selectedGalleryImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedGalleryImage.title && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white font-semibold">
                  {selectedGalleryImage.title}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Success Stories
            </h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our accomplished alumni who started their journey of
              success here
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-yellow-400 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>

                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-8 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4 border-t pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-yellow-500"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.qualification}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join our school family? Contact us for admissions and
              more information
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-yellow-400">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Address",
                      value: `${schoolData.name}\n${schoolData.location}`,
                    },
                    { icon: Phone, title: "Phone", value: schoolData.phone },
                    { icon: Mail, title: "Email", value: schoolData.email },
                    {
                      icon: Clock,
                      title: "School Hours",
                      value:
                        "Monday - Friday: 8:00 AM - 3:00 PM\nSaturday: 8:00 AM - 12:00 PM",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors"
                    >
                      <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-400 mb-1">
                          {item.title}
                        </p>
                        <p className="text-gray-300 whitespace-pre-line">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, name: "Facebook" },
                    { icon: Twitter, name: "Twitter" },
                    { icon: Instagram, name: "Instagram" },
                    { icon: Youtube, name: "YouTube" },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-yellow-400 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 bg-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-4 bg-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition-all"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-4 bg-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-600 transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-600 text-white rounded-xl font-bold hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">JAI MODERN SCHOOL</h3>
                  <p className="text-gray-400 text-sm">
                    Excellence in Education
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering students with quality education, moral values, and
                comprehensive development to build a better tomorrow for our
                nation.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", id: "about" },
                  { name: "Facilities", id: "facilities" },
                  { name: "Gallery", id: "gallery" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center space-x-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">
                Our Facilities
              </h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Science Labs",
                  "Smart Classrooms",
                  "Computer Labs",
                  "Sports Complex",
                  "Library",
                  "Auditorium",
                ].map((facility) => (
                  <li
                    key={facility}
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">
                School Timings
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">
                    Regular Classes
                  </p>
                  <p className="text-gray-400 text-sm">Monday - Friday</p>
                  <p className="text-yellow-400 font-medium">
                    8:00 AM - 3:00 PM
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Saturday</p>
                  <p className="text-yellow-400 font-medium">
                    8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 {schoolData.name}. All rights reserved.
              </p>
              <p className="text-gray-400 text-center md:text-right flex items-center space-x-1">
                <span>Designed with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for education</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;