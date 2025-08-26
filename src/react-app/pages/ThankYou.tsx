import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-600" size={48} />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
          Thank You!
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Your message has been sent successfully. We've received your inquiry and will get back to you within 24 hours during business days.
        </p>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What Happens Next?</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-amber-700 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Review Your Project</h3>
                <p className="text-slate-600 text-sm">Our team will carefully review your requirements and project details</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-amber-700 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Initial Consultation</h3>
                <p className="text-slate-600 text-sm">We'll schedule a call to discuss your project in detail</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-amber-700 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Custom Proposal</h3>
                <p className="text-slate-600 text-sm">Receive a tailored solution and implementation plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="text-amber-400" size={24} />
            <span className="text-lg font-semibold">Need Immediate Assistance?</span>
          </div>
          <p className="text-slate-300 mb-4">
            For urgent matters, feel free to reach out directly:
          </p>
          <a 
            href="mailto:contact@cephas.tech?subject=Urgent%20Inquiry"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Email Us Directly
          </a>
        </div>

        {/* Back to Home */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
