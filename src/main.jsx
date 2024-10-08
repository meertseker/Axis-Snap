import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure these are imported

import App from "./App.jsx"; // Main App component
import Policies from "./components/Policies"; // Import Policies component
import "./index.css"; // Import your styles
import WorkWithUs from "./components/WorkWithUs.jsx";

// Render the app with routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Main page */}
        <Route path="/policies" element={<Policies />} /> {/* Policies page */}
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
