// src/components/formikForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data", values);
    alert("Form submitted successfully!");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <label>Username:</label>
        <Field type="text" name="username" className="border p-2 rounded" />
        <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

        <label>Email:</label>
        <Field type="email" name="email" className="border p-2 rounded" />
        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

        <label>Password:</label>
        <Field type="password" name="password" className="border p-2 rounded" />
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;