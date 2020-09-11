import React from "react";
import { useLocation } from "react-router-dom";
import Link from "next/link"
import { StateMachineProvider, createStore } from "little-state-machine";
// import {DevTool} from "little-state-machine-devtools";
import Step1 from "./components/forms/questionnaire/step1";
import Step2 from "./components/forms/questionnaire/step2";
import Result from "./components/forms/questionnaire/result";

// import "./styles/forms.css";

createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    age: "",
    yearsOfExp: "",
  },
});

const Questionnaire = () => {
  // const location = useLocation();
  return (
    <>
      <nav className="container">
        <ul className="steps">
          <li>
            <Link to="/components/forms/questionnaire/step1">Step 1</Link>
          </li>
          <li>
            <Link to="/components/forms/questionnaire/step2">Step 2</Link>
          </li>
          <li>
            <Link to="/components/forms/questionnaire/result">Result</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Questionnaire
