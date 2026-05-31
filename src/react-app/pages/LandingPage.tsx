import type React from "react";
import { useNavigate } from "react-router-dom";

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
                Instantly generate powerful resumes, bullet points, and cover letters.
                Apply faster and stand out with confidence.

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
              <h3 style={styles.cardHeader}>AI Resume Builder</h3>
              <p>Create stronger summaries, skills, and bullet points in seconds.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardHeader}>Professional Summary</h3>
              <p> Instantly generate a compelling profile summary that highlights your key achievements.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardHeader}>Bullet Pointsr</h3>
              <p>Transform your work history into high-impact, metrics-driven bullet points that grab attention.</p>
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

      {/* HOW IT WORKS */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How It Works</h2>

          <div style={styles.grid3}>
            <div style={styles.card}>
              <h3 style={styles.cardHeader}>1. Add Experience</h3>
              <p>Enter your job history, skills, education, or volunteer work.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardHeader}>2. Generate Content</h3>
              <p>Let AI create polished resume sections and application copy.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardHeader}>3. Apply Faster</h3>
              <p>Download your content and start applying with a stronger resume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Simple Pricing</h2>

          <div style={styles.grid3}>
            <div style={styles.priceCard}>
              <h3>Free</h3>
              <p style={styles.price}>$0</p>
              <p style={styles.priceFeature}>✔ Basic features</p>
              <p style={styles.priceFeature}>✔ Limited usage</p>
              <button style={styles.btn} onClick={() => navigate("/auth")}>Start</button>
            </div>

            <div style={styles.priceFeatured}>
              <h3>Pro</h3>
              <p style={styles.price}>$9</p>
              <p style={styles.priceFeature}>✔ Unlimited resumes</p>
              <p style={styles.priceFeature}>✔ AI bullet points generated</p>
              <p style={styles.priceFeature}>✔ Full application bundle</p>
              <p style={styles.priceFeature}>✔ Download in DOCX format</p>
              <button style={styles.btnPrimary} onClick={() => navigate("/auth")}>Upgrade</button>
            </div>

            <div style={styles.priceCard}>
              <h3>Yearly</h3>
              <p style={styles.price}>$29</p>
              <p style={styles.priceFeature}>✔ One-time payment</p>
              <p style={styles.priceFeature}>✔ Yearly access</p>
              <button style={styles.btn} onClick={() => navigate("/auth")}>Buy</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    background: "#f1f5f9",
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
    background: "#f8fafc",
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
    padding: 32,
    borderRadius: 16,
    border: "1px solid #e2e8f0",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(15,23,42,0.03)",
  },

  cardHeader: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: 12,
    color: "#0f172a",
  },

  priceCard: {
    background: "#ffffff",
    padding: 40,
    borderRadius: 20,
    border: "1px solid #e2e8f0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 10px 25px rgba(15,23,42,0.03)",
  },

  priceFeatured: {
    background: "#ffffff",
    padding: 40,
    borderRadius: 20,
    border: "2px solid #f97316",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    boxShadow: "0 20px 40px rgba(249,115,22,0.1)",
  },

  price: {
    fontSize: "48px",
    fontWeight: 800,
    margin: "12px 0 24px",
    color: "#0f172a",
  },

  priceFeature: {
    margin: "8px 0",
    color: "#475569",
    fontSize: "15px",
  },

  btn: {
    background: "#f1f5f9",
    color: "#0f172a",
    padding: "12px 24px",
    borderRadius: 10,
    border: "none",
    fontWeight: 700,
    width: "100%",
    marginTop: "auto",
    cursor: "pointer",
  },

  btnPrimary: {
    background: "#f97316",
    color: "white",
    padding: "12px 24px",
    borderRadius: 10,
    border: "none",
    fontWeight: 700,
    width: "100%",
    marginTop: "auto",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(249, 115, 22, 0.2)",
  },
};
