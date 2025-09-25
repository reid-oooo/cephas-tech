import { Search, Building2, Mountain } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Cornerstone Audit",
    description: "The foundational step for AI transformation. Assess your tech stack and AI readiness in 2-4 weeks, delivering a clear roadmap to accelerate growth and reduce costs.",
    features: ["Tech Stack Assessment", "AI Readiness Evaluation", "Strategic Roadmap", "Risk Assessment", "Implementation Timeline"]
  },
  {
    icon: Building2,
    title: "Structure Solutions",
    description: "Robust, scalable AI solutions that build on the audit's foundation. Deliver targeted AI implementations, such as automation or analytics, to drive efficiency and ROI.",
    features: ["AI Implementation", "Process Automation", "Analytics Integration", "Performance Monitoring", "Team Training"]
  },
  {
    icon: Mountain,
    title: "Summit Transformation",
    description: "Reach the peak of business potential through enterprise-wide AI transformation. Scale AI across your organization or productize solutions for new revenue streams, ensuring lasting impact.",
    features: ["Enterprise AI Strategy", "Organization-wide Implementation", "Revenue Stream Development", "Change Management", "Long-term Support"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            AI Transformation Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI consulting solutions built on solid foundations. From assessment to enterprise transformation, 
            we guide your organization through every step of AI adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:-translate-y-1"
            >
              <div className="mb-6">
                {/* Icon and Title Row */}
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg mr-3 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300 flex-shrink-0">
                    <service.icon className="text-amber-700" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              </div>
              
              {/* Features - Hidden on mobile/tablet */}
              <div className="hidden lg:block space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg">
            Start Your AI Journey
          </a>
        </div>
      </div>
    </section>
  );
}
