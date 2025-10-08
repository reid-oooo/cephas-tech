import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our consulting experts 
            and discover how we can help you achieve your strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information - Hidden on tablet/mobile, shown on desktop */}
          <div className="hidden lg:block">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:contact@cephas.tech?subject=Get%20In%20Touch"
                  aria-label="contact@cephas.tech"
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center hover:from-amber-300 hover:to-amber-200 transition-all duration-200 cursor-pointer group"
                >
                  <Mail className="text-amber-800 group-hover:text-amber-700 transition-colors duration-200" size={20} />
                </a>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <div className="text-slate-600">
                    <a 
                      href="mailto:contact@cephas.tech?subject=Get%20In%20Touch"
                      aria-label="contact@cephas.tech"
                      className="text-amber-700 hover:text-amber-600 transition-colors duration-200 underline decoration-amber-500 hover:decoration-amber-500"
                    >
                      contact@cephas.tech
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                  <MapPin className="text-amber-700" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Office</div>
                  <div className="text-slate-600">West Palm Beach, FL</div>
                </div>
              </div>
            </div> 

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Why Choose Cephas?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Proven track record from startups to enterprise clients
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Customized solutions for your unique challenges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Ongoing support throughout implementation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Measurable results and ROI tracking
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 lg:col-start-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              {/* Replace with your Access Key */}
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="project-details" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="project-details"
                  name="project details"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your project, challenges, and goals..."
                ></textarea>
              </div>

              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* Custom Confirmation / Success Page */}
              <input type="hidden" name="redirect" value={`${typeof window !== 'undefined' ? window.location.origin : 'https://cephas.tech'}/thank-you`} />
              
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              <p>We typically respond within 24 hours during business days.</p>
            </div>
          </div>

          {/* Why Choose Cephas - Shown on tablet/mobile after form, under contact email info on desktop */}
          <div className="lg:hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <h4 className="text-xl font-bold mb-4">Why Choose Cephas?</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Proven track record from startups to enterprise clients
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Customized solutions for your unique challenges
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Ongoing support throughout implementation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Measurable results and ROI tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
