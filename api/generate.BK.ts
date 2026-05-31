import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { jobDescription, experience, skills, careerGoals } = req.body || {};

    if (!experience || !experience.trim()) {
      return res.status(400).json({ error: "Experience is required" });
    }

    // 🔥 CLEAN INPUT
    const cleanExperience = experience
      .replace(/\n/g, " ")
      .split(".")
      .map((l: string) => l.trim())
      .filter(Boolean);

    // 🔥 STRONG ACTION VERBS
    const verbs = [
      "Led",
      "Developed",
      "Implemented",
      "Optimized",
      "Delivered",
      "Engineered",
      "Executed",
      "Streamlined",
    ];

    // 🔥 METRICS / IMPACT PHRASES
    const impacts = [
      "improving efficiency by 30%",
      "reducing processing time significantly",
      "enhancing system performance",
      "increasing user engagement",
      "delivering measurable business results",
      "driving operational improvements",
    ];

    // 🔥 BULLET GENERATION
    const bulletPoints = cleanExperience
      .map((line: string, i: number) => {
        const verb = verbs[i % verbs.length];
        const impact = impacts[i % impacts.length];

        return `• ${verb} ${line.toLowerCase()}, ${impact}`;
      })
      .join("\n");

    // 🔥 SUMMARY (HIGH-QUALITY)
    const summary = `Results-driven professional with proven experience in ${shorten(
      experience
    )}. Demonstrated expertise in ${shorten(
      skills || "modern tools and technologies"
    )}, with a strong focus on ${shorten(
      careerGoals || "driving impactful results"
    )}. Recognized for delivering measurable outcomes, optimizing performance, and contributing to high-performing teams in dynamic environments.`;

    return res.status(200).json({
      bulletPoints,
      summary,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

// 🔧 helper
function shorten(text: string) {
  if (!text) return "";
  return text.length > 120 ? text.slice(0, 120) + "..." : text.trim();
}