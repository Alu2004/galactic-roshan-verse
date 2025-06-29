import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 'business-website-2024',
      title: "Why Your Business Needs a Website in 2024",
      excerpt: "In today's digital age, having a website isn't just an option—it's essential. Discover how a professional website can transform your business and reach customers you never thought possible.",
      category: "Business Growth",
      date: "2024-01-20",
      readTime: "3 min read",
      gradient: "from-cyan-500 to-blue-600",
      featured: true
    },
    {
      id: 'website-speed-optimization',
      title: "5 Simple Steps to Make Your Website Lightning Fast",
      excerpt: "Slow websites lose customers. Learn the easy tricks that even non-tech people can understand to make your website load faster and keep visitors happy.",
      category: "Web Performance",
      date: "2024-01-18",
      readTime: "4 min read",
      gradient: "from-purple-500 to-[#131024]",
      featured: true
    },
    {
      id: 'ai-small-business',
      title: "AI is Here: How Small Businesses Can Use It Today",
      excerpt: "Artificial Intelligence isn't just for big tech companies. Discover simple, affordable AI tools that can help your small business save time and make more money.",
      category: "Artificial Intelligence",
      date: "2024-01-15",
      readTime: "5 min read",
      gradient: "from-blue-500 to-[#131024]",
      featured: false
    },
    {
      id: 'mobile-first-design',
      title: "Mobile First: Why Your Website Must Work on Phones",
      excerpt: "More people use phones than computers to browse the internet. Learn why mobile-friendly websites are crucial and how to check if yours makes the cut.",
      category: "Mobile Design",
      date: "2024-01-12",
      readTime: "3 min read",
      gradient: "from-green-500 to-[#131024]",
      featured: false
    },
    {
      id: 'remote-teams-tools',
      title: "The Future of Work: Remote Teams and Digital Tools",
      excerpt: "Working from anywhere is becoming normal. Explore the tools and strategies that help teams stay productive and connected, no matter where they are.",
      category: "Future of Work",
      date: "2024-01-10",
      readTime: "6 min read",
      gradient: "from-cyan-500 to-yellow-600",
      featured: false
    },
    {
      id: 'cybersecurity-basics',
      title: "Cybersecurity Made Simple: Protect Your Digital Life",
      excerpt: "You don't need to be a tech expert to stay safe online. Learn the basic security steps that protect your business and personal information from hackers.",
      category: "Cybersecurity",
      date: "2024-01-08",
      readTime: "4 min read",
      gradient: "from-red-500 to-[#131024]",
      featured: false
    },
    {
      id: 'ecommerce-success',
      title: "E-commerce Success: Selling Online Without the Headache",
      excerpt: "Starting an online store can feel overwhelming. Break down the process into manageable steps and learn what really matters for e-commerce success.",
      category: "E-commerce",
      date: "2024-01-05",
      readTime: "5 min read",
      gradient: "from-indigo-500 to-[#131024]",
      featured: false
    },
    {
      id: 'digital-marketing-guide',
      title: "Digital Marketing That Actually Works for Small Business",
      excerpt: "Skip the expensive marketing courses. Learn the proven digital marketing strategies that small businesses use to attract customers without breaking the bank.",
      category: "Digital Marketing",
      date: "2024-01-03",
      readTime: "7 min read",
      gradient: "from-pink-500 to-[#131024]",
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleBlogClick = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-black to-[#131024]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            DIGITAL CHRONICLES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Journey through the galaxy of technology, business insights, and digital transformation. 
            Simple guides for complex topics, written for humans, not robots.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="bg-gradient-to-br from-[#131024] to-black border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 group cursor-pointer relative overflow-hidden h-full"
                onClick={() => handleBlogClick(post.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-cyan-400 group-hover:text-cyan-300 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full justify-between bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Latest Insights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="bg-gradient-to-br from-[#131024] to-black border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer relative overflow-hidden"
                onClick={() => handleBlogClick(post.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20 group/btn"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#131024] to-black border border-cyan-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Want to Stay Updated?</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on technology, business growth, and digital transformation delivered straight to your inbox.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
