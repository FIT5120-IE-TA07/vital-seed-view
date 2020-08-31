import React from "react";
import Popup from "reactjs-popup";

function Syphilis() {
  return (
    <Popup trigger={<button className="button"> Syphilis </button>} modal>
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Syphilis </div>
          <div className="sub-header">What is it?</div>
          <div className="content">
            {" "}
            Syphilis is a sexually transmitted infection that can cause serious health problems if it is not treated. Syphilis is divided into stages (primary, secondary, latent, and tertiary). There are different signs and symptoms associated with each stage.
          </div>
          <div className="sub-header">How do you catch it?</div>
          <div className="content">
            {" "}
            People can get syphilis by direct contact with a syphilis sore during vaginal, anal, or oral sex. You can find sores on or around the penis, vagina, or anus, or in the rectum, on the lips, or in the mouth. Syphilis can spread from an infected mother to her unborn baby.
          </div>
          <div className="sub-header">What are the symptoms?</div>
          <div className="content">
            {" "}
            Syphilis is divided into stages (primary, secondary, latent, and tertiary), with different signs and symptoms associated with each stage.
            <br />
            <br />
            A person with primary syphilis generally has a sore or sores at the original site of infection. These sores usually occur on or around the genitals, around the anus or in the rectum, or in or around the mouth. These sores are usually (but not always) firm, round, and painless. Symptoms of secondary syphilis include skin rash, swollen lymph nodes, and fever.
            <br />
            <br />
            The signs and symptoms of primary and secondary syphilis can be mild, and they might not be noticed. During the latent stage, there are no signs or symptoms.
            <br />
            <br />
            Tertiary syphilis is associated with severe medical problems. A doctor can usually diagnose tertiary syphilis with the help of multiple tests. It can affect the heart, brain, and other organs of the body.
          </div>
          <div className="sub-header">Diagnosis and Treatment</div>
          <div className="content">
            {" "}
            Primary and secondary syphilis are easy to treat with a penicillin injection. Penicillin is one of the most widely used antibiotics and is usually effective in treating syphilis. People who are allergic to penicillin will likely be treated with a different antibiotic, such as:
            <ul>
              <li>doxycycline</li>
              <li>azithromycin</li>
              <li>ceftriaxone</li>
            </ul>
            If you have neurosyphilis, you’ll get daily doses of penicillin intravenously. This will often require a brief hospital stay. Unfortunately, the damage caused by late syphilis can’t be reversed. The bacteria can be killed, but treatment will most likely focus on easing pain and discomfort.
            <br />
            <br />
            During treatment, make sure to avoid sexual contact until all sores on your body are healed and your doctor tells you it’s safe to resume sex. If you’re sexually active, your partner should be treated as well. Don’t resume sexual activity until you and your partner have completed treatment.
          </div>
          <div className="sub-header">How to prevent it?</div>
          <div className="content">
            {" "}
            The best way to prevent syphilis is to practice safe sex. Use condoms during any type of sexual contact. In addition, it may be helpful to:
            <ul>
              <li>Use a dental dam (a square piece of latex) or condoms during oral sex.</li>
              <li>Avoid sharing sex toys.</li>
              <li>Get screened for STIs and talk to your partners about their results.</li>
            </ul>
            Syphilis can also be transmitted through shared needles. Avoid sharing needles if using injected drugs
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default Syphilis
