import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import ArtistDashboard from "./pages/artist/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />

        {/* Artist */}
        <Route path="/artist" element={<ArtistDashboard />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
