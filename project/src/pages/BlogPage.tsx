import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to Solar Power for UK Homes in 2025',
      slug: 'complete-guide-solar-power-uk-homes-2025',
      excerpt: 'Solar power is no longer a futuristic dream — it\'s here, it\'s affordable, and it\'s transforming homes across the UK.',
      date: '2025-01-15',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      category: 'Solar Power'
    },
    {
      id: 2,
      title: 'Top 10 Energy-Saving Home Improvements Every Homeowner Should Know',
      slug: 'top-10-energy-saving-home-improvements',
      excerpt: 'Energy bills are higher than ever, but UK homeowners have powerful options. From insulation to renewable systems.',
      date: '2025-01-12',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
      category: 'Energy Efficiency'
    },
    {
      id: 3,
      title: 'Windows Buyer\'s Guide: Choosing the Best for Your Home',
      slug: 'windows-buyers-guide-choosing-best-home',
      excerpt: 'Windows are more than just glass — they affect comfort, efficiency, and style. Here\'s how to choose the right ones.',
      date: '2025-01-10',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      category: 'Windows'
    },
    {
      id: 4,
      title: 'The Future of Home Heating: Heat Pumps Explained',
      slug: 'future-home-heating-heat-pumps-explained',
      excerpt: 'Heating makes up over 60% of household energy use. Heat pumps are revolutionising how UK homes stay warm.',
      date: '2025-01-08',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg',
      category: 'Heat Pumps'
    },
    {
      id: 5,
      title: 'Driveway Ideas That Boost Property Value in the UK',
      slug: 'driveway-ideas-boost-property-value-uk',
      excerpt: 'A driveway does more than park your car — it boosts kerb appeal and adds long-term value.',
      date: '2025-01-05',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg',
      category: 'Driveways'
    },
    {
      id: 6,
      title: 'How to Insulate Your Home Properly: Costs, Benefits, and Mistakes to Avoid',
      slug: 'insulate-home-properly-costs-benefits-mistakes',
      excerpt: 'Insulation is one of the smartest home upgrades. Done right, it slashes bills — but poor jobs cause problems.',
      date: '2025-01-03',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
      category: 'Insulation'
    },
    {
      id: 7,
      title: 'Garden Rooms vs Conservatories: Which Adds More Value?',
      slug: 'garden-rooms-vs-conservatories-which-adds-value',
      excerpt: 'Homeowners love extra space — but should you choose a conservatory or garden room?',
      date: '2025-01-01',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/1396130/pexels-photo-1396130.jpeg',
      category: 'Extensions'
    },
    {
      id: 8,
      title: 'The Rise of Smart Homes: How to Future-Proof Your Property',
      slug: 'rise-smart-homes-future-proof-property',
      excerpt: 'Smart homes are no longer gadgets — they\'re a lifestyle upgrade that adds real value.',
      date: '2024-12-28',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      category: 'Smart Homes'
    },
    {
      id: 9,
      title: 'Roofline, Cladding, and Rendering: What\'s Best for Your Home Exterior?',
      slug: 'roofline-cladding-rendering-best-home-exterior',
      excerpt: 'First impressions count — and your exterior matters. Here\'s how to choose the right upgrade.',
      date: '2024-12-25',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      category: 'Exterior'
    },
    {
      id: 10,
      title: 'EvoHome\'s Complete Guide to Homeowner Protection in Renovations',
      slug: 'evohome-complete-guide-homeowner-protection-renovations',
      excerpt: 'Home improvements can be stressful. Rogue traders and hidden costs catch many homeowners out.',
      date: '2024-12-22',
      author: 'EvoHome Team',
      image: 'https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg',
      category: 'Home Improvements'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Improvement Blog - Expert Advice & Tips | EvoHome Improvements</title>
        <meta name="description" content="Expert advice on home improvements, renewable energy, and property upgrades. Tips, guides, and insights from EvoHome's specialists across Hampshire, Surrey, Sussex." />
        <meta name="keywords" content="home improvement blog, solar power guide, heat pump advice, window tips, roofing advice, Hampshire, Surrey, Sussex" />
        <link rel="canonical" href="https://evohomeimprovements.co.uk/blog" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "EvoHome Improvements Blog",
            "description": "Expert advice on home improvements, renewable energy, and property upgrades",
            "publisher": {
              "@type": "Organization",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Improvement Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert advice, tips, and insights to help you make the smartest home improvement decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#2B4C9B] text-white text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-[#2B4C9B] hover:text-[#1e3a7a] font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get expert advice and free quotes from vetted specialists in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-[#2B4C9B] text-white font-bold text-lg rounded-lg hover:bg-[#1e3a7a] transition-colors"
            > 
              Request Free Quote
            </Link>
            <a
              href="tel:03330040195"
              className="px-8 py-4 border-2 border-[#2B4C9B] text-[#2B4C9B] font-bold text-lg rounded-lg hover:bg-[#2B4C9B] hover:text-white transition-colors"
            >
              Call: 0333 004 0195
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;