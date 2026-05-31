import type React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// 1. THE MAIN FUNCTION COMPONENT SITS AT THE TOP
export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [likes, setLikes] = useState(64);
  const [voted, setVoted] = useState(false);

  const article = ARTICLE_DATABASE[slug as keyof typeof ARTICLE_DATABASE];

  if (!article) {
    return (
      <div style={styles.errorPage}>
        <span style={{ fontSize: "4rem" }}>🕵️‍♂️</span>
        <h2 style={{ fontSize: "2rem", margin: "16px 0 8px", fontWeight: 800 }}>Article Missing!</h2>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>We couldn't find that article asset string in our data layer.</p>
        <button style={styles.btnPrimary} onClick={() => navigate("/")}>🚀 Back to Safety</button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <button style={styles.backBtn} onClick={() => navigate("/")}>
          ⬅ Back to Home Base
        </button>

        <article style={styles.articleCard}>
          <div style={styles.badge}>🔥 {article.category}</div>
          <h1 style={styles.title}>{article.title}</h1>
          
          <div style={styles.meta}>
            <span>NOAH Resume SEO Insights</span>
            <span>•</span>
            <span>{article.readTime} ⏱</span>
          </div>

          <img 
            src={article.image} 
            alt={article.title} 
            style={styles.featuredImage} 
            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
          />

          <hr style={styles.divider} />
          <div style={styles.body}>{article.content}</div>
          <hr style={styles.divider} />

          <div style={styles.hypeBox}>
            <p style={{ margin: "0 0 12px 0", fontWeight: 700, color: "#0f172a" }}>Did this SEO resume strategy help you out?</p>
            <button 
              style={voted ? styles.votedBtn : styles.hypeBtn} 
              onClick={() => { if(!voted) { setLikes(likes + 1); setVoted(true); } }}
            >
              🚀 Boost Article ({likes})
            </button>
          </div>

          <div style={styles.writerCta}>
            <div style={styles.writerEmoji}>✍️✨</div>
            <h3 style={styles.writerTitle}>Need High-Ranking Content or Perfect Copy?</h3>
            <p style={styles.writerText}>
              Want entertaining, professional, and heavily optimized blogs like this for your own brand? 
              From deep-dive articles to copy that ranks on Google—we can write it all. <strong>Just contact us to get started!</strong>
            </p>
            <button 
              style={styles.writerBtn} 
              onClick={() => window.location.href = "mailto:sonicresumegroupe@gmail.com: Premium Copywriting Services"}
            >
              📬 Hire Our Copywriting Team
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

// 2. STYLES OBJECT DECLARED MIDDLE-LOW
const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    background: "#f1f5f9",
    minHeight: "100vh",
    padding: "40px 20px"
  },
  container: {
    maxWidth: 740,
    margin: "0 auto",
    width: "100%"
  },
  backBtn: {
    background: "#ffffff",
    border: "1px solid #cbd5e1",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: "20px",
    color: "#475569"
  },
  articleCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
    border: "1px solid #e2e8f0"
  },
  badge: {
    display: "inline-block",
    background: "#ffedd5",
    color: "#ea580c",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "16px",
    textTransform: "uppercase"
  },
  title: {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: 900,
    lineHeight: 1.2,
    margin: "0 0 16px 0",
    color: "#0f172a",
    letterSpacing: "-0.02em"
  },
  meta: {
    display: "flex",
    gap: "10px",
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "24px"
  },
  featuredImage: {
    width: "100%",
    maxHeight: "360px",
    objectFit: "cover",
    borderRadius: "16px",
    marginBottom: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  divider: {
    border: "none",
    height: "1px",
    background: "#e2e8f0",
    margin: "30px 0"
  },
  body: {
    fontSize: "17px",
    lineHeight: "1.75",
    color: "#334155"
  },
  paragraph: {
    marginBottom: "20px"
  },
  subHeading: {
    fontSize: "22px",
    fontWeight: 800,
    margin: "36px 0 16px 0",
    color: "#0f172a"
  },
  quoteBlock: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "12px",
    margin: "24px 0",
    borderLeft: "4px solid #f97316",
    fontSize: "16px"
  },
  list: {
    margin: "16px 0 24px 20px",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  hypeBox: {
    textAlign: "center",
    background: "#f8fafc",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    marginBottom: "40px"
  },
  hypeBtn: {
    background: "#f97316",
    color: "#ffffff",
    border: "none",
    padding: "10px 24px",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(249,115,22,0.2)"
  },
  votedBtn: {
    background: "#ffedd5",
    color: "#ea580c",
    border: "none",
    padding: "10px 24px",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "default"
  },
  writerCta: {
    background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    border: "2px dashed #3b82f6",
    padding: "32px",
    borderRadius: "20px",
    textAlign: "center"
  },
  writerEmoji: {
    fontSize: "2.5rem",
    marginBottom: "12px"
  },
  writerTitle: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#1e3a8a",
    margin: "0 0 10px 0"
  },
  writerText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#1e40af",
    maxWidth: "560px",
    margin: "0 auto 20px"
  },
  writerBtn: {
    background: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "12px",
    fontWeight: 800,
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)"
  },
  errorPage: {
    textAlign: "center",
    padding: "80px 20px"
  },
  btnPrimary: {
    background: "#f97316",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "pointer"
  }
};

