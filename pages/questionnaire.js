import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "25%",
    marginRight: "25%",
  },
  questionContainer: {
    borderBottomStyle: "solid",
    // borderBottomColor: "grey"
  },
});

export default function Questionnaire() {
  const { register, handleSubmit, errors, getValues } = useForm();
  const classes = useStyles();

  const [score, setScore] = useState(0);

  // get data on submit
  const onSubmit = (data) => {
    // // console.log(data);
    // () => setFormData({ ...formData, data });
    // console.log(formData);
    let count = 0;
    if (data.q1 === "true") {
      count += 1;
    }
    if (data.q2 === "true") {
      count += 1;
    }
    if (data.q3 === "true") {
      count += 1;
    }
    if (data.q4 === "true") {
      count += 1;
    }
    if (data.q5 === "true") {
      count += 1;
    }
    if (data.q6 === "false") {
      count += 1;
    }
    if (data.q7 === "false") {
      count += 1;
    }
    if (data.q8 === "false") {
      count += 1;
    }
    if (data.q9 === "true") {
      count += 1;
    }
    if (data.q10 === "hpv") {
      count += 1;
    }
    console.log("count: ", count);

    () => setScore(count);
    console.log("score: ", score);
    // for(const [key, value] of Object.entries(data)) {
    //   // console.log(`${key}: ${value}`)
    //   if(value)
    // }
  };

  useEffect(() => {
    console.log("score after redenering: ", score);
  }, [score]);

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
    <div className={classes.root}>
      <h4>How Much Do You Know About STDs?</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.questionContainer}>
          <h6>
            You can have a sexually transmitted infection and be unaware that
            you have it.
          </h6>
          <input
            type="radio"
            name="q1"
            id="q1"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q1" id="q1" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>
            You can prevent acquiring an STIs by using a condom correctly and
            consistently.
          </h6>
          <input
            type="radio"
            name="q2"
            id="q2"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q2" id="q2" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>
            Pregnant mothers with sexually transmitted infections can transmit
            the infection to their unborn child or during childbirth.
          </h6>
          <input
            type="radio"
            name="q3"
            id="q3"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q3" id="q3" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>Who’s most likely to have STDs?</h6>
          <input
            type="radio"
            name="q4"
            id="q4"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q4" id="q4" value="false" ref={register} />
          True
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>You can get herpes by sharing a glass.</h6>
          <input
            type="radio"
            name="q5"
            id="q5"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q5" id="q5" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>The Pill protects against STDs.</h6>
          <input
            type="radio"
            name="q6"
            id="q6"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q6" id="q6" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>A negative test result means you’re in the clear.</h6>
          <input
            type="radio"
            name="q7"
            id="q7"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q7" id="q7" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>There’s medicine to cure each STD.</h6>
          <input
            type="radio"
            name="q8"
            id="q8"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q8" id="q8" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>Sex toys can spread STDs</h6>
          <input
            type="radio"
            name="q9"
            id="q9"
            value="true"
            defaultChecked={true}
            ref={register}
          />
          True
          <br />
          <input type="radio" name="q9" id="q9" value="false" ref={register} />
          False
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <div className={classes.questionContainer}>
          <h6>What's the most common STD?</h6>
          <input
            type="radio"
            name="q10"
            id="q10"
            value="gon"
            defaultChecked={true}
            ref={register}
          />
          Gonorrhea
          <br />
          <input type="radio" name="q10" id="q10" value="her" ref={register} />
          Herpes
          <br />
          <input type="radio" name="q10" id="q10" value="hpv" ref={register} />
          HPV
          {errors.gender && (
            <p className="error-message">*Please select a gender</p>
          )}
          <br />
        </div>
        <p>Score: {score}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
