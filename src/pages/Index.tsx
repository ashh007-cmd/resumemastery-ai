import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import LandingPage from "@/components/LandingPage";
import ResumeUpload from "@/components/ResumeUpload";
import CareerDashboard from "@/components/CareerDashboard";

type AppState = 'splash' | 'landing' | 'upload' | 'dashboard';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('splash');
  const [resumeData, setResumeData] = useState<any>(null);

  const handleUploadComplete = (file: File) => {
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        fileName: file.name,
        score: 78,
        missingSkills: ['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'AWS'],
        careerPaths: ['Frontend Developer', 'Full Stack Developer', 'Software Engineer', 'Product Manager'],
        roadmap: [
          {
            milestone: 'Master React Fundamentals',
            description: 'Build a solid foundation in React concepts including hooks, state management, and component lifecycle.',
            resources: ['React Docs', 'React Tutorial', 'Practice Projects'],
            completed: false
          },
          {
            milestone: 'Learn TypeScript',
            description: 'Add type safety to your JavaScript knowledge and improve code quality.',
            resources: ['TypeScript Handbook', 'TS Playground', 'Real Project'],
            completed: false
          },
          {
            milestone: 'Backend Development with Node.js',
            description: 'Expand to full-stack development by learning server-side JavaScript.',
            resources: ['Node.js Docs', 'Express.js', 'Database Integration'],
            completed: false
          },
          {
            milestone: 'Database Design & SQL',
            description: 'Learn to design and query databases effectively.',
            resources: ['SQL Tutorial', 'Database Design', 'Practice Queries'],
            completed: false
          },
          {
            milestone: 'Cloud Services (AWS)',
            description: 'Deploy and scale applications using cloud infrastructure.',
            resources: ['AWS Training', 'Cloud Practitioner', 'Hands-on Labs'],
            completed: false
          }
        ]
      };
      setResumeData(mockAnalysis);
      setAppState('dashboard');
    }, 3000);
  };

  return (
    <>
      {appState === 'splash' && (
        <SplashScreen onComplete={() => setAppState('landing')} />
      )}
      {appState === 'landing' && (
        <div onClick={(e) => {
          if ((e.target as HTMLElement).closest('.hero-button')) {
            setAppState('upload');
          }
        }}>
          <LandingPage />
        </div>
      )}
      {appState === 'upload' && (
        <ResumeUpload onUploadComplete={handleUploadComplete} />
      )}
      {appState === 'dashboard' && resumeData && (
        <CareerDashboard resumeData={resumeData} />
      )}
    </>
  );
};

export default Index;
