import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Analytics } from '@vercel/analytics/react';
import HomePage from "@/react-app/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
