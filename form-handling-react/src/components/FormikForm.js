import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik Submitted:", values);
    // هنا برضه ممكن تبعتي لموك API
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-3 max-w-md mx-auto mt-10">
        <Field name="username" type="text" placeholder="Username" className="border p-2 rounded" />
        <ErrorMessage name="username" component="p" className="text-red-500" />

        <Field name="email" type="email" placeholder="Email" className="border p-2 rounded" />
        <ErrorMessage name="email" component="p" className="text-red-500" />

        <Field name="password" type="password" placeholder="Password" className="border p-2 rounded" />
        <ErrorMessage name="password" component="p" className="text-red-500" />

        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Register with Formik
        </button>
      </Form>
    </Formik>
  );
}