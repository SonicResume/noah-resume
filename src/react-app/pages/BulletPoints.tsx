import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Check, Copy } from "lucide-react";

export default function BulletPoints() {
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [bulletPoints, setBulletPoints] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateBulletPoints = async () => {
    if (!jobDescription.trim() || !experience.trim()) {
      alert("Please fill in both the job description and your experience.");
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
  jobDescription,
  experience
}),
});

const result = await response.json();

if (!response.ok) {
  throw new Error(result.error || "Failed");
}

console.log(result);
      setBulletPoints(result.bulletPoints);
    } catch (error)
 {
      console.error("Error:", error);
      alert("Failed to generate bullet points. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 const copyToClipboard = async () => {
  if (!bulletPoints) return;

  try {
    await navigator.clipboard.writeText(bulletPoints);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (error) {
    console.error("Failed to copy:", error);
  }
};

// 🔥 PUT IT HERE (OUTSIDE)
function sendToBuilder() {
  const data = {
    summary: "",
    experience: bulletPoints.split("\n").filter(Boolean),
    skills: [],
  };

  localStorage.setItem("resumeData", JSON.stringify(data));
  window.location.href = "/builder";
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Bullet Points Generator
          </h1>
          <p className="text-slate-600 text-lg">
            Transform your experience into compelling résumé bullet points
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-semibold text-slate-700 mb-3">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description you're applying for..."
                className="w-full h-32 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-slate-700 mb-3">
                Your Experience & Achievements
              </label>
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Describe your relevant experience, accomplishments, and responsibilities..."
                className="w-full h-32 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                disabled={loading}
              />
            </div>

            <button
              onClick={generateBulletPoints}
              disabled={loading || !jobDescription.trim() || !experience.trim()}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <span>Generating Bullet Points...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Generate Bullet Points</span>
                </div>
              )}
                </button>

               <button
                 onClick={() => {
                  setJobDescription("");
                  setExperience("");
                  setBulletPoints("");
              }}
              className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-xl"
            >
             Clear
           </button> 
          </div>
         </div>

        {loading && (
          <div className="mt-8">
            <LoadingSpinner text="Crafting professional bullet points..." />
          </div>
        )}

        {bulletPoints && !loading && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Generated Bullet Points</h2>
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
           
              <pre className="whitespace-pre-wrap text-slate-700 leading-relaxed font-medium">
                {bulletPoints}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
