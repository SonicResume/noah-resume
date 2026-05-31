import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { experience, skills, careerGoals } = req.body || {};

    if (!experience || !experience.trim()) {
      return res.status(400).json({ error: "Experience is required" });
    }

    // 🔥 CLEAN INPUT
    const lines = experience
      .replace(/\n/g, " ")
      .split(".")
      .map((l: string) => l.trim())
      .filter(
        (l: string) =>
          l &&
          !l.toLowerCase().includes("example") &&
          !l.toLowerCase().includes("describe")
      );

    // 🔁 IMPACT SETS (VARIATION)
    const impactSets = [
      [
        "reducing processing time by 30%",
        "enhancing system performance",
        "optimizing application efficiency",
        "delivering scalable solutions",
        "improving overall system reliability",
      ],
      [
        "improving workflow efficiency",
        "strengthening API reliability",
        "increasing system responsiveness",
        "supporting high-quality feature delivery",
        "driving measurable technical impact",
      ],
      [
        "boosting user experience",
        "streamlining development processes",
        "improving maintainability",
        "accelerating feature delivery",
        "enhancing product performance",
      ],
    ];

    const selectedImpacts =
      impactSets[Math.floor(Math.random() * impactSets.length)];

    // 🔁 BULLET STRUCTURE VARIATION (REAL DIFFERENCE)
    const bulletTemplates = [
      (line: string, impact: string) =>
        `• ${capitalize(line)}, ${impact}`,

      (line: string, impact: string) =>
        `• Successfully ${line.toLowerCase()}, ${impact}`,

      (line: string, impact: string) =>
        `• ${capitalize(line)} while ${impact}`,
    ];

    // 🔥 FINAL BULLETS (MAX 5)
    const bulletPoints = lines
      .slice(0, 5)
      .map((line: string, i: number) => {
        const impact = selectedImpacts[i % selectedImpacts.length];
        const template =
          bulletTemplates[Math.floor(Math.random() * bulletTemplates.length)];

        return template(line, impact);
      })
      .join("\n");

    // 🔁 SUMMARY TEMPLATES (REAL VARIATION)
    const summaryTemplates = [
      (exp: string, skills: string, goals: string) =>
        `Results-driven professional with a strong track record of ${formatExperience(
          exp
        )}. Demonstrates expertise in ${clean(
          skills
        )}, with a focus on ${clean(
          goals
        )}. Known for delivering measurable results and optimizing performance in fast-paced environments.`,

      (exp: string, skills: string, goals: string) =>
        `Motivated professional experienced in ${formatExperience(
          exp
        )}. Skilled in ${clean(
          skills
        )}, with a strong interest in ${clean(
          goals
        )}. Proven ability to solve complex problems and contribute to high-performing teams.`,

      (exp: string, skills: string, goals: string) =>
        `High-performing professional with hands-on experience in ${formatExperience(
          exp
        )}. Brings expertise in ${clean(
          skills
        )} and a focus on ${clean(
          goals
        )}. Recognized for improving systems, enhancing performance, and delivering impactful solutions.`,
    ];

    const summary =
      summaryTemplates[
        Math.floor(Math.random() * summaryTemplates.length)
      ](experience, skills || "modern technologies", careerGoals || "delivering results");

    return res.status(200).json({
      bulletPoints,
      summary,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}

// 🔧 HELPERS

function clean(text: string) {
  return text.replace(/\n/g, " ").trim();
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatExperience(text: string) {
  return text
    .split(".")
    .map((l: string) => l.trim().toLowerCase())
    .filter(Boolean)
    .map((l: string) =>
      l
        .replace(/^built/, "building")
        .replace(/^integrated/, "integrating")
        .replace(/^improved/, "improving")
        .replace(/^developed/, "developing")
        .replace(/^created/, "creating")
    )
    .join(", ");
}