import React from 'react';
import { Download, Monitor, Smartphone, Apple, CheckCircle2, XCircle, Users, Image as ImageIcon, CreditCard, ChevronRight, Camera, Mail, Phone, MapPin, ScanFace, BookOpen, Clock, QrCode } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center font-bold text-2xl tracking-tighter text-blue-500">
              CamClone
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 font-medium">Home</a>
              <a href="#features" className="text-gray-300 hover:text-blue-400 font-medium">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 font-medium">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            The Ultimate Software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Professional Photographers</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Streamline your workflow with our all-in-one Customer Management, Billing, Order Management, and Online Photo Selection tools.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition border border-gray-700">
              <Monitor className="w-5 h-5 mr-2" />
              Windows
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition border border-gray-700">
              <Apple className="w-5 h-5 mr-2" />
              Apple Mac
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-500 transition">
              <Smartphone className="w-5 h-5 mr-2" />
              Android
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition">
              <Apple className="w-5 h-5 mr-2" />
              iPhone
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to grow</h2>
            <p className="mt-4 text-lg text-gray-400">Powerful features designed specifically for modern photography businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-blue-900/10 transition">
              <div className="w-14 h-14 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-800/30">
                <ImageIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Smart Photo Selection</h3>
              <p className="text-gray-400">Easy selection interface with zooming, rotating, and downloading. Categorize photos with Important, Selected, and Remove marks securely via Album ID password.</p>
            </div>
            
            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/10 transition">
              <div className="w-14 h-14 bg-indigo-900/30 text-indigo-400 rounded-xl flex items-center justify-center mb-6 border border-indigo-800/30">
                <ScanFace className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Face Recognition</h3>
              <p className="text-gray-400">Automatically organize and sort photos by recognizing faces, allowing clients to instantly find pictures of themselves and their families.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-pink-900/10 transition">
              <div className="w-14 h-14 bg-pink-900/30 text-pink-400 rounded-xl flex items-center justify-center mb-6 border border-pink-800/30">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">E-Album Flipbook</h3>
              <p className="text-gray-400">Deliver stunning digital albums with realistic flipbook animations. Your clients can share these easily via view-only links without unauthorized downloads.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-purple-900/10 transition">
              <div className="w-14 h-14 bg-purple-900/30 text-purple-400 rounded-xl flex items-center justify-center mb-6 border border-purple-800/30">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Customer Management</h3>
              <p className="text-gray-400">Manage customers and their payments directly. Say goodbye to messy notebooks and keep all customer data safe and accessible everywhere.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-teal-900/10 transition">
              <div className="w-14 h-14 bg-teal-900/30 text-teal-400 rounded-xl flex items-center justify-center mb-6 border border-teal-800/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Order Management</h3>
              <p className="text-gray-400">Track and manage every order for all your customers seamlessly across our mobile application and desktop software.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-yellow-900/10 transition">
              <div className="w-14 h-14 bg-yellow-900/30 text-yellow-400 rounded-xl flex items-center justify-center mb-6 border border-yellow-800/30">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Make Extra Income</h3>
              <p className="text-gray-400">Offer paid photo downloads to customers directly during photo selection. Easily transfer bulk downloaded photo amounts right to your bank account.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/10 transition">
              <div className="w-14 h-14 bg-cyan-900/30 text-cyan-400 rounded-xl flex items-center justify-center mb-6 border border-cyan-800/30">
                <Download className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Raw Photo Support</h3>
              <p className="text-gray-400">Full support for Raw photos alongside high-quality exports. Easily get the original selected photos back for final editing.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-green-900/10 transition">
              <div className="w-14 h-14 bg-green-900/30 text-green-400 rounded-xl flex items-center justify-center mb-6 border border-green-800/30">
                <QrCode className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">My Pay QR</h3>
              <p className="text-gray-400">Send fixed-amount UPI QR codes to your clients. Prevent short payments; clients scan and pay exactly the invoiced amount.</p>
            </div>

            <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-orange-900/10 transition">
              <div className="w-14 h-14 bg-orange-900/30 text-orange-400 rounded-xl flex items-center justify-center mb-6 border border-orange-800/30">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Automated Reminders</h3>
              <p className="text-gray-400">Reduce 6-month wait times. Our system automatically reminds customers daily to complete their photo selection, accelerating your workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Banner */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-white mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Increase Your Instagram Followers</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
              Boost your online presence automatically! When clients and guests download photos through our platform, our proven method encourages them to follow your Instagram profile. Turn creativity into a thriving audience.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition shadow-lg inline-flex items-center">
              Learn More <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-gray-900/50 p-6 rounded-3xl backdrop-blur-md border border-gray-700 text-center animate-pulse shadow-2xl">
              <Camera className="w-20 h-20 text-white mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-white">+10,000</div>
              <div className="text-gray-300 font-medium">New Followers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-400">Choose the plan that fits your photography business.</p>
          </div>
          
          <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[800px] bg-gray-900 rounded-2xl shadow-sm border border-gray-800 overflow-hidden text-left">
              <thead>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th className="p-6 font-bold text-lg text-white">Features</th>
                  <th className="p-6 font-bold text-lg text-center text-white">Basic<br/><span className="text-2xl font-extrabold text-blue-400">$19/mo</span></th>
                  <th className="p-6 font-bold text-lg text-center text-white">Pro<br/><span className="text-2xl font-extrabold text-blue-400">$49/mo</span></th>
                  <th className="p-6 font-bold text-lg text-center text-white">Studio<br/><span className="text-2xl font-extrabold text-blue-400">$99/mo</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-4 pl-6 font-medium text-gray-300">Photo Selection</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="p-4 pl-6 font-medium text-gray-300">Storage</td>
                  <td className="p-4 text-center text-gray-400 font-semibold">50 GB</td>
                  <td className="p-4 text-center text-gray-400 font-semibold">250 GB</td>
                  <td className="p-4 text-center text-gray-400 font-semibold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-medium text-gray-300">CRM & Invoicing</td>
                  <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="p-4 pl-6 font-medium text-gray-300">Instagram Growth Tool</td>
                  <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center"><button className="w-full py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition">Get Basic</button></td>
                  <td className="p-4 text-center"><button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition shadow-md">Get Pro</button></td>
                  <td className="p-4 text-center"><button className="w-full py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-white transition">Get Studio</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-950 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in touch</h2>
              <p className="text-lg text-gray-400 mb-10">Have questions about our software or want to schedule a personalized demo? Our team is here to help you.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Email us</h4>
                    <p className="text-gray-400">support@camclone.example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Call us</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Visit us</h4>
                    <p className="text-gray-400">123 Photography Lane<br/>Creative City, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <form className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-sm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-600" placeholder="John Doe" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-600" placeholder="john@example.com" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-600" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-gray-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} CamClone Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
