import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

interface PortfolioData {
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

interface Template1Props {
  data: PortfolioData;
}

export function Template1({ data }: Template1Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-400 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl mb-8">
            {data.profileImage ? (
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-6xl">
                👤
              </div>
            )}
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">{data.name}</h1>
          <p className="text-2xl text-gray-800 mb-4">{data.title}</p>
          {data.tagline && (
            <p className="text-xl text-gray-700 italic mb-8">"{data.tagline}"</p>
          )}
          <div className="flex justify-center gap-4">
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-900" />
              </a>
            )}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-900" />
              </a>
            )}
            {data.twitter && (
              <a
                href={data.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <Twitter className="w-6 h-6 text-gray-900" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">{data.bio}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">{data.email}</span>
              </div>
              {data.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">{data.phone}</span>
                </div>
              )}
              {data.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">{data.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-yellow-500">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.filter(s => s).map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-medium hover:bg-yellow-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-yellow-500">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.filter(s => s.title).map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl mb-4">
                  {index === 0 && "🚀"}
                  {index === 1 && "💡"}
                  {index === 2 && "⚡"}
                  {index > 2 && "✨"}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-800">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-yellow-500">Portfolio</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.projects.filter(p => p.title).map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      🖼️
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {data.testimonials.filter(t => t.name).length > 0 && (
        <section id="testimonials" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Client <span className="text-yellow-500">Testimonials</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.testimonials.filter(t => t.name).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-400"
                >
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog */}
      {data.blogTitle && (
        <section id="blog" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              {data.blogTitle}
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {data.blogSummary}
            </p>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            {data.contactMessage || "Let's work together!"}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${data.email}`}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Send Email
            </a>
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2026 {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
