import { Search, Lightbulb, Settings, Rocket, BarChart } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Assessment",
    description: "We begin with a comprehensive analysis of your current state, challenges, and opportunities to establish a clear foundation for transformation.",
    details: ["Stakeholder interviews", "Current state analysis", "Gap & opportunity identification", "Executive AI training"]
  },
  {
    icon: Lightbulb,
    number: "02", 
    title: "Strategy Development",
    description: "Our team collaborates with you to develop tailored strategies that align with your vision and leverage your unique strengths.",
    details: ["Strategic planning sessions", "Solution design", "Roadmap creation", "Risk assessment"]
  },
  {
    icon: Settings,
    number: "03",
    title: "Implementation Planning",
    description: "We create detailed implementation plans with clear timelines, milestones, and resource requirements for successful execution.",
    details: ["Project planning", "Resource allocation", "Timeline development", "Change management"]
  },
  {
    icon: Rocket,
    number: "04",
    title: "Execution Support",
    description: "Our experts provide hands-on guidance and support throughout the implementation phase to ensure smooth delivery and adoption.",
    details: ["Project management", "Training delivery", "Process optimization", "Issue resolution"]
  },
  {
    icon: BarChart,
    number: "05",
    title: "Measurement & Optimization",
    description: "We establish metrics to track progress and continuously optimize solutions to maximize impact and drive sustained improvement.",
    details: ["KPI tracking", "Performance analysis", "Continuous improvement", "Success documentation"]
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A structured approach refined through hundreds of successful engagements, 
            designed to deliver consistent results and lasting transformation.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number Circle */}
                <div className="relative z-10 mx-auto w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-lg shadow-lg group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300">
                  {step.number}
                </div>
                
                <div className="text-left">
                  {/* Icon and Title Row */}
                  <div className="flex items-center mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md mr-3 group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
                      <step.icon className="text-slate-700" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed text-left">{step.description}</p>
                  
                  {/* Bullet Points - Hidden on mobile/tablet */}
                  <div className="hidden lg:block bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-slate-600 text-left">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-left">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-serif text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven process can help you achieve your strategic objectives 
              and build lasting competitive advantages.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-xl">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
