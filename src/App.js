import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import logo from "./assets/icons/logo.png";
import "./App.scss";

import Header from "./components/Header/Header";
import Aim from "./pages/Aim/Aim";
import Contacts from "./pages/Contacts/Contacts";
import Introduction from "./pages/Introduction/Introduction";
import Materials from "./pages/Materials/Materials";
import Methods from "./pages/Methods/Methods";
import Results from "./pages/Results/Results";

import IntroductionEN from "./pages/Introduction/IntroductionEN.json";
import IntroductionIT from "./pages/Introduction/IntroductionIT.json";
import AimEN from "./pages/Aim/AimEN.json";
import AimIT from "./pages/Aim/AimIT.json";
import MaterialsEN from "./pages/Materials/MaterialsEN.json";
import MaterialsIT from "./pages/Materials/MaterialsIT.json";
import ContactsEN from "./pages/Contacts/ContactsEN.json";
import ContactsIT from "./pages/Contacts/ContactsIT.json";
import ResultsEN from "./pages/Results/ResultsEN.json";
import ResultsIT from "./pages/Results/ResultsIT.json";
import MethodsEN from "./pages/Methods/MethodsEN.json";
import MethodsIT from "./pages/Methods/MethodsIT.json";
import TeamsEN from "./pages/Methods/TeamsEN.json";
import TeamsIT from "./pages/Methods/TeamsIT.json";
import PathEN from "./pages/Methods/PathEN.json";
import PathIT from "./pages/Methods/PathIT.json";

import TitleEN from "./components/Title/TitleEN.json";
import TitleIT from "./components/Title/TitleIT.json";

import flagIT from "./assets/icons/italy-flag.jpg";
import flagEN from "./assets/icons/gb-flag.png";

function App() {
  const [lang, setLang] = useState("eng");
  const [flag, setFlag] = useState(flagIT);

  const [introduction, setIntroduction] = useState(IntroductionEN);
  const [aim, setAim] = useState(AimEN);
  const [materials, setMaterials] = useState(MaterialsEN);
  const [methods, setMethods] = useState(MethodsEN);
  const [teams, setTeams] = useState(TeamsEN);
  const [path, setPath] = useState(PathEN);
  const [results, setResults] = useState(ResultsEN);
  const [contacts, setContacts] = useState(ContactsEN);
  const [title, setTitle] = useState(TitleEN);

  const changeLang = () => {
    if (lang === "eng") {
      setLang("ita");
      setFlag(flagEN);
      setIntroduction(IntroductionIT);
      setAim(AimIT);
      setMaterials(MaterialsIT);
      setMethods(MethodsIT);
      setTeams(TeamsIT);
      setPath(PathIT);
      setContacts(ContactsIT);
      setResults(ResultsIT);
      setTitle(TitleIT);
    } else {
      setLang("eng");
      setFlag(flagIT);
      setIntroduction(IntroductionEN);
      setAim(AimEN);
      setMaterials(MaterialsEN);
      setMethods(MethodsEN);
      setTeams(TeamsEN);
      setPath(PathEN);
      setContacts(ContactsEN);
      setResults(ResultsEN);
      setTitle(TitleEN);
    }
  };

  const [viewRes, setViewRes] = useState({ display: "none" });
  const [viewMet, setViewMet] = useState({ display: "none" });
  const setView = () => {
    setViewRes({ display: "none" });
    setViewMet({ display: "none" });
  };
  const setDisRes = () => {
    setViewRes({ display: "block" });
    setViewMet({ display: "none" });
  };
  const setDisMet = () => {
    setViewRes({ display: "none" });
    setViewMet({ display: "block" });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          lang={lang}
          logo={logo}
          flag={flag}
          changeLang={changeLang}
          title={title}
          setView={setView}
          viewMet={viewMet}
          viewRes={viewRes}
          setDisRes={setDisRes}
          setDisMet={setDisMet}
        />
        <Routes>
          <Route
            path="/introduction"
            element={<Introduction logo={logo} introduction={introduction} />}
          />
          <Route path="/aim" element={<Aim logo={logo} aim={aim} />} />
          <Route
            path="/materials"
            element={<Materials materials={materials} />}
          />
          <Route
            path="/methods"
            element={
              <Methods
                met={methods}
                flag={flag}
                teams={teams}
                path={path}
                logo={logo}
                setView={setView}
              />
            }
          />
          <Route path="/results" element={<Results results={results} />} />
          <Route path="/contacts" element={<Contacts contacts={contacts} />} />

          <Route path="*" element={<Navigate to="/introduction" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
