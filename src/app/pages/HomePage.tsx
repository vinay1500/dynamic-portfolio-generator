import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-white mb-6">
          Portfolio Generator
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Create your professional portfolio in minutes. Choose a template, fill in your details, and share your work with the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/templates"
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Create Your Portfolio
          </Link>
          <Link
            to="/professionals"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            View Portfolios
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold mb-2">Choose Template</h3>
            <p className="text-sm text-white/80">Select from beautiful pre-designed templates</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-bold mb-2">Fill Details</h3>
            <p className="text-sm text-white/80">Add your information and showcase your work</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold mb-2">Launch Portfolio</h3>
            <p className="text-sm text-white/80">Share your professional portfolio instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
