import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  BookOpen,
  ChevronDown,
  Users,
  Award,
  Bus,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Home,
  Info,
  GraduationCap,
  Building,
  Image,
  MessageCircle,
} from "lucide-react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Academics from "./Academics";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import Contact from "./Contact";
import AdminPanel from "./AdminPanel";
import AdminLogin from "./AdminLogin";
import { AdminProvider } from "./AdminContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: Home,
    },
    {
      path: "/about",
      label: "About Us",
      icon: Info,
    },
    {
      path: "/academics",
      label: "Academics",
      icon: GraduationCap,
    },
    {
      path: "/facilities",
      label: "Facilities",
      icon: Building,
    },
    {
      path: "/gallery",
      label: "Gallery",
      icon: Image,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: MessageCircle,
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-yellow-200/95 backdrop-blur-md shadow-lg z-50 border-b-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1 md:flex-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="min-w-0 flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none">
              {/* Mobile and Small Tablet View */}
              <div className="block lg:hidden">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-tight truncate">
                  JAI MODERN SR. SEC. SCHOOL
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 leading-none truncate">
                  Dulhera, (Jhajjar), Haryana
                </p>
              </div>
              {/* Desktop View */}
              <div className="hidden lg:block">
                <h1 className="text-xl xl:text-2xl font-bold text-gray-800 leading-tight">
                  JAI MODERN SR. SEC. SCHOOL
                </h1>
                <p className="text-sm text-gray-600 leading-none">
                  Dulhera, (Jhajjar), Haryana
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 ml-4 xl:ml-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-yellow-400 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0 ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-yellow-300 border-t-2 border-yellow-500 rounded-b-xl shadow-lg">
            <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1.5 sm:space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2.5 sm:space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-200 hover:scale-102 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-yellow-400 hover:text-blue-600 hover:shadow-md"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                    )}
                  </Link>
                );
              })}

              {/* Mobile Contact Info */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-yellow-500 space-y-1 sm:space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">9050102999</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">info@jaimodernschool.edu</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("adminToken");
      setIsAuthenticated(!!token);
    };

    // Check auth on mount
    checkAuth();

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === "adminToken") {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for custom events (for same-tab logout)
    const handleCustomStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("adminAuthChange", handleCustomStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("adminAuthChange", handleCustomStorageChange);
    };
  }, []);

  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-yellow-200">
          <Navigation />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/admin"
                element={isAuthenticated ? <AdminPanel /> : <AdminLogin />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AdminProvider>
  );
};

export default App;
