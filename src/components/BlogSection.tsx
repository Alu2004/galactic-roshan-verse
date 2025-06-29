
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Transformation in Nepal",
      excerpt: "Exploring how emerging technologies are reshaping Nepal's digital landscape and creating new opportunities for innovation.",
      category: "Digital Innovation",
      date: "2024-01-15",
      readTime: "5 min read",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI-Powered Solutions for Social Impact",
      excerpt: "How artificial intelligence can be leveraged to address pressing social challenges and create meaningful change in communities.",
      category: "Technology & Society",
      date: "2024-01-10",
      readTime: "7 min read",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Building Scalable Web Applications",
      excerpt: "Best practices and architectural patterns for creating web applications that can handle growth and maintain performance.",
      category: "Web Development",
      date: "2024-01-05",
      readTime: "6 min read",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "The Rise of Blockchain in Governance",
      excerpt: "Examining how blockchain technology can enhance transparency and trust in governmental processes and public services.",
      category: "Blockchain",
      date: "2023-12-28",
      readTime: "8 min read",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Sustainable Tech: Green Computing Practices",
      excerpt: "Implementing environmentally conscious development practices and creating energy-efficient software solutions.",
      category: "Sustainability",
      date: "2023-12-20",
      readTime: "4 min read",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Remote Work Revolution in Tech",
      excerpt: "Analyzing the shift towards remote development teams and the tools and practices that make distributed work successful.",
      category: "Future of Work",
      date: "2023-12-15",
      readTime: "6 min read",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Digital Chronicles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-cyan-300 group-hover:text-cyan-100 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-cyan-100/80 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-cyan-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-cyan-300 hover:text-cyan-100 hover:bg-cyan-400/20 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
