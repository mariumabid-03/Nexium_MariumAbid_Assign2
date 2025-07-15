'use client';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink, Sparkles, Globe, BookOpen, Zap, Link2, TrendingUp, Brain, Code, Lightbulb, Target, Users, Rocket, Star, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react';

// Enhanced mock data with more realistic content
const mockData = {
  'productivity-mastery': {
    content: "This blog explores the science of productivity, covering time-blocking techniques, habit formation, focus-building routines, and methods used by successful people to stay consistent and effective.",
    summary: "A practical guide to mastering productivity with proven techniques like time-blocking, habit loops, and goal setting to maximize focus and output.",
    urdu: "یہ گائیڈ وقت کی منصوبہ بندی، عادتیں بنانے، اور اہداف کے حصول کے آزمودہ طریقوں کے ذریعے پیداواریت کو بہتر بنانے کا عملی راستہ فراہم کرتی ہے۔"
  },
  'ai-future-workplace': {
    content: "This article looks ahead at how AI is rapidly transforming the workplace, from job roles to required skills, automation trends, and how employees and organizations must evolve to remain competitive.",
    summary: "Explores how AI is reshaping the future of work — automating tasks, redefining skills, and requiring adaptation from both individuals and companies.",
    urdu: "یہ مضمون بتاتا ہے کہ کس طرح AI کام کی دنیا کو بدل رہا ہے، ذمہ داریاں خودکار بنا رہا ہے، اور نئی مہارتوں کی ضرورت کو اجاگر کر رہا ہے۔"
  },
  'digital-wellness': {
    content: "A complete guide to digital wellness in 2025 — from managing screen time and device addiction to practicing digital detox, building healthier boundaries, and improving mental well-being in the tech era.",
    summary: "Covers effective digital wellness strategies like mindful device use, screen time balance, and mental well-being in a hyper-connected world.",
    urdu: "ڈیجیٹل دنیا میں ذہنی سکون کے لیے سکرین ٹائم کا توازن، صحت مند حدود، اور ٹیکنالوجی کے شعوری استعمال کی مکمل رہنمائی۔"
  },
  'startup-scaling': {
    content: "This guide outlines how startups can scale successfully by securing funding, building resilient teams, setting operational processes, and avoiding common growth pitfalls as they expand.",
    summary: "Essential strategies for startup growth: fundraising, team scaling, and expanding operations without compromising focus or sustainability.",
    urdu: "اس بلاگ میں فنڈنگ، ٹیم کی تشکیل، اور توسیع کے دوران عام غلطیوں سے بچنے کے اہم طریقے شامل ہیں۔"
  },
  'sustainable-innovation': {
    content: "An insightful blog highlighting companies that merge profitability with responsibility — adopting renewable tech, promoting circular economies, and making sustainability a core value.",
    summary: "Explores how businesses innovate sustainably by using green technologies, reducing waste, and aligning profit with environmental responsibility.",
    urdu: "یہ مضمون دکھاتا ہے کہ کس طرح کمپنیاں سبز ٹیکنالوجی اور ماحولیاتی ذمہ داری کے ذریعے پائیدار ترقی حاصل کرتی ہیں۔"
  },
  'remote-leadership': {
    content: "A detailed article about managing remote teams — including communication tools, cultural alignment, trust-building, and performance management across time zones.",
    summary: "Master the art of remote leadership with communication strategies, performance tips, and virtual team engagement techniques.",
    urdu: "ورچوئل ٹیموں کی قیادت کے لیے مؤثر ابلاغ، کارکردگی کا نظم، اور ثقافت کی ہم آہنگی کے طریقے سیکھیں۔"
  },
  'crypto-economics': {
    content: "This in-depth blog explores the economics behind crypto staking — including how it works, what incentivizes validators, and how staking shapes blockchain ecosystems.",
    summary: "A complete overview of crypto staking economics — covering validator incentives, token utility, and DeFi implications.",
    urdu: "کرپٹو اسٹیکنگ، ٹوکن انعامات، اور ڈی سینٹرلائزڈ فائنانس پر اس کے اثرات کی مکمل وضاحت۔"
  },
  'mindfulness-productivity': {
    content: "This blog combines productivity with mindfulness, showing how meditation, deep focus, and intentional breaks can boost clarity, reduce stress, and improve long-term results.",
    summary: "Blends mindfulness and productivity by integrating meditation, present-moment focus, and balance for better outcomes and less burnout.",
    urdu: "پیداواریت کو بہتر بنانے کے لیے ذہن سازی، مراقبہ، اور توازن پر مبنی حکمت عملیوں کا امتزاج پیش کیا گیا ہے۔"
  }
};

