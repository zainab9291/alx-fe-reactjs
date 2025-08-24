// src/App.jsx
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // لاحظي small letters

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center mt-4">User Registration</h1>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center">Controlled Form</h2>
        <RegistrationForm />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center">Formik Form</h2>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;