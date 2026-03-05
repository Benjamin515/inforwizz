import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Smartphone, Clock, CheckCircle2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function Contact() {
  useSEO({
    title: "Contact Us - Get Free Demo & 24/7 Support",
    description: "Contact Inforwizz Technologies for a free consultation and demo. Call/WhatsApp: +254 795 630008. Available 24/7 to help transform your business with our digital solutions.",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        service: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      info: "+254 795 630008",
      link: "https://wa.me/254795630008",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@inforwizz.co.ke",
      link: "mailto:info@inforwizz.co.ke",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Nairobi, Kenya",
      link: "#",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Clock,
      title: "Support Hours",
      info: "24/7 Available",
      link: "#",
      color: "from-orange-600 to-red-600",
    },
  ];

  const services = [
    "Biashara Mkononi",
    "POS Solutions",
    "M-Pesa Integration",
    "Training & Support",
    "Other Services",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-block">
              <span className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                <span>Get in Touch</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Us Today
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Ready to transform your business? Reach out for a free consultation and demo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-medium">{item.info}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          placeholder="+254 700 000000"
                        />
                      </div>
                      <div>
                        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="business"
                          name="business"
                          value={formData.business}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          placeholder="Your Business"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Inforwizz Technologies?
                </h2>
                <div className="space-y-4">
                  {[
                    "Free comprehensive training for all users",
                    "24/7 dedicated WhatsApp support",
                    "Cloud-based access from anywhere",
                    "Seamless M-Pesa integration",
                    "No long-term contracts required",
                    "Proven track record with 500+ clients",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Prefer to Call or Chat?</h3>
                <p className="text-blue-100 mb-6">
                  Our team is available 24/7 to answer your questions via WhatsApp or phone.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/254795630008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-all"
                  >
                    <Smartphone className="mr-2 w-5 h-5" />
                    WhatsApp: +254 795 630008
                  </a>
                  <a
                    href="tel:+254795630008"
                    className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call: +254 795 630008
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">We Review Your Request</strong>
                      <p className="text-gray-600 text-sm">Our team analyzes your business needs</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">Free Consultation</strong>
                      <p className="text-gray-600 text-sm">We schedule a call to discuss solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Custom Demo</strong>
                      <p className="text-gray-600 text-sm">See our platform tailored to your business</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                    <div>
                      <strong className="text-gray-900">Get Started</strong>
                      <p className="text-gray-600 text-sm">Quick onboarding with free training</p>
                    </div>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does implementation take?",
                a: "Most businesses are up and running within 1-2 days, including training and data migration.",
              },
              {
                q: "Do I need internet to use the system?",
                a: "While cloud features require internet, our POS system has offline mode for uninterrupted sales.",
              },
              {
                q: "Is training included?",
                a: "Yes! We provide comprehensive free training for all users, with ongoing support via WhatsApp.",
              },
              {
                q: "What about data security?",
                a: "We use enterprise-grade encryption and secure cloud storage. Your data is backed up automatically.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}