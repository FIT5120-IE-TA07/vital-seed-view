import React from "react";
import Link from "next/link";
import { useState } from 'react'
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, errors, getValues } = useForm();
  const { formData, setFormData } = useState({})

  // get data on submit
  const onSubmit = (data) => {
    // console.log(data);
    () => setFormData({...formData, data})
    console.log(formData)
  };

  // validates if no selection is made
  // const validateSelection = (_) => {
  //   const values = getValues({ nest: true });
  //   console.log("validate", values)
  //   if (values.ageGroup === "" || values.ageGroup.length == 0) {
  //     console.log("no age group selected")
  //     return false;
  //   }
  // };

  return (
    <div style={{ marginLeft: "33%" }}>
      <h1>How Much Do You Know About STDs?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>
          You can have a sexually transmitted infection and be unaware that you
          have it.
        </h4>
        <input
          type="radio"
          name="q1"
          id="q1"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q1" id="q1" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>
          You can prevent acquiring an STIs by using a condom correctly and
          consistently.
        </h4>
        <input
          type="radio"
          name="q2"
          id="q2"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q2" id="q2" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>
          Pregnant mothers with sexually transmitted infections can transmit the
          infection to their unborn child or during childbirth.
        </h4>
        <input
          type="radio"
          name="q3"
          id="q3"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q3" id="q3" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>Who’s most likely to have STDs?</h4>
        <input
          type="radio"
          name="q4"
          id="q4"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q4" id="q4" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can get herpes by sharing a glass.</h4>
        <input
          type="radio"
          name="q5"
          id="q5"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q5" id="q5" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>The Pill protects against STDs.</h4>
        <input
          type="radio"
          name="q6"
          id="q6"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q6" id="q6" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>A negative test result means you’re in the clear.</h4>
        <input
          type="radio"
          name="q7"
          id="q7"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q7" id="q7" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>There’s medicine to cure each STD.</h4>
        <input
          type="radio"
          name="q8"
          id="q8"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q8" id="q8" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>Sex toys can spread STDs</h4>
        <input
          type="radio"
          name="q9"
          id="q9"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q9" id="q9" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>What's the most common STD?</h4>
        <input
          type="radio"
          name="q10"
          id="q10"
          value="true"
          defaultChecked={true}
          ref={register}
        />
        <label>True</label>
        <br />
        <input type="radio" name="q10" id="q10" value="false" ref={register} />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
