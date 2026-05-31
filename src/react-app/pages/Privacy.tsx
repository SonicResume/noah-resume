export default function Privacy() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>Privacy Policy</h1>

        <p style={styles.text}>
          Your privacy is important to us.
        </p>

        <h2 style={styles.heading}>Information</h2>
        <p style={styles.text}>
          NOAH Resume stores the information you enter in your browser to generate your resume.
        </p>

        <h2 style={styles.heading}>Data Use</h2>
        <p style={styles.text}>
          Your data is only used to create and display your resume. We do not sell your data.
        </p>

        <h2 style={styles.heading}>Security</h2>
        <p style={styles.text}>
          We take reasonable steps to protect your information but cannot guarantee absolute security.
        </p>

        <h2 style={styles.heading}>Contact</h2>
        <p style={styles.text}>
          Contact SonicResume Group via Messenger or website.
        </p>

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
    fontFamily: "system-ui",
  },

  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "60px 20px",
  },

  title: {
    fontSize: "2rem",
    marginBottom: 20,
  },

  heading: {
    fontSize: "1.3rem",
    marginTop: 30,
    marginBottom: 10,
  },

  text: {
    color: "#cbd5f5",
    lineHeight: 1.6,
  },
};