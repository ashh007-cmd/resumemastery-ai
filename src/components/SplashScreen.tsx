import { useEffect, useState } from "react";
import { CompassIcon } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Career Navigator...");

  useEffect(() => {
    const loadingSteps = [
      { text: "Initializing Career Navigator...", duration: 800 },
      { text: "Loading smart features...", duration: 1000 },
      { text: "Preparing career insights...", duration: 700 },
      { text: "Almost ready...", duration: 500 },
    ];

    let currentStep = 0;
    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(onComplete, 300);
        return;
      }

      // Update loading text based on progress
      const stepProgress = currentProgress / 25;
      if (Math.floor(stepProgress) > currentStep && currentStep < loadingSteps.length - 1) {
        currentStep = Math.floor(stepProgress);
        setLoadingText(loadingSteps[currentStep].text);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-primary-glow/10 to-accent/10">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-2xl gradient-bg flex items-center justify-center animate-pulse">
            <CompassIcon className="w-12 h-12 text-white animate-glow" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl animate-float"></div>
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Career Navigator</h1>
          <p className="text-foreground/70">Find your path. Build your skills. Shape your future.</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-3">
          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
            <div 
              className="h-full gradient-bg rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-foreground/60 animate-pulse">{loadingText}</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-glow rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
