import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Filter,
  X,
  Package,
  Grid3x3,
  List,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";
import { productCategories, allProducts } from "../data/products";

export function Products() {
  useSEO({
    title: "Product Catalog - Enterprise IT Solutions & Technology Products",
    description:
      "Browse our comprehensive catalog of IT products: laptops, desktops, smartphones, networking equipment, POS systems, servers, and more. Serving businesses across Kenya.",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (selectedCategory) {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subcategory.toLowerCase().includes(query)
      );
    }

    return products;
  }, [searchQuery, selectedCategory]);

  const selectedCategoryData = productCategories.find(
    (cat) => cat.name === selectedCategory
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden">
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
                  <Package className="w-4 h-4" />
                  <span>Enterprise Catalog</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Product{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Catalog
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Explore our comprehensive selection of enterprise-grade IT
                products and technology solutions. From computing hardware to
                smart home devices, we supply everything your business needs.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>
                    <strong className="text-gray-900">
                      {productCategories.length}
                    </strong>{" "}
                    Categories
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>
                    <strong className="text-gray-900">
                      {allProducts.length}+
                    </strong>{" "}
                    Products
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Competitive Pricing</span>
                </div>
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
                src="https://images.unsplash.com/photo-1758186374131-d542d2beae0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZHVjdHMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NzI2NjIzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology products"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
              </button>

              <div className="hidden lg:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-white shadow-sm"
                      : "hover:bg-gray-200"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory || searchQuery) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  <span>{selectedCategory}</span>
                  <X className="w-4 h-4" />
                </button>
              )}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <span>Search: "{searchQuery}"</span>
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <AnimatePresence>
              {(showMobileFilters || window.innerWidth >= 1024) && (
                <motion.aside
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="lg:w-64 flex-shrink-0"
                >
                  <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-32">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">
                        Categories
                      </h2>
                      <button
                        onClick={() => setShowMobileFilters(false)}
                        className="lg:hidden p-1 hover:bg-gray-100 rounded transition-colors"
                        aria-label="Close filters"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          setSelectedCategory(null);
                          setShowMobileFilters(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === null
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>All Products</span>
                          <span className="text-sm text-gray-500">
                            {allProducts.length}
                          </span>
                        </div>
                      </button>

                      {productCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setShowMobileFilters(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.name
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <span>{category.icon}</span>
                              <span className="text-sm">{category.name}</span>
                            </span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                selectedCategory === category.name
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            {/* Products Display */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory || "All Products"}
                </h2>
                <p className="text-gray-600 mt-1">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              {/* Category Details (when category selected) */}
              {selectedCategoryData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 mb-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{selectedCategoryData.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {selectedCategoryData.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategoryData.subcategories.map((sub) => (
                          <span
                            key={sub.name}
                            className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Products Grid/List */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={`${product.category}-${product.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className={`bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all ${
                        viewMode === "grid" ? "p-6" : "p-4 flex gap-4"
                      }`}
                    >
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-gray-900 mb-2 ${
                            viewMode === "grid" ? "text-base" : "text-lg"
                          }`}
                        >
                          {product.name}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Category:</span>{" "}
                            {product.category}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Type:</span>{" "}
                            {product.subcategory}
                          </p>
                        </div>
                      </div>
                      {viewMode === "list" && (
                        <div className="flex items-center">
                          <Link
                            to="/contact"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Inquire
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
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
              Need Help Finding the Right Product?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100">
              Our team of experts is ready to help you choose the perfect
              technology solutions for your business needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/254795630008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-all hover:scale-105"
              >
                <Package className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
