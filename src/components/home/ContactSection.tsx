import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/navigation';
import { ContactFormData } from '../../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceCategory: 'Regulatory Partnership & CDSCO Support',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Please fill in your name, company, and email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@nirascientificsolutions.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.serviceCategory,
          message: formData.message.trim(),
          _subject: `New consultation request from ${formData.name.trim()}`,
          _replyto: formData.email.trim(),
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('The consultation request could not be sent.');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrorMsg('We could not send your request. Please email us directly at info@nirascientificsolutions.com.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Regulatory Dialogue"
          title="Schedule a Strategic Consultation"
          subtitle="Connect with our scientific & regulatory team to evaluate your homoeopathic product pathways"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Guidance Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 border-slate-200 bg-white space-y-6 shadow-md">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Direct Consultation</span>
                <h3 className="text-2xl font-extrabold text-slate-900">Partner With Nira</h3>
                <p className="text-sm text-slate-600 font-medium">
                  Whether you are planning a new product concept, preparing dossiers for CDSCO, or structuring clinical research protocols, our team is ready to assist.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Direct Inquiry Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-extrabold text-slate-900 hover:text-cyan-700 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Regulatory Helpdesk</span>
                    <span className="text-sm font-extrabold text-slate-900">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Regulatory Office</span>
                    <span className="text-sm text-slate-700 font-medium">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-800 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  All technical discussions, proprietary formulation ideas, and dossier disclosures are protected under non-disclosure confidentiality agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Request Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border-slate-200 bg-white shadow-md relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Consultation Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                    Thank you for reaching out to Nira Scientific Solutions. Our regulatory strategy team will review your inquiry and contact you shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceCategory: 'Regulatory Partnership & CDSCO Support',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-600" />
                      <span>Regulatory Assessment Request</span>
                    </h3>
                    <span className="text-xs text-slate-500">* Required fields</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Pharma / Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Homoeo Pharma Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@apexpharma.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceCategory" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Core Area of Interest
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none transition-colors font-medium"
                    >
                      <option value="Regulatory Partnership & CDSCO Support">1. Regulatory Partnership & CDSCO Support</option>
                      <option value="Scientific Partnership & Literature Dossiers">2. Scientific Partnership & Literature Dossiers</option>
                      <option value="Research & Clinical Research Partnership">3. Research & Clinical Research Partnership</option>
                      <option value="New Product Development & Regulatory Partnership">4. New Product Development & Regulatory Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Inquiry Details / Regulatory Objectives
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your product concept, dossier requirements, or regulatory timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-cyan-600 focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full !bg-[#0b1f3a] hover:!bg-[#163b68] !text-white !border-[#0b1f3a]"
                  >
                    {isSubmitting ? 'Transmitting Request...' : 'Submit Regulatory Consultation Request'}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
