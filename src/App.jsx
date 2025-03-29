import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Home from "./components/pages/home";
import Error from "./components/pages/error";
import Job from "./components/pages/job/job";
import User from "./components/pages/user/user";
import Smtp from "./components/pages/smtp/smtp";

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
          <Route path="/app/job" element={<Job />} />
          <Route path="/app/user" element={<User />} />
          <Route path="/app/smtp" element={<Smtp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

function ConditionalNavbar() {
  const routes = [
    "/app/hub",
    "/login",
    "/sign",
    "/",
    "/app/job",
    "/app/user",
    "/app/smtp",
  ];
  const location = useLocation();
  if (routes.includes(location.pathname)) {
    return null;
  } else if (!routes.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
}

export default App;
