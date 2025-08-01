import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Star,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5001/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      console.error('Message submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jaimodernschool.edu", "admissions@jaimodernschool.edu"],
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "123 Education Street",
        "Learning City, State - 123456",
        "India",
      ],
      color: "text-blue-600",
    },
    {
      icon: Clock,
      title: "School Hours",
      details: [
        "Monday - Friday: 8:00 AM - 3:00 PM",
        "Saturday: 8:00 AM - 12:00 PM",
      ],
      color: "text-blue-600",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Youtube, label: "YouTube", url: "#" },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with JAI MODERN SR. SEC. SCHOOL DULHERA. We're here
              to answer your questions and provide information about admissions,
              programs, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 shadow-sm"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${info.color}`} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, dIndex) => (
                      <p key={dIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>
                              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="General Information">General Information</option>
                      <option value="Academic Programs">Academic Programs</option>
                      <option value="Facilities">Facilities</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Location
                </h3>
                <div className="bg-yellow-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      Map integration would go here
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      info@jaimodernschool.edu
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      Mon-Fri: 8:00 AM - 3:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Parents Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Parent of Class 8 Student",
                text: "JAI MODERN SR. SEC. SCHOOL DULHERA has provided excellent education and care for my child. The teachers are dedicated and the facilities are world-class.",
                rating: 5,
              },
              {
                name: "Rajesh Kumar",
                role: "Parent of Class 10 Student",
                text: "The school's focus on both academics and character development is impressive. My child has grown tremendously here.",
                rating: 5,
              },
              {
                name: "Anita Patel",
                role: "Parent of Class 6 Student",
                text: "The communication with parents is excellent. I always feel informed about my child's progress and school activities.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-yellow-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-yellow-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "Admission requirements include age verification, previous school records, and an entrance assessment. Please contact our admission office for detailed information.",
              },
              {
                question: "What are the school timings?",
                answer:
                  "School timings are Monday to Friday from 8:00 AM to 3:00 PM, and Saturday from 8:00 AM to 12:00 PM.",
              },
              {
                question: "Do you provide transportation?",
                answer:
                  "Yes, we provide safe and reliable transportation services covering multiple routes with GPS tracking and trained drivers.",
              },
              {
                question: "What facilities do you offer?",
                answer:
                  "We offer smart classrooms, science laboratories, sports complex, library, cafeteria, and many more modern facilities.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
