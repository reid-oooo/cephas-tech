import { ArrowRight, Mountain, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
      {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" /> */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
            Built on 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400 block">
              Solid Foundations
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with strategic consulting services grounded in proven methodologies. 
            We help organizations build lasting success through expert guidance and innovative solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
            Get Strategic Consultation
            <ArrowRight size={20} />
          </a>
          <a href="#process" className="border border-slate-600 text-slate-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-200 inline-block text-center">
            View Our Process
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/30">
            <Mountain className="text-amber-500 mb-3" size={32} />
            <h2 className="text-slate-200 font-semibold text-lg mb-2">Rock-Solid Strategy</h2>
            <p className="text-slate-400 text-center">Built on proven frameworks and deep industry expertise</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/30">
            <TrendingUp className="text-blue-500 mb-3" size={32} />
            <h2 className="text-slate-200 font-semibold text-lg mb-2">Measurable Growth</h2>
            <p className="text-slate-400 text-center">Data-driven approaches that deliver quantifiable results</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/30">
            <Shield className="text-emerald-500 mb-3" size={32} />
            <h2 className="text-slate-200 font-semibold text-lg mb-2">Trusted Partnership</h2>
            <p className="text-slate-400 text-center">Long-term relationships built on trust and transparency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
