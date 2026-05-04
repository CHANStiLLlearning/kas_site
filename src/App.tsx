import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { AboutPage } from "./pages/AboutPage";
import { Footer } from "./components/Footer";
import ProgramsPage from "./pages/ProgramsPage";
import EventsPage from "./pages/EventsPage";
import PlansPage from "./pages/PlansPage";
import ContactUS from "./pages/ContactUS";
import { BlogPostDetail } from "./pages/BlogPostDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <Header />

        <main className="pt-24 min-h-[calc(100vh-400px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Fallback to Home for other menu items in this demo */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
