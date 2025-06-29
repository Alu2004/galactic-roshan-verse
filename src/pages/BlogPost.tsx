
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import StarfieldBackground from '@/components/StarfieldBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = {
    'business-website-2024': {
      title: "Why Your Business Needs a Website in 2024",
      category: "Business Growth",
      date: "2024-01-20",
      readTime: "3 min read",
      content: `
        <h2>The Digital Revolution is Here</h2>
        <p>In today's hyper-connected world, your business exists online whether you want it to or not. Customers are already talking about you on social media, searching for your services on Google, and expecting to find you with a simple web search.</p>
        
        <h3>Why Every Business Needs a Website</h3>
        <p>A website serves as your digital storefront, open 24/7 to potential customers. It's often the first impression people have of your business, and in many cases, it determines whether they choose you over your competitors.</p>
        
        <h3>Key Benefits of Having a Website</h3>
        <ul>
          <li><strong>Credibility:</strong> A professional website instantly makes your business look legitimate and trustworthy.</li>
          <li><strong>Accessibility:</strong> Customers can find information about your services anytime, anywhere.</li>
          <li><strong>Cost-effective marketing:</strong> Digital marketing through your website is often cheaper than traditional advertising.</li>
          <li><strong>Customer insights:</strong> Website analytics provide valuable data about your customers' behavior and preferences.</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>You don't need to be a tech expert to get online. Start with a simple, clean design that clearly communicates what you do and how customers can reach you. Focus on mobile-friendly design since most people browse on their phones.</p>
        
        <p>Remember, your website is an investment in your business's future. In 2024, it's not just nice to have—it's essential for survival and growth.</p>
      `
    },
    'website-speed-optimization': {
      title: "5 Simple Steps to Make Your Website Lightning Fast",
      category: "Web Performance",
      date: "2024-01-18",
      readTime: "4 min read",
      content: `
        <h2>Speed Matters More Than You Think</h2>
        <p>Did you know that 40% of people abandon a website that takes more than 3 seconds to load? Website speed directly impacts your bottom line—faster sites get more visitors, higher engagement, and better search engine rankings.</p>
        
        <h3>Step 1: Optimize Your Images</h3>
        <p>Large, unoptimized images are the #1 cause of slow websites. Before uploading any image:</p>
        <ul>
          <li>Resize images to the exact dimensions needed</li>
          <li>Use modern formats like WebP when possible</li>
          <li>Compress images without losing quality using tools like TinyPNG</li>
        </ul>
        
        <h3>Step 2: Choose a Fast Web Host</h3>
        <p>Your hosting provider makes a huge difference. Look for hosts that offer:</p>
        <ul>
          <li>SSD storage instead of traditional hard drives</li>
          <li>Content Delivery Networks (CDN)</li>
          <li>Server locations close to your audience</li>
        </ul>
        
        <h3>Step 3: Enable Caching</h3>
        <p>Caching stores copies of your website's files so they load faster for returning visitors. Most website platforms offer caching plugins that you can enable with just a few clicks.</p>
        
        <h3>Step 4: Minimize HTTP Requests</h3>
        <p>Every element on your page (images, scripts, stylesheets) requires a separate request to your server. Reduce these by:</p>
        <ul>
          <li>Combining CSS and JavaScript files</li>
          <li>Using CSS sprites for small images</li>
          <li>Removing unnecessary plugins and widgets</li>
        </ul>
        
        <h3>Step 5: Test and Monitor</h3>
        <p>Use free tools like Google PageSpeed Insights or GTmetrix to regularly test your website speed. These tools also provide specific recommendations for improvement.</p>
        
        <p>Remember, website optimization is an ongoing process. Small improvements add up to significant performance gains over time.</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-[#131024] to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-cyan-500 to-blue-500">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#131024] to-black text-white overflow-x-hidden">
      <StarfieldBackground />
      <Navigation isDarkMode={true} toggleTheme={() => {}} />
      
      <main className="relative z-10 pt-24">
        <div className="container mx-auto max-w-4xl px-6">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <article className="bg-gradient-to-br from-[#131024] to-black border border-cyan-400/30 rounded-2xl p-8 md:p-12">
            <header className="mb-8">
              <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 mb-4">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Roshan Khanal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>
            
            <div 
              className="prose prose-invert max-w-none prose-headings:text-cyan-400 prose-a:text-cyan-400 prose-strong:text-cyan-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
