import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/cephas.png" 
                alt="Cephas Consulting Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-serif text-amber-500 tracking-wide">CEPHAS</span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              Strategic consulting services built on solid foundations. 
              We help organizations transform their businesses through proven methodologies and expert guidance.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail size={16} />
                <span>hello@cephasconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin size={16} />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Strategic Planning</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Organizational Development</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Performance Optimization</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Operational Excellence</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Innovation Consulting</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#process" className="text-slate-300 hover:text-amber-400 transition-colors">Our Process</a></li>
              <li><a href="#case-studies" className="text-slate-300 hover:text-amber-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="/careers" className="text-slate-300 hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-slate-300 hover:text-amber-400 transition-colors">Insights</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="/privacy" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <a 
                  href="https://linkedin.com/company/cephas-consulting" 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/cephas_consulting" 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
              <div className="text-slate-400 text-sm">
                © 2024 Cephas Consulting. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Cephas Consulting",
          "description": "Strategic business consulting services built on solid foundations. Transform your business with expert guidance and proven methodologies.",
          "url": "https://cephasconsulting.com",
          "logo": "/images/cephas.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@cephasconsulting.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US"
          },
          "serviceType": ["Strategic Planning", "Organizational Development", "Performance Optimization", "Digital Transformation", "Operational Excellence", "Innovation Consulting"],
          "areaServed": "Worldwide"
        })
      }} />
    </footer>
  );
}
