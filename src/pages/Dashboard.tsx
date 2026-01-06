import { useState, useEffect } from "react";
import { supabase } from "@/integration/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import ResumeUpload from "@/components/ResumeUpload";
import AnalysisHistory from "@/components/AnalysisHistory";
import { LogOut, FileText } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<{ email: string } | null>({ email: "demo@example.com" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [analyses, setAnalyses] = useState<any[]>([]);

  const handleAnalysisComplete = (analysisResult: any) => {
    console.log('=== DASHBOARD RECEIVED ANALYSIS ===');
    console.log('Analysis ID:', analysisResult.id);
    console.log('File name:', analysisResult.resumes.file_name);
    console.log('Skills:', analysisResult.skills);
    console.log('Education:', analysisResult.education);
    console.log('Current analyses count:', analyses.length);
    
    // Add the new analysis to the beginning of the list
    setAnalyses(prev => {
      const newAnalyses = [analysisResult, ...prev];
      console.log('New analyses count:', newAnalyses.length);
      console.log('First analysis ID:', newAnalyses[0]?.id);
      return newAnalyses;
    });
  };

  const handleSignOut = () => {
    navigate("/");
    toast({
      title: "Demo Mode",
      description: "Returning to home page",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart Resume Analyzer
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email} (Demo Mode)</span>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Exit Demo
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-2">Upload Your Resume</h2>
            <p className="text-muted-foreground mb-6">
              Get AI-powered insights and personalized job recommendations
            </p>
            <ResumeUpload userId="demo-user" onAnalysisComplete={handleAnalysisComplete} />
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Analysis History</h2>
            <AnalysisHistory analyses={analyses} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;