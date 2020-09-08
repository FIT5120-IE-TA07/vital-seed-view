import React from "react";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, errors, getValues} = useForm();

  // get data on submit
  const onSubmit = (data) => {
    // console.log(data);
  };

  // validates if no selection is made
  const validateSelection = _ => {
    const values = getValues({ nest: true })
    // console.log("validate", values.gender)
    if (values.gender === "" || (values.gender.length) == 0) {
      // console.log("no gender selected")
      return false
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>What is your gender?</label>
      <br />
      <input type="radio" name="gender" id="male" value="male" ref={register({ validate: validateSelection })} />
      <label for="male">Male</label>
      <br />
      <input type="radio" name="gender" id="female" value="female" ref={register({ validate: validateSelection })} />
      <label for="female">Female</label>
      <br />
      {errors.gender && <p className="error-message">*Please select a gender</p>}
      <input type="submit" value="Next"/>
    </form>
  );
}
