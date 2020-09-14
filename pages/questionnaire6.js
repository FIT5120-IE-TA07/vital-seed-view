import React from 'react'
import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
// import store from './components/utils/store'
import showResults from './components/utils/showResults'
import WizardForm from './components/forms/WizardForm'
import dynamic from 'next/dynamic'

const Store = dynamic(
  () => import('./components/utils/store'),
  { ssr: false }
)

const store = Store()

function Questionnnaire() {
  return (
    <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2>Wizard Example</h2>
        <WizardForm onSubmit={showResults} />
        {/* <Values form="wizard" /> */}
      </div>
    </Provider>
  )
}

export default Questionnnaire