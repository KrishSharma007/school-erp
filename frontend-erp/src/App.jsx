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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                JAI MODERN SR. SEC. SCHOOL DULHERA
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Dulhera, (Jhajjar), Haryana
              </p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-lg font-bold text-gray-800">JAI MODERN</h1>
              <p className="text-xs text-gray-600">SCHOOL DULHERA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-yellow-400 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-yellow-300 border-t-2 border-yellow-500 rounded-b-xl shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 hover:scale-102 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-yellow-400 hover:text-blue-600 hover:shadow-md"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-yellow-600 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t-2 border-yellow-500">
                <div className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>9050102999</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>info@jaimodernschool.edu</span>
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