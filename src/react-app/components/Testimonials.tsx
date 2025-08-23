import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, TechVision Inc.",
    content: "Cephas transformed our strategic approach completely. Their methodical process and deep expertise helped us identify new growth opportunities we never considered. The results speak for themselves - 40% revenue growth in just 18 months.",
    rating: 5,
    company: "Technology Startup"
  },
  {
    name: "Michael Rodriguez",
    title: "COO, Heritage Manufacturing",
    content: "Working with Cephas was like having a trusted advisor who truly understood our business. They didn't just provide recommendations - they worked alongside us to implement real, lasting change. Our operational efficiency improved by 35%.",
    rating: 5,
    company: "Manufacturing"
  },
  {
    name: "Emily Thompson",
    title: "Director of Operations, HealthCare Plus",
    content: "The team at Cephas brought fresh perspectives to challenges we'd been facing for years. Their structured approach and collaborative style made the entire transformation process smooth and successful. Highly recommended.",
    rating: 5,
    company: "Healthcare"
  },
  {
    name: "David Park",
    title: "Founder, GreenEarth Solutions",
    content: "Cephas helped us scale from a small startup to a regional leader. Their strategic guidance was instrumental in our growth, and their ongoing support continues to drive our success. True partners in every sense.",
    rating: 5,
    company: "Sustainability"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how organizations across industries have transformed their businesses 
            with our strategic consulting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="text-amber-500 mr-3" size={24} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-current" size={18} />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-slate-200 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400">{testimonial.title}</div>
                </div>
                <div className="text-amber-500 text-sm font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600/20 to-blue-600/20 rounded-2xl p-8 border border-slate-700/30 backdrop-blur-sm">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">98%</div>
                <div className="text-slate-300 text-sm">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">4.9/5</div>
                <div className="text-slate-300 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">150+</div>
                <div className="text-slate-300 text-sm">Projects Delivered</div>
              </div>
            </div>
            <p className="text-slate-300 text-lg">
              Join the growing list of successful organizations that trust Cephas for their strategic consulting needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
