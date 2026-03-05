import { Link } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-white px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-[200px] font-bold text-gray-200 leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-24 h-24 text-blue-600 animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all"
          >
            <Home className="mr-2 w-5 h-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/locations"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Locations
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
