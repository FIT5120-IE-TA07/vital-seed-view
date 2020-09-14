import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, errors, getValues } = useForm();

  // get data on submit
  const onSubmit = (data) => {
    console.log(data);
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
    <div>
      <h1>How Much Do You Know About STDs?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Q.1) You can have a sexually transmitted infection and be unaware that you have it.</h4>
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
        <input
          type="radio"
          name="q1"
          id="q1"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <h4>You can prevent acquiring an STIs by using a condom correctly and consistently.</h4>
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
        <input
          type="radio"
          name="q2"
          id="q2"
          value="false"
          ref={register}
        />
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
