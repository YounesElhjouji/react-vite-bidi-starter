import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Base route with :locale */}
        <Route path="/:locale" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* Fallback to English */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
