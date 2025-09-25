import { CheckCircle, ArrowRight, TrendingUp, Shield, Building2, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const caseStudies = [
  {
    title: "AI-Powered Driver Safety & Platform Savings",
    client: "PE-backed Fleet Mobility Platform",
    challenge: "Needed to reduce safety incidents, lower insurance premiums, and eliminate vendor dependencies.",
    solution: "Built and deployed an AI-driven driver behavior analytics platform, replacing a 3rd-party tool.",
    image: "/images/fleet-safety-case-study.png",
    icon: Shield,
    results: [
      "30%+ reduction in safety-related incidents",
      "$3M+ in annualized vendor savings",
      "Full control of IP and future enhancements",
      "Streamlined compliance and insurance reporting"
    ],
    category: "Fleet Management"
  },
  {
    title: "SaaS 3PL Platform Powers $5M+ ARR",
    client: "Early-Stage Logistics Startup",
    challenge: "Needed a scalable platform to support fulfillment and enterprise integrations.",
    solution: "Designed and launched a modular 3PL SaaS platform with Shopify/Amazon integrations.",
    image: "/images/logistics-saas-case-study.png",
    icon: Building2,
    results: [
      "Enabled rapid GTM and product-market fit",
      "Secured $5M+ in ARR and a Walmart.com contract",
      "Delivered core product within 6 months"
    ],
    category: "Logistics SaaS"
  },
  {
    title: "AI Sales Chatbot Drives Funnel Automation",
    client: "Product-Led SaaS Business",
    challenge: "SDR team overwhelmed by inbound leads and scheduling tasks.",
    solution: "Built an AI chatbot that qualified leads, booked demos, and synced with HubSpot.",
    image: "/images/ai-sales-case-study.png",
    icon: TrendingUp,
    results: [
      "50% reduction in SDR manual outreach",
      "Improved lead-to-demo conversion rate",
      "24/7 global engagement and faster sales cycle"
    ],
    category: "Sales Automation"
  },
  {
    title: "Global Clearance AI Modernization",
    client: "Global Enterprise",
    challenge: "Manual product import classification slowed operations.",
    solution: "Led rollout of AI/ML-powered customs classification engine across global network.",
    image: "/images/ai-case-study.png",
    icon: Truck,
    results: [
      "50%+ reduction in clearance overhead",
      "Predictive clearance & regulatory automation",
      "Classification engine reuse in 180+ countries"
    ],
    category: "Enterprise AI"
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null)
 const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum distance for swipe
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how Cephas has transformed businesses across industries 
            through strategic AI implementation and platform development.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Case Study Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-amber-400 text-sm font-medium">{study.category}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <study.icon className="text-amber-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{study.title}</div>
                    <div className="text-slate-300 text-sm">{study.client}</div>
                  </div>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-amber-400 mb-2">Challenge</h4>
                  <p className="text-slate-300 leading-relaxed mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution</h4>
                  <p className="text-slate-300 leading-relaxed mb-6">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">Impact</h4>
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative mb-12">
          <div 
            className="overflow-hidden rounded-xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/30 overflow-hidden group mx-2">
                    {/* Case Study Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-amber-400 text-sm font-medium">{study.category}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <study.icon className="text-amber-400" size={20} />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg">{study.title}</div>
                          <div className="text-slate-300 text-sm">{study.client}</div>
                        </div>
                      </div>
                    </div>

                    {/* Case Study Content */}
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-amber-400 mb-2">Challenge</h4>
                        <p className="text-slate-300 leading-relaxed mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution</h4>
                        <p className="text-slate-300 leading-relaxed mb-6">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-4">Impact</h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-slate-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full shadow-lg transition-all duration-200"
            aria-label="Previous case study"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full shadow-lg transition-all duration-200"
            aria-label="Next case study"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-amber-500' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600/20 to-blue-600/20 rounded-2xl p-8 border border-slate-700/30 backdrop-blur-sm">
            <p className="text-slate-300 text-lg mb-6">
              Ready to write your own success story? Let's discuss how Cephas can transform your business.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 mx-auto">
              Start Your Transformation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
