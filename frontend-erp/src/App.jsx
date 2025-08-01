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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                JAI MODERN SR. SEC. SCHOOL DULHERA
              </h1>
              <p className="text-sm text-gray-600">
                Dulhera, (Jhajjar), Haryana
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-700"
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
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
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
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
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
    const auth = localStorage.getItem("adminAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-white">
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