type SampleUrl = {
  name: string;
  url: string;
  icon: any;
  category: string;
  gradient: string;
};

const sampleUrls: SampleUrl[] = [
  {
    name: "Productivity Mastery Guide",
    url: "https://www.launchnotes.com/blog/the-ultimate-guide-to-mastering-productivity",
    icon: Target,
    category: "Productivity",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "AI & Future Workplace",
    url: "https://www.gcu.edu/blog/engineering-technology/future-ai-workplace",
    icon: Brain,
    category: "Technology",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Digital Wellness Guide",
    url: "https://healthonomix.com/digital-wellness-a-complete-guide-to-healthy-technology-use-in-2025/",
    icon: Star,
    category: "Wellness",
    gradient: "from-green-500 to-teal-500"
  },
  {
    name: "Startup Scaling Strategies",
    url: "https://www.mdinnovationcenter.com/scaling-strategies-for-growing-startups/",
    icon: Rocket,
    category: "Business",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Sustainable Innovation",
    url: "https://sustainableinnovation.fi/",
    icon: Lightbulb,
    category: "Innovation",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    name: "Remote Leadership",
    url: "https://www.staffconnect-app.com/blog-posts/remote-leadership-essentials-benefits-challenges-and-more",
    icon: Users,
    category: "Leadership",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Crypto Economics",
    url: "https://cryptecon.org/blog-en/items/the-economics-of-crypto-staking.html",
    icon: Code,
    category: "Finance",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    name: "Mindful Productivity",
    url: "https://leisurehacker.com/",
    icon: TrendingUp,
    category: "Mindfulness",
    gradient: "from-pink-500 to-rose-500"
  }
];


function simulateScrape(url: string): string {
  if (url.includes('launchnotes')) return mockData['productivity-mastery'].content;
  if (url.includes('gcu.edu')) return mockData['ai-future-workplace'].content;
  if (url.includes('healthonomix')) return mockData['digital-wellness'].content;
  if (url.includes('mdinnovationcenter')) return mockData['startup-scaling'].content;
  if (url.includes('sustainableinnovation')) return mockData['sustainable-innovation'].content;
  if (url.includes('staffconnect-app')) return mockData['remote-leadership'].content;
  if (url.includes('cryptecon')) return mockData['crypto-economics'].content;
  if (url.includes('leisurehacker')) return mockData['mindfulness-productivity'].content;

  return "This blog explores cutting-edge strategies...";
}

function simulateSummary(content: string): string {
  const entry = Object.entries(mockData).find(([_, val]) => val.content === content);
  return entry ? entry[1].summary : "Default summary if not matched.";
}

function translateToUrdu(summary: string): string {
  const entry = Object.entries(mockData).find(([_, val]) => val.summary === summary);
  return entry ? entry[1].urdu : "یہ بلاگ آج کے ڈیجیٹل دور...";
}

