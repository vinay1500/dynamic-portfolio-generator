import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, Filter, Edit } from "lucide-react";

interface Portfolio {
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
  skills: string[];
  createdAt: string;
}

export default function ProfessionalsListPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState<Portfolio[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSkill, setFilterSkill] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    // Simulate API GET call
    const stored = localStorage.getItem("portfolios");
    if (stored) {
      const data = JSON.parse(stored);
      setPortfolios(data);
      setFilteredPortfolios(data);
    }
  }, []);

  useEffect(() => {
    let filtered = portfolios;

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterSkill) {
      filtered = filtered.filter((p) =>
        p.skills.some((s) =>
          s.toLowerCase().includes(filterSkill.toLowerCase())
        )
      );
    }

    if (filterRole) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(filterRole.toLowerCase())
      );
    }

    setFilteredPortfolios(filtered);
  }, [searchTerm, filterSkill, filterRole, portfolios]);

  const allSkills = Array.from(
    new Set(portfolios.flatMap((p) => p.skills).filter((s) => s))
  );

  const allRoles = Array.from(
    new Set(portfolios.map((p) => p.title).filter((t) => t))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Professional Portfolios
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredPortfolios.length} portfolio
                {filteredPortfolios.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <Link
              to="/templates"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              + Create Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role, or bio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterSkill}
                onChange={(e) => setFilterSkill(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Skills</option>
                {allSkills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Roles</option>
                {allRoles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredPortfolios.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📁</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No Portfolios Found
            </h2>
            <p className="text-gray-600 mb-6">
              {portfolios.length === 0
                ? "Create your first portfolio to get started!"
                : "Try adjusting your filters"}
            </p>
            {portfolios.length === 0 && (
              <Link
                to="/templates"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Create Portfolio
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                  {portfolio.profileImage ? (
                    <img
                      src={portfolio.profileImage}
                      alt={portfolio.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                      👤
                    </div>
                  )}
                  <Link
                    to={`/edit/${portfolio.id}`}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Edit className="w-4 h-4 text-gray-700" />
                  </Link>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {portfolio.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {portfolio.title}
                  </p>
                  {portfolio.tagline && (
                    <p className="text-sm text-gray-600 italic mb-3">
                      "{portfolio.tagline}"
                    </p>
                  )}
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {portfolio.bio}
                  </p>

                  {portfolio.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {portfolio.skills.slice(0, 3).map(
                        (skill, index) =>
                          skill && (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          )
                      )}
                      {portfolio.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          +{portfolio.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <Link
                    to={`/portfolio/${portfolio.id}`}
                    className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