// 3. ✅ PLACED LAST: DATA OBJECT READS THE INSTANTIATED STYLES WITHOUT CRASHING
const ARTICLE_DATABASE = {
  "winning-resume-summary": {
    title: "Crafting a Winning AI Resume Summary That Beats the ATS",
    category: "Resume Tips",
    readTime: "8 min read",
    image: "/blog-resume-summary.png",
    metaDescription: "Learn how to write a high-impact, metrics-driven professional summary.",
    content: (
      <>
        <p style={styles.paragraph}>
          Let’s be honest—traditional job hunting is completely broken. Modern corporate hiring panels depend heavily on 
          <strong> Applicant Tracking Systems (ATS)</strong> to pre-screen candidates.
        </p>
        <p style={styles.paragraph}>
          Statistically, recruiters spend less than <strong>six seconds</strong> on their initial scan of a resume.
        </p>
        <h3 style={styles.subHeading}>🤖 The Science of ATS Keyword Optimization</h3>
        <p style={styles.paragraph}>
          An effective resume summary is not an objective statement. Nobody cares what you want from a company; they care what value you bring to the table.
        </p>
        <blockquote style={styles.quoteBlock}>
          💡 <strong>SEO Strategy Focus:</strong> If a job posting prioritizes "cross-functional stakeholder alignment," those exact strings must sit inside your opening text.
        </blockquote>
        <h3 style={styles.subHeading}>💥 Overhauling Boring, Passive Bullet Points</h3>
        <p style={styles.paragraph}>
          The work history section is where most applicants drop the ball by listing basic operational responsibilities.
        </p>
        <h3 style={styles.subHeading}>📈 The "Action + Metric = Result" Formula</h3>
        <ul style={styles.list}>
          <li style={{ marginBottom: "6px" }}>❌ <em>Weak:</em> Responsible for managing software updates.</li>
          <li>🎯 <em>Metrics-Driven:</em> <strong>Architected</strong> automated deployment workflows, cutting weekly system downtime by 42%.</li>
        </ul>
      </>
    )
  },
  "writing-ai-bullet-points": {
    title: "Writing Actionable AI Resume Bullet Points That Get Interviews",
    category: "Bullet Points",
    readTime: "6 min read",
    image: "/blog-bullets.png",
    metaDescription: "Stop using boring passive statements.",
    content: (
      <>
        <p style={styles.paragraph}>
          Your professional history should read like an active catalog of victories, not a dry copy of an internal HR manual.
        </p>
        <h3 style={styles.subHeading}>🚀 Lead With Measurable Results</h3>
        <p style={styles.paragraph}>
          Recruiters skim text looking for currency symbols, percentage metrics, and timeframes.
        </p>
      </>
    )
  }
};
