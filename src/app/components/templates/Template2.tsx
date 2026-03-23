import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

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

interface Template2Props {
  data: PortfolioData;
}

export function Template2({ data }: Template2Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Screen */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl mb-8">
              {data.profileImage ? (
                <img
                  src={data.profileImage}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-7xl">
                  👤
                </div>
              )}
            </div>
            <div className="flex justify-center gap-4">
              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              )}
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              )}
              {data.twitter && (
                <a
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center p-8">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{data.name}</h1>
            <p className="text-2xl text-purple-600 mb-4">{data.title}</p>
            {data.tagline && (
              <p className="text-lg text-gray-600 italic mb-8">"{data.tagline}"</p>
            )}
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{data.bio}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 text-purple-600 mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-gray-700 text-sm">{data.email}</p>
              </div>
              {data.phone && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 text-purple-600 mb-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <p className="text-gray-700 text-sm">{data.phone}</p>
                </div>
              )}
              {data.location && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 text-purple-600 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="text-gray-700 text-sm">{data.location}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Timeline Style */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Technical <span className="text-purple-600">Skills</span>
          </h2>
          <div className="space-y-4">
            {data.skills.filter(s => s).map((skill, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 bg-purple-50 px-6 py-4 rounded-lg border-l-4 border-purple-600">
                  <p className="text-lg font-semibold text-gray-900">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            What I <span className="text-purple-600">Do</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.filter(s => s.title).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-purple-600"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {index === 0 && "💼"}
                    {index === 1 && "🎯"}
                    {index === 2 && "🔧"}
                    {index > 2 && "⚙️"}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Masonry Grid */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.filter(p => p.title).map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
              >
                <div className={`bg-gradient-to-br from-purple-300 to-blue-300 ${
                  index === 0 ? "h-96" : "h-64"
                }`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      📱
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">{project.description}</p>
                  <button className="flex items-center gap-2 text-white font-semibold">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {data.testimonials.filter(t => t.name).length > 0 && (
        <section id="testimonials" className="py-20 px-4 bg-purple-600">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.testimonials.filter(t => t.name).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8"
                >
                  <div className="text-4xl text-purple-600 mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              {data.blogTitle}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.blogSummary}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Work <span className="text-purple-600">Together</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {data.contactMessage || "I'm always open to discussing new projects and opportunities."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${data.email}`}
              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">{data.name}</h3>
              <p className="text-gray-400">{data.title}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">{data.email}</p>
              {data.phone && <p className="text-gray-400 text-sm">{data.phone}</p>}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {data.linkedin && (
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {data.github && (
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {data.twitter && (
                  <a
                    href={data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 {data.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
