import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, errors, getValues } = useForm();

  // initial form data
  const formData = {
    gender: "",
    ageGroup: "",
  };

  // get data on submit
  const onSubmit = (data) => {
    console.log("data", data);
    formData.gender = data.gender;
    console.log("form data", formData);
  };

  // validates if no selection is made
  const validateSelection = (_) => {
    const values = getValues({ nest: true });
    console.log("validate", values);
    console.log("form data", formData);
    if (values.gender === "" || values.gender.length == 0) {
      return false;
    }
  };

  // conditional link based on if user selected radio button
  // function ConditionalLink(props) {
  //   const gender = props.formData.gender;
  //   if (gender.length == 0 || gender === "") {
  //     return <input type="submit" value="Next" />;
  //   }
  //   return (
  //     <Link href="/components/forms/questionnaire/step2">
  //       <input type="submit" value="Next" />
  //     </Link>
  //   );
  // }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>What is your gender?</label>
        <br />
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          defaultChecked={true}
          ref={register({ validate: validateSelection })}
        />
        <label>Male</label>
        <br />
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          ref={register({ validate: validateSelection })}
        />
        <label>Female</label>
        <br />
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <Link href="/components/forms/questionnaire/step2">
          <input type="submit" value="Next" />
        </Link>
        {/* <ConditionalLink formData={formData}/> */}
      </form>
    </div>
  );
}
