
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebase";

type Mode = "login" | "signup";

export default function AuthPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const getFirebaseError = (error: unknown) => {
    if (!(error instanceof FirebaseError)) {
      return "Something went wrong. Please try again.";
    }

    switch (error.code) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";

      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Invalid email or password.";

      case "auth/email-already-in-use":
        return "An account with this email already exists.";

      case "auth/weak-password":
        return "Password should be at least 6 characters.";

      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";

      case "auth/network-request-failed":
        return "Network error. Check your internet connection.";

      default:
        return "Authentication failed. Please try again.";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      alert("Enter email and password.");
      return;
    }

    try {
      setLoading(true);

      if (mode === "login") {
        await signInWithEmailAndPassword(auth, cleanEmail, password);
      } else {
        await createUserWithEmailAndPassword(
          auth,
          cleanEmail,
          password
        );
      }

      navigate("/dashboard");
    } catch (error) {
      alert(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    let userEmail = email.trim();

    if (!userEmail) {
      userEmail = prompt("Enter your email")?.trim() || "";
    }

    if (!userEmail) return;

    try {
      setLoading(true);

      await sendPasswordResetEmail(
        auth,
        userEmail.toLowerCase()
      );

      alert("Password reset email sent. Check your inbox.");
    } catch (error) {
      alert(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* LOGO */}
        <div style={styles.logoWrap}>
          <img
            src="/logo.png"
            alt="Logo"
            style={styles.logo}
          />
        </div>

        {/* TITLE */}
        <h1 style={styles.title}>
          {mode === "login"
            ? "Welcome back"
            : "Create account"}
        </h1>

        <p style={styles.subtitle}>
          {mode === "login"
            ? "Sign in to continue"
            : "Start building your resume"}
        </p>

        {/* BLUE / ORANGE ACCENT */}
        <div style={styles.accent}>
          <span style={styles.blueLine} />
          <span style={styles.orangeLine} />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={styles.form}>

          <label htmlFor="email" style={styles.label}>
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <label htmlFor="password" style={styles.label}>
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete={
              mode === "login"
                ? "current-password"
                : "new-password"
            }
            required
            minLength={6}
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          {/* BUTTON */}
          <button
            type="submit"
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        {/* FORGOT PASSWORD */}
        {mode === "login" && (
          <div style={styles.forgot}>
            <button
              type="button"
              onClick={handleReset}
              style={styles.forgotButton}
              disabled={loading}
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* SWITCH MODE */}
        <div style={styles.switch}>
          {mode === "login" ? (
            <span>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                style={styles.link}
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                style={styles.link}
              >
                Login
              </button>
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
    background:
      "linear-gradient(135deg, #eff6ff 0%, #f8fafc 55%, #fff7ed 100%)",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    padding: 20,
    boxSizing: "border-box",
  },

  card: {
    width: "100%",
    maxWidth: 390,
    padding: "36px 28px",
    borderRadius: 20,
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
    boxSizing: "border-box",
  },

  logoWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 4,
  },

  logo: {
    width: 68,
    height: 68,
    objectFit: "contain",
  },

  title: {
    textAlign: "center",
    fontSize: "1.6rem",
    fontWeight: 750,
    color: "#0f172a",
    margin: 0,
  },

  subtitle: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#64748b",
    margin: "0 0 4px",
  },

  accent: {
    display: "flex",
    justifyContent: "center",
    gap: 5,
    margin: "2px 0 10px",
  },

  blueLine: {
    width: 35,
    height: 4,
    borderRadius: 10,
    background: "#2563eb",
  },

  orangeLine: {
    width: 18,
    height: 4,
    borderRadius: 10,
    background: "#f97316",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  label: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#334155",
    marginTop: 5,
  },

  input: {
    width: "100%",
    padding: "13px 14px",
    borderRadius: 9,
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    color: "#0f172a",
    boxSizing: "border-box",
    outline: "none",
    fontSize: "0.95rem",
  },

  button: {
    width: "100%",
    marginTop: 12,
    padding: "13px 14px",
    borderRadius: 9,
    border: "none",
    background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "0.95rem",
    boxShadow: "0 6px 16px rgba(37, 99, 235, 0.25)",
  },

  forgot: {
    textAlign: "right",
    marginTop: 2,
  },

  forgotButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    fontSize: "0.8rem",
    color: "#2563eb",
    cursor: "pointer",
  },

  switch: {
    marginTop: 12,
    fontSize: "0.85rem",
    color: "#64748b",
    textAlign: "center",
  },

  link: {
    border: "none",
    background: "transparent",
    padding: 0,
    color: "#f97316",
    cursor: "pointer",
    fontWeight: 700,
  },
};