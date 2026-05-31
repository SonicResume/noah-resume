"use client";

import { useState, useEffect } from "react";

// UI Components - Assuming standard shadcn/ui paths
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Project Specific Components (Adjust paths if these are in different folders)
import FormSection from "../components/FormSection";
import ResumePreview from "../components/ResumePreview";
import html2pdf from "html2pdf.js";

// Types
import { ResumeData, Experience, Education } from "../types/resume";

// Icons
import {
  User,
  Briefcase,
  GraduationCap,
  Plus,
  Trash2,
  Download,
  RotateCcw,
  Save
} from "lucide-react";

// Framer Motion for that "Nice Scroll" and animations
import { motion, AnimatePresence } from "framer-motion";


const handleDownload = () => {
  const element = document.getElementById("resume");

  if (!element) return;

  html2pdf()
    .set({
     margin: [0, 0, 0, 0],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .from(element)
    .save();
};

// Load Google Fonts
function useFonts() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experiences: [],
  education: [],
  skills: [],
};

export default function Home() {
  useFonts();
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);

function extractRole(text: string) {
  if (!text) return "Professional";

  const t = text.toLowerCase();

  if (t.includes("react")) return "Frontend Developer";
  if (t.includes("api")) return "Software Developer";
  if (t.includes("performance")) return "Performance Engineer";

  return "Software Professional";
}

function extractSkills(lines: string[]) {
  const keywords = [
    "react",
    "typescript",
    "api",
    "performance",
    "debugging",
    "javascript",
  ];

  return keywords.filter((k) =>
    lines.join(" ").toLowerCase().includes(k)
  );
}

useEffect(() => {
  const saved = localStorage.getItem("resumeData");

  if (saved) {
    const parsed = JSON.parse(saved);

    const firstLine = parsed.experience?.[0] || "";

    setResumeData((prev) => ({
      ...prev,

      personalInfo: {
        ...prev.personalInfo,
        summary: parsed.summary || "",
      },

      experiences: (parsed.experience || []).map((item: string, i: number) => ({
        id: crypto.randomUUID(),
        company: i === 0 ? "Recent Role" : "",
        position: i === 0 ? extractRole(firstLine) : "",
        startDate: "",
        endDate: "",
        description: item,
      })),

      skills:
        parsed.skills?.length
          ? parsed.skills
          : extractSkills(parsed.experience || []),
    }));

    localStorage.removeItem("resumeData");
  }
}, []);

  const [newSkill, setNewSkill] = useState("");

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setResumeData((prev) => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      field: "",
      graduationDate: "",
    };
    setResumeData((prev) => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData((prev) => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

const saveResume = () => {
  localStorage.setItem("resume", JSON.stringify(resumeData));
};

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="border-b bg-white sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    {/* Left - Brand */}
    <span className="font-semibold text-lg tracking-wide">
    Create Job-Ready Resumes Instantly   
 </span>

    {/* Right - Modules */}
    <div className="flex items-center gap-2">

      {/* Reset */}
      <button
        onClick={() => setResumeData(initialData)}
        className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
      >
        Reset
      </button>

      {/* SAVE 🔥 */}
      <button
        onClick={saveResume}
        className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save
      </button>

      {/* Download */}
      <button
        onClick={handleDownload}
        className="px-4 py-1.5 text-sm bg-black text-white rounded hover:bg-black/90"
      >
        Download
      </button>

    </div>

  </div>
</header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Personal Info */}
            <FormSection title="Personal Information" icon={User}>
  <div className="space-y-4">

    <Input
      placeholder="Full Name"
      value={resumeData.personalInfo.fullName}
      onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
    />

   <div className="grid grid-cols-2 gap-3">
  <Input
    placeholder="Email"
    value={resumeData.personalInfo.email}
    onChange={(e) => updatePersonalInfo("email", e.target.value)}
  />
  <Input
    placeholder="Phone"
    value={resumeData.personalInfo.phone}
    onChange={(e) => updatePersonalInfo("phone", e.target.value)}
  />
</div>

<Input
  placeholder="Location"
  value={resumeData.personalInfo.location}
  onChange={(e) => updatePersonalInfo("location", e.target.value)}
/>

    <Textarea
      placeholder="Professional summary..."
      rows={3}
      value={resumeData.personalInfo.summary}
      onChange={(e) => updatePersonalInfo("summary", e.target.value)}
    />

    {/* ✅ SKILLS (NOT FormSection) */}
    <div className="space-y-3 mt-4">
      <label className="text-sm font-medium">Skills</label>

      <div className="flex gap-2">
        <Input
          placeholder="Add a skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addSkill()}
        />
        <Button onClick={addSkill}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {skill}
           <button
             onClick={() => removeSkill(index)}
             className="text-muted-foreground hover:text-destructive transition-colors"
         >
           <Trash2 className="w-4 h-4" />
         </button>
          </span>
        ))}
      </div>
    </div>

  </div>
</FormSection>

            {/* Experience */}
            <FormSection
              title="Experience"
              icon={Briefcase}
              action={
                <Button variant="ghost" size="sm" onClick={addExperience} className="text-primary hover:text-primary/80">
                  <Plus className="w-4 h-4 mr-1" /> Add
                </Button>
              }
            >
              {resumeData.experiences.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">
                  Add your work experience to showcase your career journey
                </p>
              ) : (
                <div className="space-y-4">
                  {resumeData.experiences.map((exp) => (
                    <div key={exp.id} className="p-4 bg-muted/50 rounded-lg border border-border/50 relative">
                      <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-3 pr-8">
                        <Input
                          placeholder="Job Title"
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                        />
                        <Input
                          placeholder="Company"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            placeholder="Start Date"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          />
                          <Input
                            placeholder="End Date (or 'Present')"
                            value={exp.endDate}
                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          />
                        </div>
                        <Textarea
                          placeholder="Describe your responsibilities and achievements"
                          rows={2}
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FormSection>

            {/* Education */}
            <FormSection
              title="Education"
              icon={GraduationCap}
              action={
                <Button variant="ghost" size="sm" onClick={addEducation} className="text-primary hover:text-primary/80">
                  <Plus className="w-4 h-4 mr-1" /> Add
                </Button>
              }
            >
              {resumeData.education.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">
                  Add your educational background
                </p>
              ) : (
                <div className="space-y-4">
                  {resumeData.education.map((edu) => (
                    <div key={edu.id} className="p-4 bg-muted/50 rounded-lg border border-border/50 relative">
                      <button
                        onClick={() => removeEducation(edu.id)}
                        className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-3 pr-8">
                        <Input
                          placeholder="School / University"
                          value={edu.school}
                          onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          />
                          <Input
                            placeholder="Field of Study"
                            value={edu.field}
                            onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                          />
                        </div>
                        <Input
                          placeholder="Graduation Date"
                          value={edu.graduationDate}
                          onChange={(e) => updateEducation(edu.id, "graduationDate", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FormSection>

                 </div> {/* Left Column */}

          {/* Right Column - Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
        <div className="bg-white rounded-none p-6 shadow-none">            
         <div className="text-xs uppercase tracking-wider text-slate-500 mb-4 font-medium">
                Live Preview
              </div>
              <div className="origin-top">
                <div id="resume" className="bg-white px-8 py-6 w-[800px] mx-auto">
               <ResumePreview data={resumeData} />
              </div>
              </div>
            </div>
          </div>

        </div> 
      </main>
    </div>
  );
}
