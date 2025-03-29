import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Home from "./components/pages/home";
import Error from "./components/pages/error";

function App() {
  return (
    <>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app/hub" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const excludeNavbarRoutes = ["/app/hub", "/login", "/sign", "*"];
  if (excludeNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
}

export default App;
