"use client";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../firebase";

export default function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  // ✅ Fixed: Changed initial declaration from window access to default false to stop SSR builds from crashing
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    // ✅ Safely compute window size on the client side only
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Trigger instantly on layout mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setOpen(false);
  };

  // ✅ Appended: Added Blog structural links down into the nav list automatically
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog/winning-resume-summary", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>

          {/* LOGO */}
          <Link to="/" style={styles.logoWrap}>
            <img src="/logo.png" alt="logo" style={styles.logo} />
            <span style={styles.brand}>NOAH Resume</span>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <>
              <div style={styles.links}>
                {navItems.map((item) => {
                  const isActive =
                    item.path === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{
                        ...styles.link,
                        ...(isActive ? styles.active : {}),
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div style={styles.auth}>
                {!user ? (
                  <Link to="/auth" style={styles.primaryBtn}>
                    Get Started
                  </Link>
                ) : (
                  <>
                    <Link to="/dashboard" style={styles.link}>
                      Dashboard
                    </Link>
                    <button style={styles.logout} onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                )}
              </div>
            </>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button style={styles.menuBtn} onClick={() => setOpen(true)}>
              ☰
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* OVERLAY */}
          <div style={styles.overlay} onClick={() => setOpen(false)} />

          {/* SIDE MENU */}
          <div style={styles.mobileMenu}>
            <button style={styles.close} onClick={() => setOpen(false)}>
              ✕
            </button>

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                style={styles.mobileLink}
              >
                {item.label}
              </Link>
            ))}

            {!user ? (
              <Link
                to="/auth"
                style={styles.mobileBtn}
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            ) : (
              <>
                <Link to="/dashboard" style={styles.mobileLink} onClick={() => setOpen(false)}>
                  Dashboard
                </Link>
                <button style={styles.mobileBtn} onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

/* ---------- STYLES ---------- */

const styles: Record<string, React.CSSProperties> = {
  nav: {
    width: "100%",
    background: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box", // Prevents desktop alignment layout shifts
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
  },

  logo: {
    height: 32,
    width: "auto",
  },

  brand: {
    fontWeight: 700,
    color: "#0f172a",
  },

  links: {
    display: "flex",
    gap: 16,
  },

  link: {
    textDecoration: "none",
    color: "#64748b",
    fontWeight: 500,
    padding: "6px 12px",
    borderRadius: 6,
    transition: "all 0.2s ease",
  },

  active: {
    background: "#f97316",
    color: "white",
  },

  auth: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },

  primaryBtn: {
    background: "#f97316",
    color: "white",
    padding: "6px 14px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  },

  logout: {
    background: "transparent",
    border: "1px solid #e2e8f0",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: 500,
    color: "#0f172a",
  },

  menuBtn: {
    fontSize: 24,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#0f172a",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.3)", // Modern tailwind slate overlay look
    zIndex: 99,
  },

  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: 260,
    height: "100%",
    background: "#ffffff",
    zIndex: 100,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    boxSizing: "border-box",
    boxShadow: "-10px 0 30px rgba(15, 23, 42, 0.05)",
  },

  mobileLink: {
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: 600,
    padding: "10px 0",
    borderBottom: "1px solid #f1f5f9", // Cleaner list isolation spacing
  },

  mobileBtn: {
    background: "#f97316",
    color: "white",
    padding: "12px",
    borderRadius: 8,
    border: "none",
    marginTop: 10,
    fontWeight: 700,
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
  },

  close: {
    alignSelf: "flex-end",
    background: "transparent",
    border: "none",
    fontSize: 20,
    cursor: "pointer",
    color: "#64748b",
    padding: 8,
  },
};
