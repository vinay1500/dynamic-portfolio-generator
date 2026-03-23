import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Edit } from "lucide-react";
import { Template1 } from "../components/templates/Template1";
import { Template2 } from "../components/templates/Template2";

interface PortfolioData {
  id: string;
  templateId: string;
  name: string;
  title: string;
  tagline: string;
  profileImage: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  twitter: string;
  skills: string[];
  services: Array<{ title: string; description: string }>;
  projects: Array<{ title: string; image: string; description: string }>;
  testimonials: Array<{ name: string; role: string; quote: string }>;
  blogTitle: string;
  blogSummary: string;
  contactMessage: string;
  createdAt: string;
}

export default function PortfolioPage() {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API GET call
    const stored = localStorage.getItem("portfolios");
    if (stored) {
      const portfolios = JSON.parse(stored);
      const found = portfolios.find((p: PortfolioData) => p.id === id);
      setPortfolio(found || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Portfolio Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            This portfolio doesn't exist or has been removed.
          </p>
          <Link
            to="/professionals"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Floating Action Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Link
          to="/professionals"
          className="px-4 py-2 bg-white shadow-lg rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <Link
          to={`/edit/${portfolio.id}`}
          className="px-4 py-2 bg-purple-600 text-white shadow-lg rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <Edit className="w-4 h-4" />
          Edit
        </Link>
      </div>

      {/* Render Selected Template */}
      {portfolio.templateId === "1" ? (
        <Template1 data={portfolio} />
      ) : (
        <Template2 data={portfolio} />
      )}
    </div>
  );
}
