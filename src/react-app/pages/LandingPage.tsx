import type React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>

            <div>
              <p style={styles.eyebrow}>Resume Builder</p>

              <h1 style={styles.title}>
                Get Your Dream Job Today
                <br />
                <span style={styles.highlight}>
                  Start Getting Interviews
                </span>
              </h1>

              <p style={styles.subtitle}>
                Instantly structure powerful resumes, executive summaries, and work history.
                Apply faster and stand out with professional confidence.
              </p>

              <div style={styles.ctaRow}>
                <button
                  style={styles.cta}
                  onClick={() => navigate("/auth")}
                >
                  🚀 Build My Resume
                </button>

                <button
                  style={styles.secondaryBtn}
                  onClick={() => navigate("/auth")}
                >
                  Login
                </button>
              </div>
            </div>

            <div>
              <img
                src="/builder-preview.png"
                alt="Resume builder preview"
                style={styles.image}
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What You Get</h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to apply faster and look more professional.
          </p>

          <div style={styles.grid3}>
            <div style={styles.card}>
              <h3 style={styles.cardHeader}>Structured Resume Builder</h3>
              <p>Organize, save, and export stronger professional career profiles in minutes.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardHeader}>Professional Summary</h3>
              <p>Instantly document a compelling profile overview that highlights your key achievements.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardHeader}>Bullet Points</h3>
              <p>Transform your work history into high-impact, metrics-driven accomplishment items that grab attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why It Works</h2>

          <div style={styles.grid4}>
            <div style={styles.card}>✔ Pass ATS filters</div>
            <div style={styles.card}>✔ Stand out to recruiters</div>
            <div style={styles.card}>✔ Save hours of writing</div>
            <div style={styles.card}>✔ Apply with confidence</div>
          </div>
        </div>
      </section>

      {/* DECOY CTA BANNER: Pushes buyers to look at the $1,500 buyout */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.ctaBanner}>
            <h2 style={styles.bannerTitle}>Are you a software developer or investor?</h2>
            <p style={styles.bannerSubtitle}>
              Acquire the complete, unrestricted Commercial Source Code License for this entire platform for a flat buyout fee.
            </p>
            <Link to="/pricing" style={styles.bannerCta}>
              View Developer Buyout Licensing plans →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    background: "#f8fafc",
    color: "#0f172a",
    minHeight: "100vh",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px",
    width: "100%",
    boxSizing: "border-box",
  },
  hero: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    padding: "80px 0",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 40,
    alignItems: "center",
  },
  eyebrow: {
    color: "#f97316",
    fontWeight: 800,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "14px",
  },
  title: {
    fontSize: "clamp(2.2rem, 5vw, 4rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: "-0.03em",
  },
  highlight: {
    color: "#f97316",
  },
  subtitle: {
    margin: "24px 0",
    color: "#475569",
    fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
    lineHeight: 1.6,
    maxWidth: 540,
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 20,
  },
  cta: {
    background: "linear-gradient(135deg, #f97316, #fb923c)",
    color: "white",
    padding: "14px 28px",
    borderRadius: 12,
    border: "none",
    fontWeight: 800,
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(249, 115, 22, 0.3)",
  },
  secondaryBtn: {
    background: "#ffffff",
    color: "#0f172a",
    padding: "14px 28px",
    borderRadius: 12,
    border: "1px solid #cbd5e1",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    maxWidth: 550,
    borderRadius: 16,
    display: "block",
    margin: "0 auto",
    boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
  },
  sectionWhite: {
    padding: "100px 0",
    background: "#ffffff",
  },
  sectionGray: {
    padding: "100px 0",
    background: "#f8fafc",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
    fontWeight: 800,
    marginBottom: 12,
    letterSpacing: "-0.02em",
  },
  sectionSubtitle: {
    textAlign: "center",
    color: "#64748b",
    maxWidth: 620,
    margin: "0 auto 50px",
    lineHeight: 1.6,
    fontSize: "18px",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 30,
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
  },
  card: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: 12,
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  },
  cardHeader: {
    margin: "0 0 10px 0",
    fontSize: "18px",
    fontWeight: 700,
  },
  priceCenterCard: {
    maxWidth: 480,
    margin: "0 auto",
    background: "#ffffff",
    padding: "40px",
    borderRadius: 24,
    border: "2px solid #f97316",
    boxShadow: "0 10px 30px rgba(249, 115, 22, 0.08)",
    textAlign: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#f97316",
    color: "white",
    fontSize: "12px",
    fontWeight: 700,
    padding: "6px 16px",
    borderRadius: "99px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  priceHeader: {
    fontSize: "24px",
    fontWeight: 800,
    margin: "10px 0 0 0",
  },
  priceRow: {
    margin: "20px 0 5px 0",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  priceAmount: {
    fontSize: "48px",
    fontWeight: 900,
    color: "#0f172a",
  },
  pricePeriod: {
    fontSize: "18px",
    color: "#64748b",
    fontWeight: 600,
    marginLeft: "4px",
  },
  priceSubtitle: {
    fontSize: "13px",
    color: "#64748b",
    margin: "0 0 30px 0",
  },
  featureList: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "35px",
  },
  featureItem: {
    margin: 0,
    fontSize: "14px",
    color: "#334155",
  },
  inlineCode: {
    background: "#f1f5f9",
    color: "#4f46e5",
    padding: "2px 6px",
    borderRadius: "4px",
    fontFamily: "monospace",
    fontSize: "12px",
  },
  priceBtn: {
    width: "100%",
    background: "#f97316",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "12px",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(249, 115, 22, 0.2)",
  },
  ctaBanner: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    padding: "48px",
    borderRadius: 20,
    textAlign: "center",
  },
  bannerTitle: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#0f172a",
    margin: 0,
  },
  bannerSubtitle: {
    color: "#475569",
    fontSize: "16px",
    margin: "12px 0 24px 0",
  },
  bannerCta: {
    display: "inline-block",
    background: "#1e40af",
    color: "white",
    padding: "14px 28px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(30, 64, 175, 0.2)",
  }
};


