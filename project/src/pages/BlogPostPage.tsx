import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog post data - in a real app this would come from a CMS or API
  const blogPost = {
    title: 'The Complete Guide to Solar Power for UK Homes in 2025',
    content: `
      <p>Solar power is no longer a futuristic dream — it's here, it's affordable, and it's transforming homes across the UK. With rising energy bills and the push towards net zero, solar energy is now one of the smartest investments homeowners can make.</p>

      <h2>Why Solar Power Matters in the UK</h2>
      <p>Over the past decade, the cost of solar panels has dropped by more than 60%. At the same time, energy prices have soared, leaving homeowners vulnerable to unpredictable bills. Solar power offers independence, long-term savings, and a chance to reduce your carbon footprint.</p>

      <p>The UK government's continued push for renewable energy also makes solar a powerful tool in the country's sustainability plan. For households, it means one thing: a chance to future-proof your home and cut costs.</p>

      <h2>How Solar Power Works</h2>
      <p>Solar panels (photovoltaic or PV panels) absorb sunlight and convert it into electricity. Even on cloudy days, UK homes generate enough power to run essentials. Panels connect to an inverter that changes the DC electricity into AC, which powers your home. Excess energy can be stored in batteries or exported back to the grid.</p>

      <h2>Benefits of Solar Panels</h2>
      <ul>
        <li>Save on energy bills — homeowners can slash annual bills by 50% or more</li>
        <li>Earn with Smart Export Guarantee (SEG) — sell excess electricity to the grid</li>
        <li>Increase property value — buyers are increasingly drawn to energy-efficient homes</li>
        <li>Reduce carbon footprint — cut household emissions dramatically</li>
      </ul>

      <h2>Costs and Payback</h2>
      <p>The average UK solar system costs between £5,000 and £8,000. With savings and SEG payments, the payback time is typically 6–9 years, after which energy becomes nearly free.</p>

      <h2>Solar Batteries</h2>
      <p>Adding a solar battery extends the benefits. Instead of exporting excess power, you store it for evening use. Battery systems cost an extra £3,000–£6,000, but they maximize independence from the grid.</p>

      <h2>Is Solar Right for Your Home?</h2>
      <p>Solar works best if:</p>
      <ul>
        <li>Your roof faces south, east, or west</li>
        <li>You own your property</li>
        <li>Your roof has minimal shading</li>
      </ul>

      <h2>Why Work with EvoHome</h2>
      <p>EvoHome Improvements connects you with vetted solar installers, ensures fair pricing with multiple quotes, and provides homeowner protection. From design to installation, you're guided by experts who understand UK homes.</p>

      <h2>Final Word</h2>
      <p>2025 is the year to act. Solar is cheaper, smarter, and more accessible than ever before. By installing panels now, you lock in long-term savings and protect yourself from energy market volatility.</p>
    `,
    date: '2025-01-15',
    author: 'EvoHome Team',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
    category: 'Solar Power'
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.title} - EvoHome Improvements Blog</title>
        <meta name="description" content="Complete guide to solar power for UK homes in 2025. Learn about costs, benefits, and how to choose the right solar system for your property." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#10207d] to-[#004aad] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-200 hover:text-blue-100 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="flex items-center space-x-4 text-sm mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-GB')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{blogPost.author}</span>
            </div>
          </div>
          
          <span className="inline-block px-3 py-1 bg-white text-[#10207d] text-sm font-semibold rounded-full mb-4">
            {blogPost.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {blogPost.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl mb-8"
          />
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          
          {/* CTA Section */}
          <div className="mt-12 p-8 bg-[#10207d] text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to go solar?</h3>
            <p className="text-lg mb-6">
              Request your free quote from EvoHome today and start saving on your energy bills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-quote"
                className="px-6 py-3 bg-white text-[#10207d] font-bold rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:03330040195"
                className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#10207d] transition-colors text-center"
              >
                Call: 0333 004 0195
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Top 10 Energy-Saving Home Improvements',
                slug: 'top-10-energy-saving-home-improvements',
                image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg'
              },
              {
                title: 'The Future of Home Heating: Heat Pumps Explained',
                slug: 'future-home-heating-heat-pumps-explained',
                image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg'
              },
              {
                title: 'Windows Buyer\'s Guide: Choosing the Best for Your Home',
                slug: 'windows-buyers-guide-choosing-best-home',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
              }
            ].map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-[#10207d] transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;