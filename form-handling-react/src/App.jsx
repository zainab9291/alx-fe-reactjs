import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">User Registration</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;