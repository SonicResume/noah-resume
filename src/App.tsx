import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./react-app/components/Layout";

// Pages
import LandingPage from "./react-app/pages/LandingPage";
import BulletPoints from "./react-app/pages/BulletPoints";
import ResumeBuilder from "./react-app/pages/ResumeBuilder";
import Summary from "./react-app/pages/Summary";
import Contact from "./react-app/pages/Contact";
import AuthPage from "./react-app/pages/AuthPage";
import Dashboard from "./react-app/pages/Dashboard";
import Privacy from "./react-app/pages/Privacy";
import Terms from "./react-app/pages/Terms";
import BlogPage from "./react-app/pages/BlogPage";
// Import the new pricing tier page we created
import PricingPage from "./react-app/pages/Pricing"; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Home */}
        <Route index element={<LandingPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />

        {/* Main Features */}
        <Route path="bullet-points" element={<BulletPoints />} />
        <Route path="summary" element={<Summary />} />
        <Route path="builder" element={<ResumeBuilder />} />

        {/* Pricing Layout */}
        <Route path="pricing" element={<PricingPage />} />

        {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Contact */}
        <Route path="contact" element={<Contact />} />

        {/* Legal */}
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />

        {/* Auth */}
        <Route path="auth" element={<AuthPage />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />

      </Route>
    </Routes>
  );
}
