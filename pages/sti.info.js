import React from 'react'
import GirlImage from "./components/images/girl.image"
import Chlamydia from "./components/sti-info/chlamydia"
import Gonorrhea from './components/sti-info/gonorrhea'
import Hpv from './components/sti-info/hpv'
import Hiv from './components/sti-info/hiv'
import Syphilis from './components/sti-info/syphilis'
import TableauChart from "./components/tableau/chart";
import Grid from "@material-ui/core/Grid";

function Sti() {
  return (
      <div className="container">
        <div className="topImage">
          <img src="/sexEducation.jpg"></img>
        </div>
        <div className="containerText">
          <h5>What is STI?</h5>
          <h6 >
            A sexually transmitted infection (STI) is an infection you get from
            someone else during sexual activity. There are lots of different
            kind of STIs, all with different preventions, symptoms and treatment
            options.
          </h6>
          <h6>
            With the right protection, good communication and regular sexual
            health checks, most STIs can be avoided or easily managed.
          </h6>
        </div>
        <div className="subContainer">
          <div className="stiButton"><Chlamydia /></div>
          <div className="stiButton"><Gonorrhea /></div>
          <div className="stiButton"><Hpv /></div>
          <div className="stiButton"><Hiv /></div>
          <div className="stiButton"><Syphilis /></div>
        </div>
      <div className="chart"><TableauChart /></div>
      </div>
  )
}
export default Sti
