import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div style={styles.page}>

      {/* NAV */}
      <Navbar />

      {/* CONTENT */}
      <main style={styles.main}>
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0f172a", // dark full-page background
  },

  main: {
    flex: 1,
    width: "100%",
    margin: 0,
    padding: 0,          
    maxWidth: "100%",    
  },
};