import { motion } from "motion/react";
import { Target, Eye, Award, Users, TrendingUp, Globe, Package, Cpu } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";

export function About() {
  useSEO({
    title: "About Us - Leading IT Solutions & Electronics Provider in Kenya",
    description: "Learn about Inforwizz Technologies, Kenya's trusted IT solutions and electronics provider. Empowering 500+ SMEs with digital transformation, hardware, and software across Nairobi, Mombasa, Kisumu & more.",
  });

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering SMEs through digital transformation and automation",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class solutions with local expertise",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority with 24/7 dedicated support",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously evolving to meet changing business needs",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to digitize Kenyan SMEs",
    },
    {
      year: "2019",
      title: "Biashara Mkononi Launched",
      description: "Introduced our flagship business management platform",
    },
    {
      year: "2020",
      title: "100+ Clients",
      description: "Reached major milestone during challenging times",
    },
    {
      year: "2022",
      title: "Multi-City Expansion",
      description: "Expanded to Mombasa, Kisumu, Nakuru, Meru, and Isiolo",
    },
    {
      year: "2024",
      title: "500+ Active Users",
      description: "Leading digital transformation across Kenya",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  <span>Since 2018</span>
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Inforwizz Technologies
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a Kenyan IT solutions and electronics provider dedicated to empowering small and medium-sized enterprises through digital automation, efficient business management systems, and comprehensive technology hardware supply.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519290277-97c47f189860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI1MTkwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white"
            >
              <Target className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                To automate business processes for local entrepreneurs, helping them transition from manual record-keeping to digital systems. We aim to reduce operational costs, minimize human error, and provide real-time data insights to improve decision-making for business owners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white"
            >
              <Eye className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be Kenya's leading provider of digital business solutions, transforming how SMEs operate and compete in the digital economy. We envision a future where every Kenyan entrepreneur has access to world-class business management tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer - Dual Business Model */}
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
              Your Complete Technology Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end technology solutions, combining powerful software with quality hardware to meet all your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Software Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Software Solutions
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Powerful digital platforms designed for Kenyan businesses, from retail management to payment integration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Biashara Mkononi business management platform</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Point of Sale (POS) software systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">M-Pesa payment integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Cloud-based inventory management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Custom software development</span>
                </li>
              </ul>
            </motion.div>

            {/* Hardware Supply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 text-white"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                IT Hardware & Electronics
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive technology products from leading brands, with competitive pricing and reliable delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Computers, laptops & accessories</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Networking equipment & infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">POS hardware terminals & printers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Mobile devices & tablets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Office equipment & enterprise solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to transforming businesses across Kenya
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Year Circle */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                      {item.year.slice(-2)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-sm text-blue-600 font-semibold mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Businesses Trust Us
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              We understand the unique challenges facing Kenyan SMEs because we're part of this community. Our solutions are designed with local businesses in mind, integrating seamlessly with systems like M-Pesa and providing support in a way that works for you.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}