import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, ArrowLeft, Share2, Bookmark, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Smart Home Automation",
    category: "Technology",
    date: "Feb 08, 2026",
    author: "Alex Rivers",
    readTime: "5 min read",
    description: "Explore how AI and IoT are converging to create truly intuitive living spaces that anticipate your every need.",
    fullContent: `
            <p>Smart home technology has evolved from simple remote-controlled lights to sophisticated systems that can learn and adapt to our lifestyles. Today, we stand on the brink of a new era: the era of the 'Thinking Home'.</p>
            <h3>The Integration of AI</h3>
            <p>Artificial Intelligence is the brain behind the modern smart home. It's no longer just about voice commands; it's about anticipation. Imagine a home that knows you're tired and dims the lights, starts your favorite relaxing playlist, and pre-heats the oven for dinner—all without you saying a word.</p>
            <h3>IoT and Connectivity</h3>
            <p>The Internet of Things (IoT) provides the nervous system. Sensors throughout the home monitor everything from air quality to energy usage, feeding data back to the central AI to optimize your environment for comfort and efficiency.</p>
            <h3>Security in the Digital Age</h3>
            <p>As our homes become more connected, security becomes paramount. Next-generation smart homes utilize blockchain and advanced encryption to ensure that your data—and your family—stay safe.</p>
        `,
    image: "https://miro.medium.com/v2/resize:fit:1358/0*_kB7259kS6wQLOax"
  },
  {
    id: 2,
    title: "sustainable Design: Green Tech in Modern Living",
    category: "Interior",
    date: "Feb 05, 2026",
    author: "Sarah Chen",
    readTime: "7 min read",
    description: "How eco-friendly automation can reduce your carbon footprint without compromising on luxury or comfort.",
    fullContent: `
            <p>Luxury and sustainability are no longer mutually exclusive. Modern smart homes are leading the charge in green technology, proving that you can live exceptionally well while caring for the planet.</p>
            <h3>Energy Optimization</h3>
            <p>Smart thermostats and automated shading systems work in harmony to maintain the perfect temperature with minimal energy waste. By tracking solar position and outdoor temperature, your home can naturally cool or heat itself.</p>
            <h3>Water Management</h3>
            <p>From smart irrigation that adjusts based on weather forecasts to leak detection systems that prevent thousands of gallons of waste, smart homes are revolutionizing how we handle our most precious resource.</p>
            <h3>Material Science</h3>
            <p>Integrating green tech often starts with the building blocks. We explore how sustainable materials paired with smart sensors create a healthier, more durable environment.</p>
        `,
    image: "https://www.thegreensideofpink.com/wp-content/uploads/2023/06/view-city-with-apartment-buildings-green-vegetation-1400x933.jpg"
  },
  {
    id: 3,
    title: "The Art of Architectural Lighting",
    category: "Design",
    date: "Feb 04, 2026",
    author: "Julian Vane",
    readTime: "4 min read",
    description: "Discover the psychological impact of scene-based lighting and how it transforms the ambiance of your premium spaces.",
    fullContent: `
            <p>Lighting is the unsung hero of interior design. It has the power to define spaces, influence moods, and even improve our health. In a smart home, lighting becomes an art form.</p>
            <h3>Circadian Rhythms</h3>
            <p>Human-centric lighting mimics the natural progression of sunlight throughout the day. This helps regulate our internal clocks, leading to better sleep and increased productivity during the day.</p>
            <h3>Scene-Based Lighting</h3>
            <p>With a single touch, transform your living room from a vibrant entertainment space to a cozy cinematic retreat. We delve into how defined 'scenes' create emotional anchors within the home.</p>
            <h3>Energy Efficient Elegance</h3>
            <p>LED technology, when paired with smart dimmers and occupancy sensors, allows for breathtaking lighting designs that use a fraction of the energy required by traditional systems.</p>
        `,
    image: "https://se.lighting/wp-content/uploads/2024/08/led_architectural_lighting.webp"
  },
  {
    id: 4,
    title: "Next-Gen Home Security Systems",
    category: "Security",
    date: "Feb 06, 2026",
    author: "Marcus Thorne",
    readTime: "6 min read",
    description: "Beyond cameras: biometric access, Al-powered perimeter detection, and the future of comprehensive home protection.",
    fullContent: `
            <p>Home security has moved far beyond the simple alarm system. Today's high-end security is proactive, intelligent, and seamlessly integrated into your lifestyle.</p>
            <h3>Biometric Access</h3>
            <p>Keys and codes are things of the past. Facial recognition and fingerprint scanners provide frictionless entry for residents while maintaining an ironclad perimeter.</p>
            <h3>AI Perimeter Detection</h3>
            <p>Smart cameras can now distinguish between a stray animal, a delivery person, and a potential intruder. This significantly reduces false alarms while ensuring that real threats are identified instantly.</p>
            <h3>Remote Monitoring and Control</h3>
            <p>No matter where you are in the world, your home is at your fingertips. Real-time alerts and live feeds give you peace of mind, knowing that your sanctuary is always protected.</p>
        `,
    image: "https://hometechnerves.com/wp-content/uploads/2024/10/DALL%C2%B7E-2024-10-15-13.19.18-A-horizontal-image-showcasing-the-best-home-security-system-for-your-home.-The-image-features-a-modern-house-with-top-tier-security-components-includ-1024x585.webp"
  },
  {
    id: 5,
    title: "Wellness & Tech: The Healthy Home",
    category: "Wellness",
    date: "Feb 07, 2026",
    author: "Emma Lowen",
    readTime: "5 min read",
    description: "Creating a sanctuary that actively monitors air quality, sleep patterns, and environmental stressors for a better life.",
    fullContent: `
            <p>Your home should be your greatest ally in maintaining your health. The 'Healthy Home' movement focuses on using technology to create environments that actively promote wellness.</p>
            <h3>Air and Water Filtration</h3>
            <p>Automated systems monitor and purify the air you breathe and the water you drink, ensuring that your home remains a toxin-free sanctuary.</p>
            <h3>Sleep Optimization</h3>
            <p>From silent HVAC systems that maintain the optimal sleeping temperature to beds that track your sleep stages and adjust accordingly, tech is the key to deep, restorative rest.</p>
            <h3>Stress Reduction</h3>
            <p>Integrated soundscapes, aromatherapy dispensers, and nature-inspired lighting scenes work together to lower cortisol levels and promote a sense of deep calm.</p>
        `,
    image: "https://img.freepik.com/premium-photo/innovative-health-wellness-tech_1276622-213.jpg"
  },
  {
    id: 6,
    title: "The High-Tech Garden: Smart Outdoor Living",
    category: "Outdoor",
    date: "Feb 09, 2026",
    author: "Leon Vance",
    readTime: "4 min read",
    description: "From automated irrigation to intelligent lighting and weatherproof entertainment, the future of luxury extends beyond the four walls.",
    fullContent: `
            <p>The boundaries between indoor comfort and outdoor serenity are blurring. Modern smart homes now extend their intelligence to the garden, creating seamless transitions for relaxation and entertainment.</p>
            <h3>Automated External Environments</h3>
            <p>Smart irrigation systems now use hyper-local weather data to ensure your landscape thrives with minimal water waste. These systems anticipate rainfall and adjust schedules accordingly, preserving both beauty and resources.</p>
            <h3>Weatherproof Entertainment</h3>
            <p>Imagine invisible audio systems embedded in rock formations and ultra-bright, anti-glare screens designed for direct sunlight. We explore the latest in durable, high-fidelity outdoor theater technology.</p>
            <h3>Intelligent Perimeter Lighting</h3>
            <p>Outdoor lighting is no longer just about visibility; it's about atmosphere and security. Synchronized scenes can transition from a warm dinner glow to a high-alert security mode instantly.</p>
        `,
    image: "https://bluestem.ca/wp-content/uploads/2025/03/smart-garden-tech.jpeg"
  }
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribeError('');

    // Basic validation for @ and .com as requested
    if (!email.includes('@') || !email.toLowerCase().endsWith('.com')) {
      setSubscribeError('Please enter a valid email address with @ and .com');
      return;
    }

    // Success state
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="listing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-16 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-medium tracking-tight"
                >
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Perspectives</span>
                </motion.h1>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                    onClick={() => setSelectedPost(post)}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  <ArrowLeft size={18} />
                </div>
                <span className="text-sm font-medium">Back to All Insights</span>
              </button>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Main Content */}
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 text-white text-sm font-medium mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{selectedPost.category}</span>
                      <span>{selectedPost.readTime}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8 leading-tight">
                      {selectedPost.title}
                    </h2>

                    <div className="flex items-center gap-6 pb-12 mb-12 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">
                          {selectedPost.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{selectedPost.author}</p>
                          <p className="text-xs text-gray-500">Author</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <Calendar size={16} />
                        <span>{selectedPost.date}</span>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12 aspect-[16/9] relative group">
                      <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div
                      className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-6"
                      dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
                    />
                  </motion.div>
                </div>

                {/* Sidebar: Other Posts */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h3 className="text-xl font-medium mb-8 flex items-center gap-2">
                      More from Insights
                      <ChevronRight className="text-white/40" size={20} />
                    </h3>
                    <div className="space-y-6">
                      {blogPosts
                        .filter(post => post.id !== selectedPost.id)
                        .map(post => (
                          <div
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="group flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all cursor-pointer"
                          >
                            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="space-y-2">
                              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">{post.category}</span>
                              <h4 className="text-sm font-medium leading-snug group-hover:text-white transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-[10px] text-gray-500">{post.date}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Newsletter / CTA */}
                  <div className="p-8 rounded-[2rem] bg-neutral-900/50 border border-white/10 relative overflow-hidden group transition-all duration-300 hover:border-white/20">
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <AnimatePresence mode="wait">
                      {!isSubscribed ? (
                        <motion.div
                          key="form"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          className="relative z-10"
                        >
                          <h3 className="text-xl font-medium mb-4">Stay Inspired</h3>
                          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Subscribe to our monthly newsletter for the latest trends in luxury home automation.
                          </p>
                          <form onSubmit={handleSubscribe}>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (subscribeError) setSubscribeError('');
                              }}
                              placeholder="your@email.com"
                              className={`w-full bg-black/40 border ${subscribeError ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-sm mb-2 focus:outline-none focus:border-white/40 transition-all`}
                            />
                            {subscribeError && (
                              <p className="text-[10px] text-red-400 mb-3 ml-1">{subscribeError}</p>
                            )}
                            <button
                              type="submit"
                              className="w-full py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer mt-2"
                            >
                              Subscribe
                            </button>
                          </form>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="relative z-10 text-center py-4"
                        >
                          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                            <span className="text-2xl">✨</span>
                          </div>
                          <h3 className="text-xl font-medium mb-2">Thank you subscribe!</h3>
                          <p className="text-sm text-gray-400">
                            You've been added to our exclusive list.
                          </p>
                          <button
                            onClick={() => setIsSubscribed(false)}
                            className="text-xs text-white/40 hover:text-white transition-colors mt-6 uppercase tracking-widest font-medium"
                          >
                            Dismiss
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const BlogCard = ({ post, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-500 cursor-pointer shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wide">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-2xl font-medium mb-4 group-hover:text-white transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-gray-400">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs text-gray-400 font-medium">{post.author}</span>
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-white/80 group/btn transition-all">
            Read More
            <div className="p-2 rounded-full bg-white/5 group-hover/btn:bg-white group-hover/btn:text-black transition-all">
              <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute -inset-1 bg-white/[0.02] blur-xl" />
      </div>
    </motion.div>
  );
};

export default Blog;