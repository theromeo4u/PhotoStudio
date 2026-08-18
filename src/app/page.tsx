import React from 'react';
import { Download, Monitor, Smartphone, Apple, CheckCircle2, XCircle, Users, Image as ImageIcon, CreditCard, ChevronRight, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center font-bold text-2xl tracking-tighter text-blue-600">
              CamClone
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            The Ultimate Software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Professional Photographers</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Streamline your workflow with our all-in-one Customer Management, Billing, Order Management, and Online Photo Selection tools.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition">
              <Monitor className="w-5 h-5 mr-2" />
              Windows
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition">
              <Apple className="w-5 h-5 mr-2" />
              Apple Mac
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
              <Smartphone className="w-5 h-5 mr-2" />
              Android
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              <Apple className="w-5 h-5 mr-2" />
              iPhone
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to grow</h2>
            <p className="mt-4 text-lg text-gray-600">Powerful features designed specifically for modern photography businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ImageIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Photo Selection</h3>
              <p className="text-gray-600">Let your clients select their favorite photos online with ease. No more messy email threads or USB drives.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">CRM & Team Management</h3>
              <p className="text-gray-600">Manage your clients, leads, and team members all in one centralized dashboard.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Billing & Quotations</h3>
              <p className="text-gray-600">Create professional quotes, send invoices, and accept payments online securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Banner */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-white mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Increase Your Instagram Followers</h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              Boost your online presence automatically! When clients and guests download photos through our platform, our proven method encourages them to follow your Instagram profile. Turn creativity into a thriving audience.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition shadow-lg inline-flex items-center">
              Learn More <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-sm border border-white/30 text-center animate-pulse">
              <Instagram className="w-20 h-20 text-white mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-white">+10,000</div>
              <div className="text-white/80 font-medium">New Followers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Choose the plan that fits your photography business.</p>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-6 font-bold text-lg">Features</th>
                  <th className="p-6 font-bold text-lg text-center">Basic<br/><span className="text-2xl font-extrabold">$19/mo</span></th>
                  <th className="p-6 font-bold text-lg text-center">Pro<br/><span className="text-2xl font-extrabold">$49/mo</span></th>
                  <th className="p-6 font-bold text-lg text-center">Studio<br/><span className="text-2xl font-extrabold">$99/mo</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 pl-6 font-medium text-gray-700">Photo Selection</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 pl-6 font-medium text-gray-700">Storage</td>
                  <td className="p-4 text-center text-gray-600 font-semibold">50 GB</td>
                  <td className="p-4 text-center text-gray-600 font-semibold">250 GB</td>
                  <td className="p-4 text-center text-gray-600 font-semibold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-medium text-gray-700">CRM & Invoicing</td>
                  <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 pl-6 font-medium text-gray-700">Instagram Growth Tool</td>
                  <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center"><button className="w-full py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition">Get Basic</button></td>
                  <td className="p-4 text-center"><button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md">Get Pro</button></td>
                  <td className="p-4 text-center"><button className="w-full py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition">Get Studio</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-lg text-gray-600 mb-10">Have questions about our software or want to schedule a personalized demo? Our team is here to help you.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email us</h4>
                    <p className="text-gray-600">support@camclone.example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Call us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit us</h4>
                    <p className="text-gray-600">123 Photography Lane<br/>Creative City, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <form className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="John Doe" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="john@example.com" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} CamClone Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
