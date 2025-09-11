import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { ContactPage } from "./Pages/ContactPage";
import { AgentRegistration } from "./Pages/AgentRegistration";
import { AboutPage } from "./Pages/AboutPage";
import { BusinessPage } from "./Pages/BusinessPage";
import { ClientPage } from "./Pages/ClientPage";
import { useEffect } from "react";
import { HealthInsurance } from "./Pages/HealthInsurance";
import { LifeInsurance } from "./Pages/LifeInsurance";
import { Annuities } from "./Pages/Annuities";
import { Register } from "./Pages/Register";

function App() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/business" exact element={<BusinessPage />} />
          <Route path="/client" exact element={<ClientPage />} />
          <Route path="/contact-us" exact element={<ContactPage />} />
          <Route
            path="/agent-registration"
            exact
            element={<AgentRegistration />}
          />
          <Route path="/health-insurance" exact element={<HealthInsurance />} />
          <Route path="/life-insurance" exact element={<LifeInsurance />} />
          <Route path="/annuities" exact element={<Annuities />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
