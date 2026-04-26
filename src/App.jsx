import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Enrollment from "./pages/Enrollment";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import LearningHub from "./pages/LearningHub";
import AppLayout from "./components/AppLayout";

export default function App() {
  const [page, setPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = (to) => setPage(to);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("landing");
  };

  if (!isLoggedIn) {
    if (page === "login") return <LoginPage onLogin={handleLogin} onBack={() => setPage("landing")} />;
    return <LandingPage onLogin={() => setPage("login")} />;
  }

  return (
    <AppLayout page={page} navigate={navigate} onLogout={handleLogout}>
      {page === "dashboard" && <Dashboard navigate={navigate} />}
      {page === "enrollment" && <Enrollment />}
      {page === "grades" && <Grades />}
      {page === "attendance" && <Attendance />}
      {page === "learning" && <LearningHub />}
    </AppLayout>
  );
}
