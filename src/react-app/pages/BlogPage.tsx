import type React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [likes, setLikes] = useState(64);
  const [voted, setVoted] = useState(false);

  const article =
    ARTICLE_DATABASE[slug as keyof typeof ARTICLE_DATABASE];

  if (!article) {
    return (
      <div style={styles.errorPage}>
        <span style={{ fontSize: "4rem" }}>🕵️‍♂️</span>

        <h2 style={styles.errorTitle}>
          Article Missing!
        </h2>

        <p style={styles.errorText}>
          We couldn't find that article.
        </p>

        <button
          style={styles.btnPrimary}
          onClick={() => navigate("/")}
        >
          ← Back Home
        </button>
      </div>
    );
  }

  const handleLike = () => {
    if (!voted) {
      setLikes((current) => current + 1);
      setVoted(true);
    }
  };

  const handleContact = () => {
    window.location.href =
      "mailto:supportsrg2025@gmail.com?subject=Premium%20Copywriting%20Services";
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* BACK BUTTON */}
        <button
          type="button"
          style={styles.backBtn}
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        {/* ARTICLE */}
        <article style={styles.articleCard}>

          {/* CATEGORY */}
          <div style={styles.badge}>
            <span style={styles.badgeDot}>●</span>
            {article.category}
          </div>

          {/* TITLE */}
          <h1 style={styles.title}>
            {article.title}
          </h1>

          {/* META */}
          <div style={styles.meta}>
            <span style={styles.author}>
              NOAH Resume SEO Insights
            </span>

            <span>•</span>

            <span>
              {article.readTime} ⏱
            </span>
          </div>

          {/* IMAGE */}
          <img
            src={article.image}
            alt={article.title}
            style={styles.featuredImage}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display =
                "none";
            }}
          />

          <hr style={styles.divider} />

          {/* CONTENT */}
          <div style={styles.body}>
            {article.content}
          </div>

          <hr style={styles.divider} />

          {/* LIKE BOX */}
          <div style={styles.hypeBox}>
            <p style={styles.hypeText}>
              Did this resume strategy help you?
            </p>

            <button
              type="button"
              style={
                voted
                  ? styles.votedBtn
                  : styles.hypeBtn
              }
              onClick={handleLike}
            >
              {voted ? "🚀 Boosted!" : "🚀 Boost Article"}{" "}
              ({likes})
            </button>
          </div>

          {/* CTA */}
          <div style={styles.writerCta}>

            <div style={styles.writerEmoji}>
              ✍️✨
            </div>

            <h3 style={styles.writerTitle}>
              Need High-Ranking Content or Perfect Copy?
            </h3>

            <p style={styles.writerText}>
              Want entertaining, professional, and
              heavily optimized blogs like this for
              your own brand? From deep-dive articles
              to copy that ranks on Google—we can write
              it all.
            </p>

            <button
              type="button"
              style={styles.writerBtn}
              onClick={handleContact}
            >
              📧 Hire Our Copywriting Team
            </button>

          </div>

        </article>
      </div>
    </div>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles: Record<string, React.CSSProperties> = {

  page: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",

    background:
      "linear-gradient(135deg, #eff6ff 0%, #f8fafc 55%, #fff7ed 100%)",

    minHeight: "100vh",

    padding: "40px 20px",

    boxSizing: "border-box",
  },

  container: {
    maxWidth: 760,
    margin: "0 auto",
    width: "100%",
  },

  /* BACK BUTTON */

  backBtn: {
    background: "#ffffff",
    border: "1px solid #bfdbfe",

    padding: "10px 18px",

    borderRadius: "10px",

    fontWeight: 700,

    cursor: "pointer",

    marginBottom: "20px",

    color: "#2563eb",

    boxShadow:
      "0 3px 10px rgba(37, 99, 235, 0.08)",

    transition: "all 0.2s ease",
  },

  /* ARTICLE */

  articleCard: {
    background: "#ffffff",

    padding: "40px",

    borderRadius: "24px",

    boxShadow:
      "0 20px 60px rgba(15, 23, 42, 0.08)",

    border: "1px solid #dbeafe",

    boxSizing: "border-box",
  },

  /* BADGE */

  badge: {
    display: "inline-flex",

    alignItems: "center",

    gap: "7px",

    background: "#eff6ff",

    color: "#2563eb",

    padding: "6px 13px",

    borderRadius: "20px",

    fontSize: "12px",

    fontWeight: 800,

    marginBottom: "16px",

    textTransform: "uppercase",

    letterSpacing: "0.04em",

    border: "1px solid #bfdbfe",
  },

  badgeDot: {
    color: "#f97316",
    fontSize: "9px",
  },

  /* TITLE */

  title: {
    fontSize:
      "clamp(1.8rem, 4vw, 2.6rem)",

    fontWeight: 900,

    lineHeight: 1.2,

    margin: "0 0 16px 0",

    color: "#0f172a",

    letterSpacing: "-0.025em",
  },

  /* META */

  meta: {
    display: "flex",

    flexWrap: "wrap",

    gap: "10px",

    alignItems: "center",

    color: "#64748b",

    fontSize: "14px",

    marginBottom: "26px",
  },

  author: {
    color: "#2563eb",
    fontWeight: 700,
  },

  /* IMAGE */

  featuredImage: {
    width: "100%",

    maxHeight: "380px",

    objectFit: "cover",

    borderRadius: "16px",

    marginBottom: "10px",

    boxShadow:
      "0 8px 25px rgba(15, 23, 42, 0.08)",
  },

  /* DIVIDER */

  divider: {
    border: "none",

    height: "1px",

    background:
      "linear-gradient(90deg, #bfdbfe, #fed7aa, #bfdbfe)",

    margin: "30px 0",
  },

  /* ARTICLE BODY */

  body: {
    fontSize: "17px",

    lineHeight: "1.75",

    color: "#334155",
  },

  paragraph: {
    marginBottom: "20px",
  },

  subHeading: {
    fontSize: "22px",

    fontWeight: 800,

    margin: "36px 0 16px 0",

    color: "#0f172a",

    lineHeight: 1.3,
  },

  quoteBlock: {
    background:
      "linear-gradient(135deg, #eff6ff, #fff7ed)",

    padding: "20px",

    borderRadius: "12px",

    margin: "24px 0",

    borderLeft: "4px solid #f97316",

    fontSize: "16px",

    color: "#334155",
  },

  list: {
    margin: "16px 0 24px 20px",

    padding: 0,

    display: "flex",

    flexDirection: "column",

    gap: "10px",
  },

  /* LIKE SECTION */

  hypeBox: {
    textAlign: "center",

    background: "#f8fafc",

    padding: "26px",

    borderRadius: "16px",

    border:
      "1px solid #dbeafe",

    marginBottom: "40px",
  },

  hypeText: {
    margin: "0 0 14px 0",

    fontWeight: 700,

    color: "#0f172a",
  },

  hypeBtn: {
    background:
      "linear-gradient(90deg, #f97316, #ea580c)",

    color: "#ffffff",

    border: "none",

    padding: "11px 25px",

    borderRadius: "9px",

    fontWeight: 700,

    cursor: "pointer",

    boxShadow:
      "0 5px 14px rgba(249, 115, 22, 0.25)",
  },

  votedBtn: {
    background: "#ffedd5",

    color: "#ea580c",

    border: "1px solid #fed7aa",

    padding: "11px 25px",

    borderRadius: "9px",

    fontWeight: 700,

    cursor: "default",
  },

  /* WRITER CTA */

  writerCta: {
    background:
      "linear-gradient(135deg, #eff6ff 0%, #dbeafe 70%, #fff7ed 100%)",

    border:
      "2px solid #93c5fd",

    padding: "32px",

    borderRadius: "20px",

    textAlign: "center",

    boxShadow:
      "0 8px 25px rgba(37, 99, 235, 0.08)",
  },

  writerEmoji: {
    fontSize: "2.5rem",

    marginBottom: "12px",
  },

  writerTitle: {
    fontSize: "20px",

    fontWeight: 800,

    color: "#1e3a8a",

    margin: "0 0 10px 0",
  },

  writerText: {
    fontSize: "15px",

    lineHeight: "1.65",

    color: "#1e40af",

    maxWidth: "560px",

    margin: "0 auto 22px",
  },

  writerBtn: {
    background:
      "linear-gradient(90deg, #2563eb, #1d4ed8)",

    color: "#ffffff",

    border: "none",

    padding: "13px 28px",

    borderRadius: "10px",

    fontWeight: 800,

    fontSize: "15px",

    cursor: "pointer",

    boxShadow:
      "0 6px 18px rgba(37, 99, 235, 0.25)",
  },

  /* ERROR */

  errorPage: {
    minHeight: "100vh",

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "center",

    textAlign: "center",

    padding: "80px 20px",

    background:
      "linear-gradient(135deg, #eff6ff, #fff7ed)",
  },

  errorTitle: {
    fontSize: "2rem",

    margin: "16px 0 8px",

    fontWeight: 800,

    color: "#0f172a",
  },

  errorText: {
    color: "#64748b",

    marginBottom: "24px",
  },

  btnPrimary: {
    background:
      "linear-gradient(90deg, #2563eb, #1d4ed8)",

    color: "#ffffff",

    border: "none",

    padding: "12px 24px",

    borderRadius: "9px",

    fontWeight: 700,

    cursor: "pointer",

    boxShadow:
      "0 5px 15px rgba(37, 99, 235, 0.25)",
  },
};

