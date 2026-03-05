import { Link } from "react-router";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  Smartphone,
  BarChart3,
  CreditCard,
  HeadphonesIcon
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";

export function Home() {
  useSEO({
    title: "Home - Digital Business Solutions & IT Electronics for Kenyan SMEs",
    description: "Automate your business with Inforwizz Technologies. We provide POS systems, M-Pesa integration, business management solutions, and comprehensive IT hardware across Kenya. Free training & 24/7 support.",
  });

  const features = [
    {
      icon: Zap,
      title: "Real-Time Insights",
      description: "Make informed decisions with live data and analytics at your fingertips",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Cloud-based infrastructure with enterprise-grade security measures",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scale efficiently with automated processes and reduced operational costs",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Expert assistance available round the clock via WhatsApp",
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Biashara Mkononi",
      description: "All-in-one platform for inventory tracking, sales monitoring, and financial reporting",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MjUxOTA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: CreditCard,
      title: "POS Solutions",
      description: "Modern point-of-sale systems with quick transactions and automated receipting",
      image: "https://images.unsplash.com/photo-1614068979501-5608bdfaa4bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBQT1MlMjBwb2ludCUyMG9mJTIwc2FsZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzI1MTkwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Smartphone,
      title: "M-Pesa Integration",
      description: "Seamless mobile money payment integration with automated reconciliation",
      image: "https://images.unsplash.com/photo-1758519292135-2af0ad50f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwcGhvbmUlMjB0cmFuc2FjdGlvbnxlbnwxfHx8fDE3NzI1MTkwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: HeadphonesIcon,
      title: "Training & Support",
      description: "Comprehensive onboarding with free training and dedicated WhatsApp support",
      image: "https://images.unsplash.com/photo-1764795849768-c2410769d3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtJTIwaGVscGluZ3xlbnwxfHx8fDE3NzI0NDcwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const stats = [
    { number: "500+", label: "Active Clients" },
    { number: "6", label: "Major Cities" },
    { number: "24/7", label: "Support Available" },
    { number: "99.9%", label: "Uptime SLA" },
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Eliminate manual data entry errors",
    "Real-time inventory visibility",
    "Instant financial reporting",
    "Automated M-Pesa reconciliation",
    "Cloud-based access from anywhere",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Empowering Kenyan SMEs</span>
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Automate your business processes, reduce costs, and gain real-time insights with our comprehensive management systems designed for Kenyan entrepreneurs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Explore Services
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>Join 500+ businesses already transformed</span>
              </div>
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
                alt="Business technology meeting"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Inforwizz Technologies?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide cutting-edge solutions designed specifically for the Kenyan market
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for retail, wholesale, and service-based industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Teaser Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Enterprise Catalog</span>
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  1,000+ Products
                </span>
                <br />
                At Your Fingertips
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                From laptops and smartphones to enterprise servers and networking equipment, 
                explore our comprehensive catalog of technology products. We supply everything 
                your business needs to thrive in the digital age.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-gray-300">15 Product Categories</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-gray-300">Competitive Pricing</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-gray-300">Enterprise Solutions</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-gray-300">Bulk Orders Available</p>
                </div>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all"
              >
                Browse Full Catalog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264695857-344a45b8b3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhcHRvcCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcyNjYyMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology products"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753161029194-1b95f4d65c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzaG9wJTIwZW50cmVwcmVuZXVyfGVufDF8fHx8MTc3MjQ1Njk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Small business owner"
                className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Transform Your Business Operations
              </h2>
              <p className="text-lg text-gray-600">
                Join hundreds of Kenyan entrepreneurs who have already digitized their businesses and seen remarkable results.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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

              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Your Digital Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100">
              Get started today with free training and 24/7 WhatsApp support. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/254795630008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-all hover:scale-105"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <p className="text-sm text-blue-100">
              Call us: +254 795 630008 | Available 24/7
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}