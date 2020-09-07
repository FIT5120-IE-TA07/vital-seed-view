import React from 'react'
import GirlImage from "./components/images/girl.image"
import Chlamydia from "./components/sti-info/chlamydia"
import Gonorrhea from './components/sti-info/gonorrhea'
import Hpv from './components/sti-info/hpv'
import Hiv from './components/sti-info/hiv'
import Syphilis from './components/sti-info/syphilis'

function Sti() {
  return(
    <div>
      <div className="container">
      <div className="subContainer">
        <h1>STI Information</h1>
        <br />
        <br />
        <Chlamydia />
        <br />
        <Gonorrhea />
        <br />
        <Hpv />
        <br />
        <Hiv />
        <br />
        <Syphilis />
      </div>
      <div><GirlImage /></div>
    </div>
    </div>
  )
}
export default Sti
