import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  Shield, 
  Users, 
  Award, 
  CheckCircle,
  Phone,
  Target,
  Eye,
  UserCheck,
  HeartHandshake,
  ShoppingCart,
  Star
} from 'lucide-react';

const AboutPage = () => {
  const whyEvoHome = [
    {
      icon: Eye,
      title: 'Vetted & Verified Professionals',
      description: 'We go far beyond online reviews. Every installer is fully vetted through insurance checks, qualification reviews, reference calls, and real-life project inspections.',
      image: 'https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg'
    },
    {
      icon: Target,
      title: 'Project Oversight',
      description: 'EvoHome isn\'t just a matchmaking service — we stay involved throughout your project. From quote to final walkthrough, our team provides guidance and tracks progress.',
      image: 'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg'
    },
    {
      icon: Users,
      title: 'Installer Support',
      description: 'We don\'t just vet our installers — we work with them daily. From business support to products, materials, and training, we help them operate at their best.',
      image: 'https://images.pexels.com/photos/5691655/pexels-photo-5691655.jpeg'
    },
    {
      icon: HeartHandshake,
      title: 'Impartial Expert Advice',
      description: 'Get honest, expert guidance without pressure or bias. We help you make informed decisions that are right for your home and budget.',
      image: 'https://images.pexels.com/photos/3737579/pexels-photo-3737579.jpeg'
    },
    {
      icon: ShoppingCart,
      title: 'Trusted Products & Solutions',
      description: 'We work with a network of proven product providers who meet strict standards for quality and performance. Only reliable, long-lasting solutions.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    {
      icon: UserCheck,
      title: 'Real Support, Not Just a Platform',
      description: 'EvoHome isn\'t an automated system. Our real team supports you with personal help before, during, and after your project.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    }
  ];

  const faqs = [
    {
      question: 'What is EvoHome Improvements?',
      answer: 'EvoHome Improvements Ltd is a trusted home improvement company serving Hampshire and surrounding areas. We connect homeowners with vetted specialists and provide complete project oversight with 100% homeowner protection.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive home improvement services including solar power, heat pumps, windows, insulation, roofing, driveways, kitchens, bathrooms, and property maintenance across Hampshire, Surrey, Sussex, Dorset, and Wiltshire.'
    },
    {
      question: 'How does EvoHome Improvements work?',
      answer: 'We provide free consultations, source competitive quotes from vetted professionals, manage your project from start to finish, and provide ongoing aftercare. You get expert guidance and complete protection throughout.'
    },
    {
      question: 'Is your advice really free?',
      answer: 'Yes, absolutely! Our initial consultations, expert advice, and quote comparisons are completely free with no obligation. We only succeed when you\'re happy with your project.'
    },
    {
      question: 'How do I get a quote?',
      answer: 'Simply fill out our quote form, call us on 0333 004 0195, or email office@evohomeimprovements.co.uk. We\'ll arrange a free consultation and provide competitive quotes from vetted specialists in your area.'
    },
    {
      question: 'Do I have to commit after getting a quote?',
      answer: 'No, there\'s no obligation whatsoever. Our quotes are free and you\'re under no pressure to proceed. We want you to make the right decision for your home and budget.'
    },
    {
      question: 'How do you vet your tradespeople?',
      answer: 'Every professional undergoes rigorous vetting including insurance checks, qualification reviews, reference calls, and real-life project inspections. All representatives are DBS (CRB) checked for your safety and peace of mind.'
    },
    {
      question: 'What if I have an issue with the work done?',
      answer: 'We provide 100% homeowner protection and stay involved throughout your project. If any issues arise, we handle resolution directly and ensure everything is put right. You\'re never left unsupported.'
    },
    {
      question: 'Do installations come with a warranty?',
      answer: 'Yes, all installations come with manufacturer warranties plus our workmanship guarantees. We provide comprehensive aftercare support throughout the warranty period and beyond.'
    },
    {
      question: 'Do you cover my area?',
      answer: 'We provide free home consultations across Hampshire, Surrey, Sussex, Dorset, and Wiltshire. We also offer remote consultations nationwide. Call us on 0333 004 0195 to discuss your specific location.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About EvoHome Improvements - The Smarter Way to Improve Your Home</title>
        <meta name="description" content="Learn about EvoHome Improvements Ltd. 30+ years experience connecting homeowners with vetted specialists across Hampshire and surrounding areas." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About EvoHome Improvements
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              We're redefining the home improvement experience for UK homeowners. Built on over 30 years of industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
                About EvoHome Improvements
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  About EvoHome, we're redefining the home improvement experience for UK homeowners. Built on over 30 years of industry expertise, our platform was created to solve common challenges faced by homeowners, tradespeople, and product providers alike.
                </p>
                <p>
                  We put homeowners at the heart of everything—offering clear advice, vetted tradespeople, and trusted product options. Whether it's a simple upgrade or a large-scale renovation, we help make every project smooth, efficient, and stress-free.
                </p>
                <p>
                  By working with reliable local installers and companies—we ensure quality at every level. EvoHome is more than a service; It's quite simply.
                </p>
                <div className="text-center py-8">
                  <p className="text-3xl font-bold text-[#2B4C9B] italic">
                    "The Smarter Way to Improve Your Home"
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="tel:03330040195"
                    className="text-4xl font-bold text-[#2B4C9B] hover:text-[#1e3a7a] transition-colors"
                  >
                    0333 004 0195
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="Professional home improvement consultation"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B4C9B]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Director */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-8 text-center">
              A Message from the Director
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900">Dear Homeowner,</p>
              
              <p>Let's face it — the home improvement industry is broken in too many places.</p>
              
              <p>
                The platforms that claim to "check" trades are failing. They've turned into auction sites, selling your job to the highest bidder without any real accountability. The result? Falling standards, frustrated homeowners, and too many people left out of pocket or disappointed with the work.
              </p>
              
              <p><strong>EvoHome Improvements was created to change that.</strong></p>
              
              <p>
                We're not just another listing site — we're here to raise the standard across the UK by supporting quality installers and giving homeowners a smarter way to improve their homes. Our approach is built on trust, not transactions. We carefully vet every professional, offer real customer support, and give you clear, impartial advice so you can make confident decisions.
              </p>
              
              <p>
                It's about matching the right person to the right project — and finding innovative ways to cut waste, save time, and unlock better value by securing exclusive deals with leading brands. That way, you don't just get any product — you get the best, without paying over the odds.
              </p>
              
              <p>
                EvoHome exists to protect homeowners, support skilled tradespeople, and restore pride to an industry that desperately needs it.
              </p>
              
              <p>
                Thank you for considering us. If you're planning a project, we're here to make it easier, safer, and better from start to finish.
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="font-bold text-gray-900">Sincerely,</p>
                <p className="text-2xl font-bold text-[#2B4C9B]">William Bowry</p>
                <p className="text-gray-600 italic">Founder & Director, EvoHome Improvements Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EvoHome */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
              Why is EvoHome – The Smarter way to improve your property?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>Choosing the right installer shouldn't feel like a gamble.</strong> Let's look at how EvoHome takes the risk out of home improvements. No directories, no spam — just real, reliable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyEvoHome.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#2B4C9B] text-white rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighbourhood Scam Check */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5691656/pexels-photo-5691656.jpeg"
                alt="Neighbourhood scam protection"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#2B4C9B]">Neighbourhood Scam Check</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Worried about cold calls or doorstep pitches?</strong> Send us the details. We'll verify whether the company, product, or service is legitimate — and if the information you're being told is accurate.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With EvoHome, you don't have to guess. We help protect homeowners from scams, misinformation, and high-pressure sales tactics.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:03330040195"
                  className="flex items-center space-x-2 px-6 py-3 bg-[#2B4C9B] text-white font-bold rounded-lg hover:bg-[#1e3a7a] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Report Suspicious Activity: 0333 004 0195</span>
                </a>
                <a
                  href="mailto:office@evohomeimprovements.co.uk"
                  className="flex items-center space-x-2 px-6 py-3 border-2 border-[#2B4C9B] text-[#2B4C9B] font-bold rounded-lg hover:bg-[#2B4C9B] hover:text-white transition-colors"
                >
                  <span>Email: office@evohomeimprovements.co.uk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRB-Checked Representatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#2B4C9B]">CRB-Checked Representatives</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Safety matters — especially when letting someone into your home. That's why all EvoHome representatives are CRB-checked, ensuring a trustworthy and professional experience at every consultation or visit.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                You can rest easy knowing that the people you're dealing with meet the highest standards of integrity and accountability.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg"
                alt="CRB checked professionals"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary className="w-full px-6 py-4 text-left font-semibold text-[#2B4C9B] hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer">
                  <span>{faq.question}</span>
                  <span className="text-2xl">+</span>
                </summary>
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If your question isn't answered here, please feel free to <strong>Call Us</strong> on <a href="tel:03330040195" className="text-[#2B4C9B] font-bold hover:underline">0333 004 0195</a> or <Link to="/contact" className="text-[#2B4C9B] font-bold hover:underline">Contact Us</Link>
            </p>
            
            <div className="bg-[#2B4C9B] text-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Prefer to email?</h3>
              <a
                href="mailto:office@evohomeimprovements.co.uk"
                className="text-2xl font-bold hover:text-blue-200 transition-colors"
              >
                office@evohomeimprovements.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2B4C9B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Experience the EvoHome difference. Get expert advice, competitive quotes, and complete peace of mind for your home improvement project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            > 
              Request Free Quote
            </Link>
            <a
              href="tel:03330040195"
              className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#2B4C9B] transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>0333 004 0195</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;