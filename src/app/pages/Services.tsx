import { motion } from "motion/react";
import { 
  BarChart3, 
  CreditCard, 
  Smartphone, 
  HeadphonesIcon,
  Package,
  TrendingUp,
  Receipt,
  Cloud,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Laptop,
  Monitor
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";

export function Services() {
  useSEO({
    title: "Our Services - POS Systems, M-Pesa Integration & Business Management",
    description: "Explore our digital solutions: Biashara Mkononi business management, POS systems, M-Pesa integration, and 24/7 support. Serving retail, wholesale & service industries across Kenya.",
  });

  const mainServices = [
    {
      icon: BarChart3,
      title: "Biashara Mkononi",
      subtitle: "All-in-One Business Management",
      description: "Our flagship platform that serves as a comprehensive business management solution. Track inventory in real-time, monitor sales performance, generate financial reports, and make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MjUxOTA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Real-time inventory tracking",
        "Automated stock alerts",
        "Sales analytics and reporting",
        "Financial management tools",
        "Multi-user access control",
        "Customer relationship management",
      ],
    },
    {
      icon: CreditCard,
      title: "POS Solutions",
      subtitle: "Modern Point of Sale Systems",
      description: "Streamline your checkout process with our advanced POS hardware and software. Fast transactions, automated receipting, and seamless integration with your inventory system.",
      image: "https://images.unsplash.com/photo-1614068979501-5608bdfaa4bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBQT1MlMjBwb2ludCUyMG9mJTIwc2FsZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzI1MTkwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Touch-screen interface",
        "Barcode scanning",
        "Multiple payment methods",
        "Digital receipt generation",
        "Offline mode capability",
        "Sales reports and analytics",
      ],
    },
    {
      icon: Smartphone,
      title: "M-Pesa Integration",
      subtitle: "Seamless Mobile Money Payments",
      description: "Accept M-Pesa payments directly through your business system with automatic reconciliation. No more manual matching of transactions or missed payments.",
      image: "https://images.unsplash.com/photo-1758519292135-2af0ad50f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwcGhvbmUlMjB0cmFuc2FjdGlvbnxlbnwxfHx8fDE3NzI1MTkwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Instant payment notifications",
        "Automatic reconciliation",
        "Transaction history tracking",
        "Customer payment records",
        "Bulk payment processing",
        "Payment analytics",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Training & Support",
      subtitle: "24/7 Expert Assistance",
      description: "We don't just provide software – we ensure you know how to use it effectively. Free comprehensive training and round-the-clock support via WhatsApp.",
      image: "https://images.unsplash.com/photo-1764795849768-c2410769d3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtJTIwaGVscGluZ3xlbnwxfHx8fDE3NzI0NDcwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Free system training",
        "24/7 WhatsApp support",
        "On-site installation assistance",
        "Regular system updates",
        "Video tutorials",
        "Dedicated account manager",
      ],
    },
  ];

  const additionalFeatures = [
    { icon: Package, title: "Inventory Management", description: "Track stock levels in real-time" },
    { icon: TrendingUp, title: "Sales Analytics", description: "Understand your business performance" },
    { icon: Receipt, title: "Invoicing", description: "Professional invoices and receipts" },
    { icon: Cloud, title: "Cloud-Based", description: "Access from anywhere, anytime" },
    { icon: Shield, title: "Data Security", description: "Enterprise-grade encryption" },
    { icon: Zap, title: "Fast Performance", description: "Lightning-fast processing" },
  ];

  const industries = [
    "Retail Stores",
    "Wholesale Businesses",
    "Supermarkets",
    "Hardware Stores",
    "Pharmacies",
    "Electronics Shops",
    "Fashion Boutiques",
    "Restaurants & Cafes",
    "Service Providers",
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
                <Zap className="w-4 h-4" />
                <span>Comprehensive Solutions</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Complete digital solutions tailored for retail, wholesale, and service-based industries across Kenya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                  >
                    Get Started with {service.title}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-2xl" />
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
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
              Powerful Features Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
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

      {/* IT Hardware & Electronics Supply */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                <Package className="w-4 h-4" />
                <span>Complete IT Solutions</span>
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              IT Hardware & Electronics Supply
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Beyond software, we're your trusted partner for enterprise-grade IT hardware. 
              Browse our comprehensive catalog of computers, networking equipment, POS terminals, 
              and more – all backed by competitive pricing and reliable support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Computing Hardware
              </h3>
              <p className="text-gray-300 mb-4">
                Laptops, desktops, servers, and components from leading brands
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Business laptops & workstations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Enterprise servers & storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>PC components & peripherals</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                POS & Retail Equipment
              </h3>
              <p className="text-gray-300 mb-4">
                Complete point-of-sale hardware solutions for modern retail
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Touchscreen POS terminals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Receipt printers & scanners</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Cash drawers & accessories</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Networking & More
              </h3>
              <p className="text-gray-300 mb-4">
                Infrastructure, mobile devices, and office equipment
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Routers, switches & UPS systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Smartphones & tablets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Printers & office supplies</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all"
            >
              Browse Our Full Product Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Over 1,000 products across 15 categories
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solutions are trusted across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-900 font-medium">{industry}</span>
              </motion.div>
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100">
              Contact us today for a free consultation and demonstration of our services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/254795630008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-all hover:scale-105"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}