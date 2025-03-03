// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import NotFound from "@/pages/NotFound";
import Login2 from "@/pages/Login2";
import SignUp2 from "@/pages/SignUp2";
import Start from "@/pages/Start";
import Plan from "@/pages/Plan";
import Success from "@/pages/Success";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiesPolicy from "@/pages/CookiesPolicy";
import GeneralConditions from "@/pages/GeneralConditions";
import LegalNotice from "@/pages/LegalNotice";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/success" element={<Success />} />


      {/* Our new special routes */}
      <Route path="/login2" element={<Login2 />} />
      <Route path="/signup2" element={<SignUp2 />} />

      <Route path="/start" element={<Start />} />
      <Route path="*" element={<NotFound />} />

      {/* Legal Pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/general-conditions" element={<GeneralConditions />} />
      <Route path="/legal-notice" element={<LegalNotice />} />

    </Routes>

  );
}

export default App;