/* =========================================================
   ARTICLE DATABASE
========================================================= */

const ARTICLE_DATABASE = {
  "winning-resume-summary": {
    title:
      "Crafting a Winning AI Resume Summary That Beats the ATS",

    category: "Resume Tips",

    readTime: "8 min read",

    image: "/blog-resume-summary.png",

    metaDescription:
      "Learn how to write a high-impact, metrics-driven professional summary.",

    content: (
      <>
        <p style={styles.paragraph}>
          Let’s be honest—traditional job hunting is
          completely broken. Modern corporate hiring
          panels depend heavily on{" "}
          <strong>Applicant Tracking Systems (ATS)</strong>{" "}
          to pre-screen candidates.
        </p>

        <p style={styles.paragraph}>
          Statistically, recruiters spend less than{" "}
          <strong>six seconds</strong> on their initial
          scan of a resume.
        </p>

        <h3 style={styles.subHeading}>
          🤖 The Science of ATS Keyword Optimization
        </h3>

        <p style={styles.paragraph}>
          An effective resume summary is not an
          objective statement. Nobody cares what you
          want from a company; they care what value
          you bring to the table.
        </p>

        <blockquote style={styles.quoteBlock}>
          💡 <strong>SEO Strategy Focus:</strong> If a
          job posting prioritizes
          "cross-functional stakeholder alignment,"
          those exact strings must sit inside your
          opening text.
        </blockquote>

        <h3 style={styles.subHeading}>
          💥 Overhauling Boring, Passive Bullet Points
        </h3>

        <p style={styles.paragraph}>
          The work history section is where most
          applicants drop the ball by listing basic
          operational responsibilities.
        </p>

        <h3 style={styles.subHeading}>
          📈 The "Action + Metric = Result" Formula
        </h3>

        <ul style={styles.list}>
          <li style={{ marginBottom: "6px" }}>
            ❌ <em>Weak:</em> Responsible for managing
            software updates.
          </li>

          <li>
            🎯 <em>Metrics-Driven:</em>{" "}
            <strong>Architected</strong> automated
            deployment workflows, cutting weekly
            system downtime by 42%.
          </li>
        </ul>
      </>
    ),
  },

  "writing-ai-bullet-points": {
    title:
      "Writing Actionable AI Resume Bullet Points That Get Interviews",

    category: "Bullet Points",

    readTime: "6 min read",

    image: "/blog-bullets.png",

    metaDescription:
      "Stop using boring passive statements.",

    content: (
      <>
        <p style={styles.paragraph}>
          Your professional history should read like
          an active catalog of victories, not a dry
          copy of an internal HR manual.
        </p>

        <h3 style={styles.subHeading}>
          🚀 Lead With Measurable Results
        </h3>

        <p style={styles.paragraph}>
          Recruiters skim text looking for currency
          symbols, percentage metrics, and timeframes.
        </p>
      </>
    ),
  },
};
