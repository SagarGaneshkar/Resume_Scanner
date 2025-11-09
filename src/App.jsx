import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import JobDescriptionMatcher from "./pages/JobDescriptionMatcher.jsx";
import JobRecommendations from "./pages/JobRecommendations.jsx";
import { ResumeProvider } from "./context/ResumeContext.js";
import JobMatcher from "./pages/JobMatcher.jsx";

function App() {
  return (
    <ResumeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/job-matcher" element={<JobDescriptionMatcher />} />
            <Route path="/jobmatcher" element={<JobMatcher />} />
            <Route
              path="/job-recommendations"
              element={<JobRecommendations />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ResumeProvider>
  );
}

export default App;
