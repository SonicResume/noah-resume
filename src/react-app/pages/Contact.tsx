export default function Contact() {
  const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>Contact</h1>

        <p style={styles.subtitle}>
          Reach SonicResume Group through the options below.
        </p>

        {/* Messenger */}
        <div style={styles.section}>
          <h2 style={styles.heading}>Messenger</h2>

          <button
            style={styles.button}
            onClick={() =>
              open("https://www.facebook.com/people/SonicResume-Group/61585916721060/")
            }
          >
            Open SonicResume Group Page
          </button>
        </div>

        {/* Website */}
        <div style={styles.section}>
          <h2 style={styles.heading}>Website</h2>

          <button
            style={styles.button}
            onClick={() =>
              open("https://www.sonicresume.com/contact-us-2/")
            }
          >
            Visit Contact Page
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    fontFamily: "system-ui, sans-serif",
  },
  container: {
    maxWidth: 700,
    margin: "0 auto",
    padding: "60px 20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: 10,
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: 10,
  },
  button: {
    background: "#3b82f6",
    border: "none",
    padding: "12px 20px",
    borderRadius: 8,
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
};