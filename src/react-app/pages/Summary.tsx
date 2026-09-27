import { useState } from "react";
import { FileText, Copy, Check } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Summary() {
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [careerGoals, setCareerGoals] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateSummary = async () => {
    if (!experience.trim() || !skills.trim() || !careerGoals.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          experience: experience.trim(),
          skills: skills.trim(),
          careerGoals: careerGoals.trim(),
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate summary");
      }

      setSummary(data.summary);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!summary) return;
    
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Résumé Summary Generator
          </h1>
          <p className="text-slate-600 text-lg">
            Create a compelling professional summary that captures your unique value
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-slate-700 mb-3">
                Professional Experience
              </label>
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Describe your professional background, years of experience, key roles, and industry expertise..."
                className="w-full h-32 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-semibold text-slate-700 mb-3">
                Key Skills & Expertise
              </label>
              <textarea
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="List your core competencies, technical skills, certifications, and areas of expertise..."
                className="w-full h-32 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="careerGoals" className="block text-sm font-semibold text-slate-700 mb-3">
                Career Goals & Aspirations
              </label>
              <textarea
                id="careerGoals"
                value={careerGoals}
                onChange={(e) => setCareerGoals(e.target.value)}
                placeholder="Describe your career objectives, the type of role you're seeking, and what you hope to achieve..."
                className="w-full h-32 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                disabled={loading}
              />
            </div>

            <button
              onClick={generateSummary}
              disabled={loading || !experience.trim() || !skills.trim() || !careerGoals.trim()}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <FileText className="w-5 h-5 animate-pulse" />
                  <span>Generating Summary...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generate Professional Summary</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {loading && (
          <div className="mt-8">
            <LoadingSpinner text="Crafting your professional summary..." />
          </div>
        )}

        {summary && !loading && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Generated Professional Summary</h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-700 leading-relaxed font-medium text-lg">
                {summary}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
