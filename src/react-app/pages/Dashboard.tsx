import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../firebase";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  // 🔐 Protect route
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        navigate("/auth");
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (!user) return null;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Dashboard</h1>
            <p style={styles.subtitle}>Welcome back</p>
          </div>

          <button style={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* USER */}
        <div style={styles.userCard}>
          <div>
            <div style={styles.label}>Account</div>
            <div>{user.email}</div>
          </div>

          <div>
            <div style={styles.label}>Plan</div>
            <div style={styles.plan}>Free</div>
          </div>
        </div>

        {/* CARDS */}
        <div style={styles.grid}>

          {/* Resume Builder */}
          <div
            style={styles.card}
            onClick={() => navigate("/builder")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={styles.icon}>📄</div>
            <h2>Resume Builder</h2>
            <p>Create and download your resume</p>
          </div>

          {/* Summary */}
          <div
            style={styles.card}
            onClick={() => navigate("/summary")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={styles.icon}>✍️</div>
            <h2>Summary Generator</h2>
            <p>Create a professional summary</p>
          </div>

          {/* Bullet Points */}
          <div
            style={styles.card}
            onClick={() => navigate("/bullet-points")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={styles.icon}>⚡</div>
            <h2>Bullet Points</h2>
            <p>Generate strong resume bullets</p>
          </div>

        </div>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #020617, #0f172a)",
    color: "white",
    fontFamily: "system-ui",
  },

  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "60px 20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: "2rem",
  },

  subtitle: {
    color: "#94a3b8",
  },

  logout: {
    background: "transparent",
    border: "1px solid #334155",
    color: "#cbd5f5",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },

  userCard: {
    display: "flex",
    justifyContent: "space-between",
    background: "#1e293b",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },

  label: {
    fontSize: "0.8rem",
    color: "#94a3b8",
  },

  plan: {
    fontWeight: 600,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },

  card: {
    background: "linear-gradient(145deg,#1e293b,#0f172a)",
    padding: 28,
    borderRadius: 16,
    boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  icon: {
    fontSize: "32px",
    marginBottom: 10,
  },
};