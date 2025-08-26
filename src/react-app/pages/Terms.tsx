import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-serif text-slate-900 mb-6">Terms of Service</h1>
            <p className="text-slate-600 mb-8">Last updated: August 23, 2025</p>
            
            <p className="text-lg text-slate-700 mb-8">
              These Terms of Service ("Terms") govern your use of our website and consulting services operated by Cephas Tech Partners ("Company," "we," "us," or "our").
            </p>
            
            <p className="text-lg text-slate-700 mb-8">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Services</h2>
            <p className="text-slate-700 mb-6">
              Cephas Tech Partners provides strategic business consulting services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>Strategic Planning</li>
              <li>Organizational Development</li>
              <li>Performance Optimization</li>
              <li>Digital Transformation</li>
              <li>Operational Excellence</li>
              <li>Innovation Consulting</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Use of Website</h2>
            <p className="text-slate-700 mb-6">
              Our website is provided for informational purposes and to facilitate communication with potential clients. You may use our website for lawful purposes only.
            </p>
            <p className="text-slate-700 mb-8">
              You agree not to use our website to transmit any material that is defamatory, offensive, or otherwise objectionable, or to interfere with or disrupt the website's operation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Contact Form</h2>
            <p className="text-slate-700 mb-6">
              When you submit information through our contact form, you agree to provide accurate, current, and complete information. We will use this information to respond to your inquiry and provide our services.
            </p>
            <p className="text-slate-700 mb-8">
              By submitting the form, you consent to our collection and use of your information as described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Consulting Services</h2>
            <p className="text-slate-700 mb-6">
              Our consulting services are provided on a project basis with specific terms and conditions outlined in separate service agreements. These Terms do not constitute a service agreement.
            </p>
            <p className="text-slate-700 mb-8">
              All consulting engagements require a separate written agreement that will supersede these Terms with respect to the specific services provided.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Intellectual Property</h2>
            <p className="text-slate-700 mb-6">
              The content on our website, including text, graphics, logos, and software, is owned by Cephas Tech Partners and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-slate-700 mb-8">
              You may not reproduce, distribute, or create derivative works from our website content without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. Limitation of Liability</h2>
            <p className="text-slate-700 mb-6">
              To the maximum extent permitted by law, Cephas Tech Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.
            </p>
            <p className="text-slate-700 mb-8">
              Our total liability for any claims arising from these Terms or your use of our services shall not exceed the amount you paid us for the specific services in question.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">7. Disclaimer of Warranties</h2>
            <p className="text-slate-700 mb-6">
              Our website and services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
            </p>
            <p className="text-slate-700 mb-8">
              We do not warrant that our website will be uninterrupted, secure, or error-free, or that any defects will be corrected.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">8. Indemnification</h2>
            <p className="text-slate-700 mb-8">
              You agree to indemnify and hold harmless Cephas Tech Partners from any claims, damages, or expenses arising from your use of our website or services, or your violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">9. Governing Law</h2>
            <p className="text-slate-700 mb-8">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">10. Changes to Terms</h2>
            <p className="text-slate-700 mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page.
            </p>
            <p className="text-slate-700 mb-8">
              Your continued use of our website after any changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">11. Contact Information</h2>
            <p className="text-slate-700 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>By email: <a href="mailto:contact@cephas.tech" className="text-amber-600 hover:text-amber-700 underline">contact@cephas.tech</a></li>
              <li>By mail: Cephas Tech Partners, West Palm Beach, FL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
