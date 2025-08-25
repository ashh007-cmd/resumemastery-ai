import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BrainIcon, 
  TrendingUpIcon, 
  FileTextIcon, 
  MapIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-glow/5 to-accent/5">
      {/* Header */}
      <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <BrainIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">AI Career Compass</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition-smooth">Features</a>
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-smooth">How it Works</a>
            <a href="#benefits" className="text-foreground/70 hover:text-foreground transition-smooth">Benefits</a>
          </nav>
          <Button variant="outline" className="hidden md:flex">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            ✨ AI-Powered Career Guidance
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
            Find your path.{" "}
            <span className="gradient-text">Build your skills.</span>{" "}
            Shape your future.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Upload your resume, get AI-powered feedback, and receive personalized career roadmaps 
            that guide you toward your dream job.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button className="hero-button group">
              Get Started Free
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-4 rounded-xl font-semibold text-lg border-2 hover:scale-105 transition-smooth">
              Watch Demo
            </Button>
          </div>
          
          <p className="text-sm text-foreground/50 mt-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            No credit card required • Get results in minutes
          </p>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gradient-to-r from-white/50 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful AI Features for Your <span className="gradient-text">Career Growth</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our AI analyzes thousands of successful career paths to give you personalized, 
              actionable insights for your professional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resume Analysis */}
            <Card className="p-8 glass-card hover:scale-105 transition-spring group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:animate-glow">
                <FileTextIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Resume Analysis</h3>
              <p className="text-foreground/70 leading-relaxed">
                Get detailed feedback on your resume with AI-powered scoring, 
                missing skills identification, and optimization suggestions.
              </p>
            </Card>

            {/* Career Roadmap */}
            <Card className="p-8 glass-card hover:scale-105 transition-spring group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:animate-glow">
                <MapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Roadmaps</h3>
              <p className="text-foreground/70 leading-relaxed">
                Receive step-by-step career paths tailored to your goals, 
                with learning resources and milestone tracking.
              </p>
            </Card>

            {/* AI Advisor */}
            <Card className="p-8 glass-card hover:scale-105 transition-spring group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:animate-glow">
                <BrainIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 AI Career Advisor</h3>
              <p className="text-foreground/70 leading-relaxed">
                Chat with your personal AI career coach anytime. 
                Get instant answers to career questions and strategic advice.
              </p>
            </Card>

            {/* Progress Tracking */}
            <Card className="p-8 glass-card hover:scale-105 transition-spring group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:animate-glow">
                <TrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-foreground/70 leading-relaxed">
                Monitor your skill development and career advancement 
                with visual progress indicators and achievement badges.
              </p>
            </Card>

            {/* Skill Gap Analysis */}
            <Card className="p-8 glass-card hover:scale-105 transition-spring group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:animate-glow">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Gap Analysis</h3>
              <p className="text-foreground/70 leading-relaxed">
                Identify exactly what skills you need to reach your target role, 
                with curated learning resources for each gap.
              </p>
            </Card>

            {/* Industry Insights */}
            <Card className="p-8 glass-card hover:scale-105 transition-spring group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:animate-glow">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Insights</h3>
              <p className="text-foreground/70 leading-relaxed">
                Stay updated with industry trends, salary benchmarks, 
                and emerging opportunities in your field.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-16">
            From upload to actionable insights in minutes
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-spring">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Resume</h3>
              <p className="text-foreground/70">
                Simply drag and drop your resume. We support PDF, DOCX, and text formats.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-spring">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-foreground/70">
                Our AI analyzes your resume and generates personalized insights and recommendations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-spring">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Your Roadmap</h3>
              <p className="text-foreground/70">
                Receive your personalized career roadmap with actionable steps and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-6 py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">AI Career Compass</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Instant Results</h3>
                  <p className="text-foreground/70">Get comprehensive analysis in under 2 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Industry-Specific Insights</h3>
                  <p className="text-foreground/70">Tailored advice for your specific field and target roles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Continuous Learning</h3>
                  <p className="text-foreground/70">Updated recommendations as you progress</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <ClockIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Save Time</h3>
                  <p className="text-foreground/70">No more guessing what skills to learn next</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <SparklesIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">AI-Powered</h3>
                  <p className="text-foreground/70">Leverages latest AI technology for accurate insights</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <TrendingUpIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Track Progress</h3>
                  <p className="text-foreground/70">Visual progress tracking and milestone celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform Your Career?</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Join thousands of professionals who have accelerated their careers with AI-powered guidance.
          </p>
          
          <Button className="hero-button group mb-4">
            Start Your Journey Now
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-foreground/50">
            Free analysis • No credit card required • Results in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border/50 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-lg gradient-bg flex items-center justify-center">
              <BrainIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold gradient-text">AI Career Compass</span>
          </div>
          <div className="flex space-x-6 text-sm text-foreground/70">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
            <a href="#" className="hover:text-foreground transition-smooth">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;