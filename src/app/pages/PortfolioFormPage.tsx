import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface FormData {
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
}

const sections = [
  "Hero Section",
  "About Me",
  "Skills",
  "Services",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Contact",
];

export default function PortfolioFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    templateId: localStorage.getItem("selectedTemplate") || "1",
    name: "",
    title: "",
    tagline: "",
    profileImage: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    twitter: "",
    skills: [""],
    services: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    projects: [
      { title: "", image: "", description: "" },
      { title: "", image: "", description: "" },
      { title: "", image: "", description: "" },
    ],
    testimonials: [{ name: "", role: "", quote: "" }],
    blogTitle: "",
    blogSummary: "",
    contactMessage: "",
  });

  // Load existing portfolio data if editing
  useEffect(() => {
    if (isEdit) {
      const stored = localStorage.getItem("portfolios");
      if (stored) {
        const portfolios = JSON.parse(stored);
        const existing = portfolios.find((p: any) => p.id === id);
        if (existing) {
          setFormData(existing);
        }
      }
    }
  }, [id, isEdit]);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (
    field: keyof FormData,
    index: number,
    key: string,
    value: string
  ) => {
    setFormData((prev) => {
      const array = [...(prev[field] as any[])];
      if (typeof array[index] === "string") {
        array[index] = value;
      } else {
        array[index] = { ...array[index], [key]: value };
      }
      return { ...prev, [field]: array };
    });
  };

  const addArrayItem = (field: keyof FormData, defaultValue: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as any[]), defaultValue],
    }));
  };

  const removeArrayItem = (field: keyof FormData, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as any[]).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    // Store in localStorage (would be API call in production)
    const portfolios = JSON.parse(
      localStorage.getItem("portfolios") || "[]"
    );
    const newPortfolio = {
      id: isEdit ? id : Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    if (isEdit) {
      const index = portfolios.findIndex((p: any) => p.id === id);
      if (index !== -1) {
        portfolios[index] = newPortfolio;
      }
    } else {
      portfolios.push(newPortfolio);
    }

    localStorage.setItem("portfolios", JSON.stringify(portfolios));
    navigate("/professionals");
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      handleSubmit();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Hero Section
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Professional Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="Full Stack Developer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tagline
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => updateField("tagline", e.target.value)}
                placeholder="Building the future, one line of code at a time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Image URL
              </label>
              <input
                type="url"
                value={formData.profileImage}
                onChange={(e) => updateField("profileImage", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 1: // About Me
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio *
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => updateField("bio", e.target.value)}
                placeholder="Tell us about yourself..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="San Francisco, CA"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => updateField("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => updateField("github", e.target.value)}
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter
                </label>
                <input
                  type="url"
                  value={formData.twitter}
                  onChange={(e) => updateField("twitter", e.target.value)}
                  placeholder="https://twitter.com/username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 2: // Skills
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills / Tags
            </label>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    updateArrayField("skills", index, "", e.target.value)
                  }
                  placeholder="e.g., React, Node.js, Python"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {formData.skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("skills", index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("skills", "")}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              + Add Skill
            </button>
          </div>
        );

      case 3: // Services
        return (
          <div className="space-y-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services (Minimum 3)
            </label>
            {formData.services.map((service, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) =>
                      updateArrayField("services", index, "title", e.target.value)
                    }
                    placeholder="Service Title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea
                    value={service.description}
                    onChange={(e) =>
                      updateArrayField(
                        "services",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Service Description"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  {formData.services.length > 3 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem("services", index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove Service
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addArrayItem("services", { title: "", description: "" })
              }
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              + Add Service
            </button>
          </div>
        );

      case 4: // Portfolio
        return (
          <div className="space-y-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Projects (Minimum 3)
            </label>
            {formData.projects.map((project, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      updateArrayField("projects", index, "title", e.target.value)
                    }
                    placeholder="Project Title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="url"
                    value={project.image}
                    onChange={(e) =>
                      updateArrayField("projects", index, "image", e.target.value)
                    }
                    placeholder="Project Image URL"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      updateArrayField(
                        "projects",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Project Description"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  {formData.projects.length > 3 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem("projects", index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove Project
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addArrayItem("projects", {
                  title: "",
                  image: "",
                  description: "",
                })
              }
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              + Add Project
            </button>
          </div>
        );

      case 5: // Testimonials
        return (
          <div className="space-y-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Testimonials (1-3)
            </label>
            {formData.testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    value={testimonial.name}
                    onChange={(e) =>
                      updateArrayField(
                        "testimonials",
                        index,
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Client Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={testimonial.role}
                    onChange={(e) =>
                      updateArrayField(
                        "testimonials",
                        index,
                        "role",
                        e.target.value
                      )
                    }
                    placeholder="Client Role / Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea
                    value={testimonial.quote}
                    onChange={(e) =>
                      updateArrayField(
                        "testimonials",
                        index,
                        "quote",
                        e.target.value
                      )
                    }
                    placeholder="Testimonial Quote"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  {formData.testimonials.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem("testimonials", index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove Testimonial
                    </button>
                  )}
                </div>
              </div>
            ))}
            {formData.testimonials.length < 3 && (
              <button
                type="button"
                onClick={() =>
                  addArrayItem("testimonials", { name: "", role: "", quote: "" })
                }
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                + Add Testimonial
              </button>
            )}
          </div>
        );

      case 6: // Blog
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Optional section</p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                value={formData.blogTitle}
                onChange={(e) => updateField("blogTitle", e.target.value)}
                placeholder="Latest Thoughts & Articles"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Summary
              </label>
              <textarea
                value={formData.blogSummary}
                onChange={(e) => updateField("blogSummary", e.target.value)}
                placeholder="Brief summary about your blog or latest articles..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 7: // Contact
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Message
              </label>
              <textarea
                value={formData.contactMessage}
                onChange={(e) => updateField("contactMessage", e.target.value)}
                placeholder="Let's work together! Feel free to reach out..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Your email and phone from the "About Me"
                section will be used for contact information.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {isEdit ? "Edit Portfolio" : "Create Portfolio"}
            </h1>
            <span className="text-sm text-gray-600">
              Step {currentSection + 1} of {sections.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentSection + 1) / sections.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                currentSection === index
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {sections[currentSection]}
          </h2>
          {renderSection()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevSection}
            disabled={currentSection === 0}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <button
            type="button"
            onClick={nextSection}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
          >
            {currentSection === sections.length - 1 ? "Submit" : "Next"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}