import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "../layout/app-header";
import Login from "../pages/login";
import Hero from "../pages/hero-section";
import PatientDetails from "../pages/patient-details";
import Patient from "../pages/patient-view";
import PatientList from "../pages/patient-list";

const Index = () => {
  return (
    <Fragment>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/overview" element={<Hero />} />
        <Route path="/patient-details" element={<PatientDetails />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient-list" element={<PatientList />} />
      </Routes>
    </Fragment>
  );
};

export default Index;
