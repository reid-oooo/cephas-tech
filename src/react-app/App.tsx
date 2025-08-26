import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import HomePage from "@/react-app/pages/Home";
import Privacy from "@/react-app/pages/Privacy";
import Terms from "@/react-app/pages/Terms";
import ThankYou from "@/react-app/pages/ThankYou";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
