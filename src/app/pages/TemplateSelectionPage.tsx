import { Eye } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function TemplateSelectionPage() {
  const navigate = useNavigate();

  const selectTemplate = (templateId: string) => {
    localStorage.setItem("selectedTemplate", templateId);
    navigate("/create");
  };

  const templates = [
    {
      id: "1",
      title: "Template 1 - Bold & Bright",
      description:
        "Modern and vibrant design with yellow/orange gradient hero section and clean professional layout",
      features: [
        { text: "Full-screen Hero Section", color: "text-yellow-600" },
        { text: "Grid Portfolio Layout", color: "text-yellow-600" },
        { text: "Horizontal Testimonials", color: "text-yellow-600" },
        { text: "Gradient Contact Section", color: "text-yellow-600" },
      ],
      preview: "from-yellow-400 to-orange-400",
    },
    {
      id: "2",
      title: "Template 2 - Modern & Professional",
      description:
        "Split-screen hero layout with purple/blue theme, timeline skills display, and masonry portfolio grid",
      features: [
        { text: "Split Hero Layout", color: "text-purple-600" },
        { text: "Masonry Portfolio Grid", color: "text-purple-600" },
        { text: "Timeline Skills Display", color: "text-purple-600" },
        { text: "Modern Card Design", color: "text-purple-600" },
      ],
      preview: "from-purple-600 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Choose Your <span className="text-purple-600">Template</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a professional template that best represents your style. You can customize it with your own content in the next step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className={`relative group h-64 bg-gradient-to-br ${template.preview}`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">
                      {template.id === "1" ? "🎨" : "💼"}
                    </div>
                    <p className="text-2xl font-bold">{template.title.split(" - ")[1]}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {template.title}
                </h3>
                <p className="text-gray-700 mb-4">{template.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${feature.color.replace('text-', 'bg-')}`}></div>
                        <span className={`text-sm ${feature.color}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => selectTemplate(template.id)}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  Select This Template
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}