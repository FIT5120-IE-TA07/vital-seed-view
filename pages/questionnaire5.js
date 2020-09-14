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
      <h1>You can have a sexually transmitted infection and be unaware that you have it.</h1>
        <br />
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
          id="male"
          value="false"
          ref={register}
        />
        <label>False</label>
        {errors.gender && (
          <p className="error-message">*Please select a gender</p>
        )}
        <br />
        <br />
        <label>What is your age group?</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="0-14"
          value="0-14"
          defaultChecked={true}
          ref={register}
        />
        <label>0-14</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="15-19"
          value="15-19"
          ref={register}
        />
        <label>15-19</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="20-29"
          value="20-29"
          ref={register}
        />
        <label>20-29</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="30-39"
          value="30-39"
          ref={register}
        />
        <label>30-39</label>
        <br />
        <input
          type="radio"
          name="ageGroup"
          id="40+"
          value="40+"
          ref={register}
        />
        <label>40+</label>
        <br />
        <br />
        <label>Do you observe the following symptoms lately?</label>
        <ul>
          <li>Painful urination</li>
          <li>Lower abdominal pain</li>
          <li>Vaginal discharge in woman</li>
          <li>Dischage from penis in men</li>
          <li>Pain during sexual intercourse in woman</li>
          <li>Bleeding between periods in woman</li>
          <li>Testicular pain in men</li>
        </ul>
        <input
          type="radio"
          name="chl"
          id="chl"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="chl"
          id="chl"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Do you observe the following symptoms lately?</label>
        <ul>
          <li>Thick, cloudy or bloody discharge from the penis or vagina</li>
          <li>Pain or burning sensation when urinating</li>
          <li>Heavy menstrual bleeding or bleeding between periods</li>
          <li>Painful, swollen testicles</li>
          <li>Painful bowel movements</li>
          <li>Anal itching</li>
        </ul>
        <input
          type="radio"
          name="gon"
          id="gon"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="gon"
          id="gon"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Do experience this often?</label>
        <ul>
          <li>Fever</li>
          <li>Headache</li>
          <li>Sore Throat</li>
          <li>Swollen lymph glands</li>
          <li>Rash</li>
          <li>Fatigue</li>
        </ul>
        <input
          type="radio"
          name="hiv1"
          id="hiv1"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="hiv1"
          id="hiv1"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Are these symptoms occuring ofen?</label>
        <ul>
          <li>Swollen lymph nodes — often one of the first signs of HIV infection</li>
          <li>Diarrhea</li>
          <li>Weight loss</li>
          <li>Fever</li>
          <li>Painful bowel movements</li>
          <li>Cough and shortness of breath</li>
        </ul>
        <input
          type="radio"
          name="hiv2"
          id="hiv2"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="hiv2"
          id="hiv2"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Are these symptoms persistent enough?</label>
        <ul>
          <li>Persistent, unexplained fatigue</li>
          <li>Soaking night sweats</li>
          <li>Shaking chills or fever higher than 100.4 F (38 C) for several weeks</li>
          <li>Swelling of lymph nodes for more than three months</li>
          <li>Chronic diarrhea</li>
          <li>Persistent headaches</li>
          <li>Unusual, opportunistic infections</li>
        </ul>
        <input
          type="radio"
          name="hiv3"
          id="hiv3"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="hiv3"
          id="hiv3"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Do you experience any of these?</label>
        <ul>
          <li>Small, flesh-colored or gray swellings in your genital area</li>
          <li>Several warts close together that take on a cauliflower shape</li>
          <li>Itching or discomfort in your genital area</li>
          <li>Bleeding with intercourse</li>
        </ul>
        <input
          type="radio"
          name="hpv"
          id="hpv"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="hpv"
          id="hpv"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Do you observe painless sore (chancre) usually on the genitals, rectum, tongue or lips?</label>
        <br />
        <input
          type="radio"
          name="syp1"
          id="syp1"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="syp1"
          id="syp1"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        <label>Do you observe the following?</label>
        <ul>
          <li>Rash marked by red or reddish-brown, penny-sized sores over any area of your body, including your palms and soles</li>
          <li>Fever</li>
          <li>Enlarged lymph nodes</li>
          <li>Fatigue and a vague feeling of discomfort</li>
          <li>Soreness and aching</li>
        </ul>
        <input
          type="radio"
          name="syp2"
          id="syp2"
          value="yes"
          defaultChecked={true}
          ref={register}
        />
        <label>Yes</label>
        <br />
        <input
          type="radio"
          name="syp2"
          id="syp2"
          value="no"
          ref={register}
        />
        <label>No</label>
        <br />
        <br />
        {/* {errors.ageGroup && (
          <p className="error-message">*Please select an age group</p>
        )} */}
        <input type="submit" />
      </form>
    </div>
  );
}
