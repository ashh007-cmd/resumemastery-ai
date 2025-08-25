import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  UploadIcon, 
  FileTextIcon, 
  CheckCircleIcon,
  XCircleIcon,
  SparklesIcon
} from "lucide-react";

interface ResumeUploadProps {
  onUploadComplete: (file: File) => void;
}

const ResumeUpload = ({ onUploadComplete }: ResumeUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  }, []);

  const handleFiles = (file: File) => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOCX, or TXT file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadProgress(100);
      setUploadedFile(file);
      
      toast({
        title: "Upload successful!",
        description: `${file.name} has been uploaded successfully.`,
      });

      setTimeout(() => {
        onUploadComplete(file);
      }, 1000);

    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      clearInterval(progressInterval);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-glow/5 to-accent/5 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upload Your <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Get expert insights and personalized career guidance in minutes
          </p>
        </div>

        {/* Upload Area */}
        <Card className="p-8 glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {!uploading && !uploadedFile ? (
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-border hover:border-primary/50 hover:bg-primary/2'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center">
                  <UploadIcon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Drop your resume here</h3>
                  <p className="text-foreground/70">or click to browse files</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 text-sm text-foreground/60">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">PDF</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">DOCX</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">TXT</span>
                </div>

                <Button variant="hero" size="lg" className="mt-4">
                  Choose File
                </Button>

                <p className="text-xs text-foreground/50">
                  Maximum file size: 10MB
                </p>
              </div>

              <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          ) : uploading ? (
            <div className="text-center space-y-6 animate-scale-in">
              <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center animate-pulse">
                <SparklesIcon className="w-8 h-8 text-white animate-glow" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Uploading your resume...</h3>
                <div className="space-y-2">
                  <Progress value={uploadProgress} className="w-full h-2" />
                  <p className="text-sm text-foreground/70">{Math.round(uploadProgress)}% complete</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-scale-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-green-600">Upload Complete!</h3>
                <div className="flex items-center justify-center space-x-2 text-foreground/70">
                  <FileTextIcon className="w-4 h-4" />
                  <span>{uploadedFile?.name}</span>
                </div>
                <p className="text-sm text-foreground/60">
                  Analyzing your resume...
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* Tips */}
        <Card className="mt-8 p-6 glass-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h4 className="font-semibold mb-4 flex items-center">
            <SparklesIcon className="w-5 h-5 mr-2 text-primary" />
            Tips for best results
          </h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start">
              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Use your most recent and complete resume
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Include skills, experience, and education details
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Ensure the document is well-formatted and readable
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ResumeUpload;
