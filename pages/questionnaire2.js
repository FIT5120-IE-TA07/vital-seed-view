import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from 'react-multistep'
import StepOne from './components/forms/questionnaire/step1'
import StepTwo from './components/forms/questionnaire/step2'
import StepThree from './components/forms/questionnaire/step3'
import StepFour from './components/forms/questionnaire/step4'

const steps = [
  {
    component: <StepOne/>
  }, {
    component: <StepTwo/>
  }, {
    component: <StepThree/>
  }, {
    component: <StepFour/>
  }
]

const prevStyle = {
  'background': '#33c3f0',
  'border-width': '2px'
}
const nextStyle = {
  'background': '#33c3f0',
  'border-width': '2px'
}

const Questionnaire = () => {
  return (
    <div className='container'>
      <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
    </div>
  )
}

export default Questionnaire
