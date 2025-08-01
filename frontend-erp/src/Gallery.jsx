import React, { useState } from "react";
import { useAdmin } from "./hooks/useAdmin";
import {
  Image,
  Video,
  Users,
  Award,
  BookOpen,
  Trophy,
  Star,
} from "lucide-react";

const Gallery = () => {
  const [activeSection, setActiveSection] = useState("images");
  const { galleryImages, videos } = useAdmin();

  const sections = [
    { id: "images", label: "Photo Gallery", icon: Image },
    { id: "school_tour", label: "School Tour Videos", icon: Video },
    { id: "general_videos", label: "General Videos", icon: Video },
  ];

  const schoolTourVideos = videos.filter(video => video.category === "school_tour");
  const generalVideos = videos.filter(video => video.category === "general");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Explore the vibrant life at JAI MODERN SR. SEC. SCHOOL DULHERA
              through our photo gallery. From academic activities to sports
              events, discover the moments that make our school special.
            </p>
          </div>
        </div>
      </section>

      {/* Section Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection === "images" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Images Available</h3>
                  <p className="text-gray-500">Images will appear here once uploaded from the admin panel.</p>
                </div>
              ) : (
                galleryImages.map((image) => (
                  <div
                    key={image._id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeSection === "school_tour" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schoolTourVideos.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No School Tour Videos Available</h3>
                  <p className="text-gray-500">School tour videos will appear here once uploaded from the admin panel.</p>
                </div>
              ) : (
                schoolTourVideos.map((video) => (
                  <div
                    key={video._id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <video
                      src={video.url}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      controls
                      preload="metadata"
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm opacity-90">{video.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeSection === "general_videos" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalVideos.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No General Videos Available</h3>
                  <p className="text-gray-500">General videos will appear here once uploaded from the admin panel.</p>
                </div>
              ) : (
                generalVideos.map((video) => (
                  <div
                    key={video._id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <video
                      src={video.url}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      controls
                      preload="metadata"
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm opacity-90">{video.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>



      {/* Gallery Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Gallery Highlights</h2>
            <p className="text-xl opacity-90">
              Capturing moments of excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Photos", icon: Image },
              { number: "50+", label: "Events", icon: Award },
              { number: "1000+", label: "Students", icon: Users },
              { number: "25+", label: "Videos", icon: Video },
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

      {/* Recent Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Recent Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
