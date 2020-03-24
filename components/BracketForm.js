import React from "react";
import { Formik } from "formik";
import { object, string, array } from "yup";
import BracketFormBody from "./BracketFormBody";

const bracketSchema = object().shape({
  name: string().required("Please enter a name"),
  description: string().required("Please enter a description"),
  competitors: array().of(string().required("Please enter a competitor name"))
});

const BracketForm = () => (
  <Formik
    initialValues={{
      name: "",
      description: "",
      competitors: ["Competitor 1", "Competitor 2"]
    }}
    onSubmit={async values => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(JSON.stringify(values));
    }}
    validationSchema={bracketSchema}
    // validateOnMount
  >
    <BracketFormBody />
  </Formik>
);

export default BracketForm;
