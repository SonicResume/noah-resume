export default function Terms() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>Terms of Service</h1>

        <p style={styles.text}>
          By using NOAH Resume, you agree to the following terms.
        </p>

        <h2 style={styles.heading}>Use of Service</h2>
        <p style={styles.text}>
          You may use this service to create resumes. Do not misuse or abuse the system.
        </p>

        <h2 style={styles.heading}>User Content</h2>
        <p style={styles.text}>
          You are responsible for all information entered into your resume.
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