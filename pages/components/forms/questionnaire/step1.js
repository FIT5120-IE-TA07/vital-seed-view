import React from "react";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>What is your gender?</label>
      <br />
      <input type="radio" name="male" id="male" value="male" />
      <label for="male">Male</label>
      <br />
      <input type="radio" name="female" id="female" value="female" />
      <label for="female">Female</label>
      <
    </form>
  );
}
