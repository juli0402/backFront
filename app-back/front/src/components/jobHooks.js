//El proyecto no funciona correctamente por un problema con el módulo jade al instalarlo y no lo pude arreglar
import { useState } from "react";

const UseSignUpForm = (schema) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return { handleSubmit, handleInputChange };
};

export default UseSignUpForm;