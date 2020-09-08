import React from "react";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>What is your gender?</label>
      <br />
      <input type="radio" name="gender" id="male" value="male" ref={register} />
      <label for="male">Male</label>
      <br />
      <input type="radio" name="gender" id="female" value="female" ref={register} />
      <label for="female">Female</label>
      <br />
      <input type="submit" label="Next"/>
    </form>
  );
}
