import { Shield, HandHeart, Lightbulb, Compass, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              About <span className="text-amber-500">Cephas</span>
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              “Cephas” comes from the Aramaic word for “rock.” Just like a rock provides foundation, structure and support, Cephas is your trusted partner through scale, complexity, and transformation.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We believe that lasting business transformation starts with solid foundations. Our team 
              combines decades of strategic consulting experience with innovative methodologies to help 
              organizations build sustainable competitive advantages.
            </p>
            
            
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-blue-600/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Core Values: <span className="text-amber-500">STONE</span></h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Strength</h4>
                    <p className="text-slate-300">Robust strategies for lasting success.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HandHeart className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Trust</h4>
                    <p className="text-slate-300">Your trusted partner with transparent guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Lightbulb className="text-emerald-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Optimism</h4>
                    <p className="text-slate-300">Unlocking your business's full potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Compass className="text-purple-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Navigation</h4>
                    <p className="text-slate-300">Clear roadmaps through complex challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
                    <p className="text-slate-300">Measurable, transformative results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
