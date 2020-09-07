import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event)
    console.log(value)
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={{ fontSize: 30 }}>
        What is your age group?
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="0-14"
          control={
          <Radio
            checked={value === "0-14"}
            />}
          label="0-14" />
        <FormControlLabel control={<Radio />} label="15-19" />
        <FormControlLabel value="20-29" control={<Radio />} label="20-29" />
        <FormControlLabel value="30-39" control={<Radio />} label="30-39" />
        <FormControlLabel value="40+" control={<Radio />} label="40+" />
      </RadioGroup>
      <Button className={classes.root} variant="contained" color="primary">
        Next
      </Button>
    </FormControl>
  );
}
