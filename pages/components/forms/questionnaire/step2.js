import React from "react";
import Link from 'next/link'
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, errors, getValues } = useForm();


  // get data on submit
  const onSubmit = (data) => {
    console.log(data);

  };

  // validates if no selection is made
  const validateSelection = (_) => {
    const values = getValues({ nest: true });
    console.log("validate", values.ageGroup)
    if (values.ageGroup === "" || values.ageGroup.length == 0) {
      console.log("no age group selected")
      return false;
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>What is your age group?</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="0-14"
          value="0-14"
          defaultChecked={true}
          ref={register({ validate: validateSelection })}
        />
        <label>0-14</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="15-19"
          value="15-19"
          ref={register({ validate: validateSelection })}
        />
        <label>15-19</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="20-29"
          value="20-29"
          ref={register({ validate: validateSelection })}
        />
        <label>20-29</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="30-39"
          value="30-39"
          ref={register({ validate: validateSelection })}
        />
        <label>30-39</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="40+"
          value="40+"
          ref={register({ validate: validateSelection })}
        />
        <label>40+</label>
        <br />
        {errors.ageGroup && (
          <p className="error-message">*Please select an age group</p>
        )}
        <Link href="/components/forms/questionnaire/step1">
          <input type="submit" value="Previous" />
        </Link>
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}
