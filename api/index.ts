import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

/**
 * 🔧 HELPER: BLOCK PLACEHOLDER INPUT
 */
function isPlaceholder(text: string) {
  const t = text.toLowerCase();
  return (
    t.includes("describe what you did") ||
    t.includes("example") ||
    t.includes("key skills") ||
    t.includes("career goals") ||
    t.includes("list your") ||
    t.includes("describe your")
  );
}

/**
 * 🔧 HELPERS
 */
function extractKeywords(text: string) {
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 4)
    .slice(0, 6);
}

function clean(text: string) {
  return text.length > 140 ? text.slice(0, 140) + "..." : text.trim();
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * 🔥 BULLET POINT GENERATOR (FIXED)
 */
app.post("/generate-bullet-points", async (c) => {
  try {
    const { jobDescription, experience } = await c.req.json();

    if (
      !jobDescription ||
      !experience ||
      isPlaceholder(experience)
    ) {
      return c.json(
        { error: "Please enter real experience (not placeholder text)" },
        400
      );
    }

    const metrics = [
      "reducing processing time by 30%",
      "enhancing system performance",
      "improving efficiency",
      "boosting scalability",
      "delivering measurable results",
    ];

    const keywords = extractKeywords(jobDescription);

    const expLines = experience
      .replace(/\n/g, " ")
      .split(".")
      .map((line: string) => line.trim())
      .filter(Boolean);

    // ✅ CLEAN BULLETS (MAX 5)
    let bullets = expLines.slice(0, 5).map((line: string, i: number) => {
      const metric = metrics[i % metrics.length];
      const keyword = keywords[i % keywords.length] || "";

      return `• ${capitalize(line)}, ${metric} ${keyword}`.trim();
    });

    if (bullets.length === 0) {
      bullets = [
        "• Delivered measurable results improving operational efficiency",
        "• Collaborated with teams to achieve project goals",
        "• Maintained high performance and system reliability",
      ];
    }

    const structured = bullets.map((b) => b.replace("• ", ""));

    const summaryPreview = `Results-driven professional with expertise in ${keywords.join(
      ", "
    )}. Proven ability to deliver measurable outcomes and improve performance.`;

    return c.json({
      bulletPoints: bullets.join("\n"),
      structured,
      summaryPreview,
    });

  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to generate bullet points" }, 500);
  }
});

/**
 * 🔥 SUMMARY GENERATOR (FIXED)
 */
app.post("/generate-summary", async (c) => {
  try {
    const { experience, skills, careerGoals } = await c.req.json();

    if (
      !experience ||
      !skills ||
      !careerGoals ||
      isPlaceholder(experience) ||
      isPlaceholder(skills) ||
      isPlaceholder(careerGoals)
    ) {
      return c.json(
        { error: "Please enter real information, not placeholder text" },
        400
      );
    }

    const summary = buildSummary(experience, skills, careerGoals);

    return c.json({ summary });

  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to generate summary" }, 500);
  }
});

/**
 * 🔥 AUTO-FILL FULL RESUME
 */
app.post("/generate-full-resume", async (c) => {
  try {
    const { jobDescription, experience, skills, careerGoals } = await c.req.json();

    const keywords = extractKeywords(jobDescription);

    const bullets = experience
      .split(".")
      .map((l: string) => l.trim())
      .filter(Boolean)
      .slice(0, 5)
      .map((l: string, i: number) => {
        return `${capitalize(l)}, ${keywords[i % keywords.length] || ""}`;
      });

    const summary = buildSummary(experience, skills, careerGoals);

    return c.json({
      summary,
      experience: bullets,
      skills: skills.split(",").map((s: string) => s.trim()),
    });

  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to generate resume" }, 500);
  }
});

/**
 * 🔥 CLEAN SUMMARY BUILDER
 */
function buildSummary(exp: string, skills: string, goals: string) {
  const expList = exp
    .split(".")
    .map((l: string) => l.trim().toLowerCase())
    .filter(Boolean)
    .join(", ");

  return `Results-driven professional with a strong track record of ${expList}. Demonstrates expertise in ${clean(
    skills
  )}, with a focus on ${clean(
    goals
  )}. Known for delivering measurable results, optimizing performance, and contributing to high-performing teams.`;
}

export default app;