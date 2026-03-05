import { motion } from "motion/react";
import { MapPin, Phone, Users, Building2 } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function Locations() {
  useSEO({
    title: "Service Locations - Nairobi, Mombasa, Kisumu, Nakuru, Meru, Isiolo",
    description: "Inforwizz Technologies serves businesses across Kenya: Nairobi, Mombasa, Kisumu, Nakuru, Meru, and Isiolo. Cloud-based solutions with local support in your area.",
  });

  const locations = [
    {
      city: "Nairobi",
      region: "Nairobi Metropolitan Area",
      description: "Our headquarters and main service center, providing full-service support to businesses across the capital city.",
      icon: Building2,
      color: "from-blue-600 to-cyan-600",
      coverage: ["Nairobi CBD", "Westlands", "Eastlands", "South C", "Karen", "Kilimani"],
    },
    {
      city: "Mombasa",
      region: "Coast Region",
      description: "Serving coastal businesses with on-site support and training for maritime and tourism industries.",
      icon: MapPin,
      color: "from-cyan-600 to-teal-600",
      coverage: ["Mombasa Island", "Nyali", "Bamburi", "Likoni", "Port Area"],
    },
    {
      city: "Kisumu",
      region: "Western Kenya",
      description: "Supporting businesses around Lake Victoria with dedicated local expertise and installations.",
      icon: MapPin,
      color: "from-teal-600 to-green-600",
      coverage: ["Kisumu CBD", "Milimani", "Kondele", "Mamboleo", "Dunga"],
    },
    {
      city: "Nakuru",
      region: "Rift Valley",
      description: "Empowering agricultural and retail businesses in the heart of the Rift Valley.",
      icon: MapPin,
      color: "from-green-600 to-emerald-600",
      coverage: ["Nakuru Town", "Milimani", "Section 58", "Lanet", "Naivasha"],
    },
    {
      city: "Meru",
      region: "Eastern Kenya",
      description: "Providing digital solutions to businesses in the agricultural heartland of Eastern Kenya.",
      icon: MapPin,
      color: "from-emerald-600 to-blue-600",
      coverage: ["Meru Town", "Makutano", "Nkubu", "Maua", "Chuka"],
    },
    {
      city: "Isiolo",
      region: "Northern Kenya",
      description: "Extending our services to northern businesses with remote and on-site support options.",
      icon: MapPin,
      color: "from-purple-600 to-blue-600",
      coverage: ["Isiolo Town", "Garbatulla", "Merti", "Kinna"],
    },
  ];

  const serviceAreas = [
    { title: "Urban Centers", count: "15+" },
    { title: "Rural Areas", count: "50+" },
    { title: "Counties Served", count: "20+" },
    { title: "Remote Support", count: "100%" },
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
                <MapPin className="w-4 h-4" />
                <span>Nationwide Coverage</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Our Service{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Locations
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Serving businesses across Kenya with local expertise and nationwide support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{area.count}</div>
                <div className="text-blue-100 text-sm lg:text-base">{area.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Locations */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Major Service Centers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain a strong presence in Kenya's key business hubs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${location.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <location.icon className="w-10 h-10" />
                    {index === 0 && (
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{location.city}</h3>
                  <p className="text-white/90 text-sm">{location.region}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {location.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Coverage Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.coverage.map((area) => (
                        <span
                          key={area}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href="https://wa.me/254795630008"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Local Office
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Support Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white text-center space-y-6"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                Cloud-Based Remote Support
              </h2>
              
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Even if you're not in one of our major service centers, we've got you covered. Our cloud-based Biashara Mkononi software can be accessed from anywhere in Kenya, with full remote installation and virtual support available.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-blue-100">WhatsApp Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-blue-100">Remote Access</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">All</div>
                  <div className="text-sm text-blue-100">Counties Covered</div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://wa.me/254795630008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Contact Support Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Expanding Across Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Mombasa to Isiolo, Kisumu to Meru, we're committed to serving businesses in every corner of Kenya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 lg:p-16 text-center"
          >
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Service Coverage Map
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Our network spans across Kenya's major business hubs and extends to remote areas through cloud-based solutions and virtual support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Meru", "Isiolo"].map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-4 shadow-md"
                >
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{city}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Looking for Service in Your Area?
            </h2>
            <p className="text-lg text-gray-300">
              Contact us to discuss how we can serve your business, wherever you are in Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/254795630008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-all hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp: +254 795 630008
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}