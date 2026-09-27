
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [plan, setPlan] = useState("Free");

 useEffect(() => {
  const unsub = onAuthStateChanged(auth, async (u) => {
    if (!u) {
      navigate("/auth");
    } else {
      setUser(u);

      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", u.email));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();

        if (data.plan) {
          setPlan(
            String(data.plan).charAt(0).toUpperCase() +
              String(data.plan).slice(1)
          );
        }
      }
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
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Dashboard</h1>
            <p style={styles.subtitle}>Welcome back</p>
          </div>

          <button style={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>

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

        <div style={styles.grid}>
          <div
            style={styles.card}
            onClick={() => navigate("/builder")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={styles.icon}>📄</div>
            <h2>Resume Builder</h2>
            <p>Create and download your resume</p>
          </div>

          <div
            style={styles.card}
            onClick={() => navigate("/summary")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={styles.icon}>✍️</div>
            <h2>Summary Generator</h2>
            <p>Create a professional summary</p>
          </div>

          <div
            style={styles.card}
            onClick={() => navigate("/bullet-points")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
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

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
     background: "#f8fafc",
    color: "#f8fafc",
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
    color: "#3b82f6",
  },
  subtitle: {
    color: "#94a3b8",
  },
  logout: {
    background: "transparent",
    border: "1px solid #334155",
    color: "#3b82f6",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
  userCard: {
    display: "flex",
    justifyContent: "space-between",
     background: "#ffffff",
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
    color: "#f97316",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },
  card: {
    background: "#2563eb",
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
