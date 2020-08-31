import React from "react";
import Popup from "reactjs-popup";

function Gonorrhea() {
  return (
    <Popup trigger={<button className="button"> Gonorrhea </button>} modal>
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Gonorrhea </div>
          <div className="sub-header">What is it?</div>
          <div className="content">
            {" "}
            Gonorrhea is caused by infection with the bacterium Neisseria gonorrhoeae. It tends to infect warm, moist areas of the body, including the:
            <ul>
              <li>urethra (the tube that drains urine from the urinary bladder)</li>
              <li>eyes</li>
              <li>throat</li>
              <li>vagina</li>
              <li>anus</li>
              <li>female reproductive tract (the fallopian tubes, cervix, and uterus)</li>
            </ul>
          </div>
          <div className="sub-header">How do you catch it?</div>
          <div className="content">
            {" "}
            Gonorrhea passes from person to person through unprotected oral, anal, or vaginal sex. People with numerous sexual partners or those who don’t use a condom are at greatest risk of infection.
            <br />
            <br />
            Behaviors that make a person more likely to engage in unprotected sex also increase the likelihood of infection. These behaviors include alcohol abuse and illegal drug abuse, particularly intravenous drug use. 
          </div>
          <div className="sub-header">What are the symptoms?</div>
          <div className="content">
            {" "}
            Many women don’t develop any overt symptoms of gonorrhea. When women do develop symptoms, they tend to be mild or similar to other infections, making them more difficult to identify. Gonorrhea infections can appear much like common vaginal yeast or bacterial infections. Symptoms include:
            <ul>
              <li>discharge from the vagina (watery, creamy, or slightly green)</li>
              <li>pain or burning sensation while urinating</li>
              <li>the need to urinate more frequently</li>
              <li>heavier periods or spotting</li>
              <li>sore throat</li>
              <li>pain upon engaging in sexual intercourse</li>
              <li>sharp pain in the lower abdomen</li>
              <li>fever</li>
            </ul>
          </div>
          <div className="sub-header">Diagnosis and Treatment</div>
          <div className="content">
            {" "}
            Modern antibiotics can cure most gonorrhea infections. Most states also provide free diagnosis and treatment at health clinics.
          </div>
          <div className="sub-header">How to prevent it?</div>
          <div className="content">
            {" "}
            The safest way to prevent gonorrhea or other STDs is through abstinence. If you do engage in sex, always use a condom. It’s important to be open with your sexual partners, get regular STD testing, and find out if they’ve been tested.
            <br />
            <br />
            If your partner is showing signs of a possible infection, avoid any sexual contact with them. Ask them to seek medical attention to rule out any possible infection that can be passed on.
            <br />
            <br />
            You’re at a higher risk of contracting gonorrhea if you’ve already had it or any other STDs. You’re also at a higher risk if you have multiple sexual partners or a new partner.
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

export default Gonorrhea
