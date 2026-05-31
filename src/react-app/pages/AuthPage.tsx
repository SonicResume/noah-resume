import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";

type Mode = "login" | "signup";

export default function AuthPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleReset = async () => {
    let userEmail = email;

    if (!userEmail) {
      userEmail = prompt("Enter your email") || "";
    }

    if (!userEmail) return;

    try {
      await sendPasswordResetEmail(auth, userEmail);
      alert("Reset email sent");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* TOP BAR */}
        <div style={styles.topBar}>
          <span style={styles.home} onClick={() => navigate("/")}>
            ← Home
          </span>
        </div>

        {/* LOGO */}
        <img src="/logo.png" alt="logo" style={styles.logo} />

        {/* TITLE */}
        <h1 style={styles.title}>
          {mode === "login" ? "Welcome back" : "Create account"}
        </h1>

        <p style={styles.subtitle}>
          {mode === "login"
            ? "Sign in to continue"
            : "Start building your resume"}
        </p>

        {/* INPUTS */}
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button style={styles.button} onClick={handleSubmit}>
          {mode === "login" ? "Login" : "Sign Up"}
        </button>

        {/* FORGOT PASSWORD */}
        {mode === "login" && (
          <div style={styles.forgot}>
            <span onClick={handleReset}>Forgot password?</span>
          </div>
        )}

        {/* SWITCH MODE */}
        <div style={styles.switch}>
          {mode === "login" ? (
            <span>
              Don’t have an account?{" "}
              <b onClick={() => setMode("signup")} style={styles.link}>
                Sign up
              </b>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <b onClick={() => setMode("login")} style={styles.link}>
                Login
              </b>
            </span>
          )}
        </div>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(180deg,#f8fafc,#e2e8f0)",
    fontFamily: "system-ui",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    padding: "30px 25px",
    borderRadius: 16,
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
  },

  topBar: {
    display: "flex",
    justifyContent: "flex-start",
  },

  home: {
    fontSize: "0.85rem",
    color: "#3b82f6",
    cursor: "pointer",
  },

  logo: {
    width: 60,
    margin: "0 auto 10px",
  },

  title: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#0f172a",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#64748b",
    marginBottom: 10,
  },

  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "1px solid #cbd5e1",
    background: "#f1f5f9",
    color: "#0f172a",
  },

  button: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },

  forgot: {
    fontSize: "0.8rem",
    color: "#3b82f6",
    cursor: "pointer",
    textAlign: "right",
  },

  switch: {
    marginTop: 10,
    fontSize: "0.85rem",
    color: "#64748b",
    textAlign: "center",
  },

  link: {
    color: "#3b82f6",
    cursor: "pointer",
  },
};