export default function Home() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [urduSummary, setUrduSummary] = useState('');
  const [fullBlog, setFullBlog] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'english' | 'urdu'>('english');
  const [animatedText, setAnimatedText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const phrases = [
    'Transform any blog into insights...',
    'AI-powered summarization...',
    'Multilingual content analysis...',
    'Instant comprehension...'
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setAnimatedText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      } else {
        setAnimatedText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(() => {}, 1000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeEffect);
  }, []);

  const handleSummarize = async () => {
    if (!url.trim()) return;
    setIsLoading(true);
    setShowSuccess(false);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const content = simulateScrape(url);
      setFullBlog(content);
      
      const englishSummary = simulateSummary(content);
      setSummary(englishSummary);
      
      const urduTranslation = translateToUrdu(englishSummary);
      setUrduSummary(urduTranslation);
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleSampleClick = (sampleUrl: string) => {
    setUrl(sampleUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-6000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white opacity-20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              BlogLens
            </h1>
          </div>
          <div className="h-16 mb-4">
            <p className="text-2xl text-gray-300 font-light">
              {animatedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Multilingual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Instant Results</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Link2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Enter Blog URL</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/amazing-blog-post"
                  className="h-14 text-lg bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-purple-500 rounded-2xl text-white placeholder-gray-300 shadow-lg"
                />
                <button 
                  onClick={() => url && window.open(url, '_blank')}
                  disabled={!url.trim()}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Open URL in new tab"
                >
                  <Globe className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
                </button>
              </div>
              <Button
                onClick={handleSummarize}
                disabled={!url.trim() || isLoading}
                className="h-14 px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50"
              >
                {isLoading ? (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Analyzing Magic...</span>
                    </div>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Summarize Now
                  </>
                )}
              </Button>
            </div>

            {/* Success Animation */}
            {showSuccess && (
              <div className="mb-6 flex items-center justify-center">
                <div className="flex items-center gap-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl px-6 py-3 animate-bounce">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-semibold">Successfully Summarized!</span>
                </div>
              </div>
            )}

            {/* Sample URLs */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Try These Featured Articles</h3>
                <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sampleUrls.map((sample, index) => {
                  const IconComponent = sample.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSampleClick(sample.url)}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${sample.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        <div className={`p-3 bg-gradient-to-r ${sample.gradient} rounded-xl mb-4 mx-auto w-fit`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {sample.name}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {sample.category}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Section */}
          {(summary || urduSummary) && (
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 animate-slideInUp hover:bg-white/15 hover:shadow-3xl hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl group-hover:animate-bounce">
                  <Sparkles className="w-6 h-6 text-white animate-pulse group-hover:animate-spin" />
                </div>
                <h2 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">AI-Generated Summary</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-green-500 to-transparent group-hover:from-purple-500 transition-all duration-500"></div>
              </div>

              {/* Language Tabs */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={() => setActiveTab('english')}
                  className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    activeTab === 'english'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  English Summary
                  {activeTab === 'english' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('urdu')}
                  className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    activeTab === 'urdu'
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-2xl transform scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  اردو خلاصہ
                  {activeTab === 'urdu' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </button>
              </div>

              {/* Summary Content */}
              <div className="space-y-8">
                {activeTab === 'english' && summary && (
                  <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 animate-fadeIn hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl group">
                    <div className="absolute top-4 right-4">
                      <Button
                        onClick={() => handleCopy(summary)}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 hover:border-blue-400/50 text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                      >
                        <Copy className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Copy
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-blue-400 group-hover:animate-bounce" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">English Summary</h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed text-lg font-light group-hover:text-white transition-colors duration-300">
                      {summary}
                    </p>
                  </div>
                )}

                {activeTab === 'urdu' && urduSummary && (
                  <div className="relative bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 animate-fadeIn hover:from-green-500/30 hover:to-teal-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl group">
                    <div className="absolute top-4 right-4">
                      <Button
                        onClick={() => handleCopy(urduSummary)}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 hover:border-green-400/50 text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                      >
                        <Copy className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Copy
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">اردو خلاصہ</h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed text-lg font-light text-right group-hover:text-white transition-colors duration-300" dir="rtl">
                      {urduSummary}
                    </p>
                  </div>
                )}

                {/* Original Content */}
                {fullBlog && (
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => window.open(url, '_blank')}
                          className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                          title="Open original content"
                        >
                          <ExternalLink className="w-6 h-6 text-gray-400 hover:text-blue-400 group-hover:animate-pulse transition-colors duration-300" />
                        </button>
                        <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">Original Content Preview</h3>
                      </div>
                      <Button
                        onClick={() => handleCopy(fullBlog)}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 hover:border-gray-400/50 text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                      >
                        <Copy className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Copy Full Text
                      </Button>
                    </div>
                    <p className="text-gray-300 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                      {fullBlog}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Lightning Fast</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>AI Powered</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

     <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}