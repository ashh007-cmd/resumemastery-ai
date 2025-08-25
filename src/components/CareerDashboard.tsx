import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUpIcon,
  CompassIcon,
  MapIcon,
  TargetIcon,
  CheckCircleIcon,
  ClockIcon,
  BookOpenIcon,
  StarIcon,
  MessageSquareIcon,
  DownloadIcon
} from "lucide-react";

interface CareerDashboardProps {
  resumeData: {
    fileName: string;
    score: number;
    missingSkills: string[];
    careerPaths: string[];
    roadmap: Array<{
      milestone: string;
      description: string;
      resources: string[];
      completed: boolean;
    }>;
  };
}

const CareerDashboard = ({ resumeData }: CareerDashboardProps) => {
  const [completedMilestones, setCompletedMilestones] = useState<Set<number>>(new Set());

  const toggleMilestone = (index: number) => {
    const newCompleted = new Set(completedMilestones);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedMilestones(newCompleted);
  };

  const completionPercentage = (completedMilestones.size / resumeData.roadmap.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-glow/5 to-accent/5 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Your Career <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-foreground/70">Resume: {resumeData.fileName}</p>
            </div>
            <div className="flex space-x-3 mt-4 lg:mt-0">
              <Button variant="outline" className="hover:scale-105 transition-smooth">
                <MessageSquareIcon className="w-4 h-4 mr-2" />
                Career Advisor
              </Button>
              <Button variant="hero">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Export Roadmap
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Resume Score */}
          <Card className="p-6 glass-card hover:scale-105 transition-spring animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <TargetIcon className="w-6 h-6 text-white" />
              </div>
              <Badge variant={resumeData.score >= 80 ? "default" : resumeData.score >= 60 ? "secondary" : "destructive"}>
                {resumeData.score >= 80 ? "Excellent" : resumeData.score >= 60 ? "Good" : "Needs Work"}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Resume Score</span>
                <span className="text-2xl font-bold">{resumeData.score}%</span>
              </div>
              <Progress value={resumeData.score} className="h-2" />
            </div>
          </Card>

          {/* Progress */}
          <Card className="p-6 glass-card hover:scale-105 transition-spring animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <TrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <Badge variant="outline">{completedMilestones.size}/{resumeData.roadmap.length}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/70">Progress</span>
                <span className="text-2xl font-bold">{Math.round(completionPercentage)}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
            </div>
          </Card>

          {/* Skills Gap */}
          <Card className="p-6 glass-card hover:scale-105 transition-spring animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <BookOpenIcon className="w-6 h-6 text-white" />
              </div>
              <Badge variant="outline">{resumeData.missingSkills.length} skills</Badge>
            </div>
            <div className="space-y-2">
              <span className="text-sm text-foreground/70">Skills to Learn</span>
              <div className="text-2xl font-bold">{resumeData.missingSkills.length}</div>
            </div>
          </Card>

          {/* Time Estimate */}
          <Card className="p-6 glass-card hover:scale-105 transition-spring animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <Badge variant="outline">Est. Time</Badge>
            </div>
            <div className="space-y-2">
              <span className="text-sm text-foreground/70">To Completion</span>
              <div className="text-2xl font-bold">3-6 mo</div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="roadmap" className="animate-fade-in" style={{animationDelay: '0.4s'}}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="roadmap" className="flex items-center space-x-2">
              <MapIcon className="w-4 h-4" />
              <span>Roadmap</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center space-x-2">
              <StarIcon className="w-4 h-4" />
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="careers" className="flex items-center space-x-2">
              <TrendingUpIcon className="w-4 h-4" />
              <span>Career Paths</span>
            </TabsTrigger>
            <TabsTrigger value="advisor" className="flex items-center space-x-2">
              <CompassIcon className="w-4 h-4" />
              <span>Career Advisor</span>
            </TabsTrigger>
          </TabsList>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap">
            <Card className="p-6 glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Your Learning Roadmap</h3>
                <Badge className="bg-primary/10 text-primary">
                  {completedMilestones.size} of {resumeData.roadmap.length} completed
                </Badge>
              </div>
              
              <div className="space-y-6">
                {resumeData.roadmap.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <button
                      onClick={() => toggleMilestone(index)}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        completedMilestones.has(index)
                          ? 'bg-green-500 border-green-500'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {completedMilestones.has(index) && (
                        <CheckCircleIcon className="w-5 h-5 text-white" />
                      )}
                    </button>
                    
                    <div className="flex-1 pb-6 border-l-2 border-border pl-6 ml-4 group-last:border-l-0">
                      <div className={`transition-all ${completedMilestones.has(index) ? 'opacity-60' : ''}`}>
                        <h4 className="font-semibold mb-2">{item.milestone}</h4>
                        <p className="text-foreground/70 mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.resources.map((resource, resourceIndex) => (
                            <Badge key={resourceIndex} variant="outline" className="text-xs">
                              {resource}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card className="p-6 glass-card">
              <h3 className="text-2xl font-semibold mb-6">Skills to Develop</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumeData.missingSkills.map((skill, index) => (
                  <div key={index} className="p-4 border border-border rounded-xl hover:border-primary/50 transition-smooth">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill}</span>
                      <Badge variant="outline">High Priority</Badge>
                    </div>
                    <p className="text-sm text-foreground/70">In-demand skill for your target roles</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Career Paths Tab */}
          <TabsContent value="careers">
            <Card className="p-6 glass-card">
              <h3 className="text-2xl font-semibold mb-6">Recommended Career Paths</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {resumeData.careerPaths.map((path, index) => (
                  <div key={index} className="p-6 border border-border rounded-xl hover:border-primary/50 transition-smooth hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{path}</h4>
                      <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Strong match based on your current skills and experience.
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">High Match</Badge>
                      <Badge variant="outline">Growing Field</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Career Advisor Tab */}
          <TabsContent value="advisor">
            <Card className="p-6 glass-card">
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                  <CompassIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Career Advisor</h3>
                <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                  Chat with your personal career coach. Get instant answers to career questions,
                  strategic advice, and personalized recommendations.
                </p>
                <Button variant="hero" size="lg">
                  Start Conversation
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerDashboard;
