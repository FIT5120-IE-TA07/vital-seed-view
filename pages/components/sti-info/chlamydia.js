import React from "react";
import Popup from "reactjs-popup";

function Chlamydia() {
  return (
    <Popup trigger={<button className="button"> Chlamydia </button>} modal>
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Chlamydia </div>
          <div className="sub-header">What is it?</div>
          <div className="content">
            {" "}
            Chlamydia is a common STD that can cause serious, permanent damage to a woman’s reproductive system. This can make it difficult or impossible for her to get pregnant later on.
            <br />
            <br />
            Chlamydia can also cause a potentially fatal ectopic pregnancy (pregnancy that occurs outside the womb).
          </div>
          <div className="sub-header">How do you catch it?</div>
          <div className="content">
            {" "}
            Chlamydia is transmitted through sexual contact with the penis, vagina, mouth, or anus of an infected partner. Ejaculation does not have to occur for chlamydia to be transmitted or acquired. Chlamydia can also be spread perinatally from an untreated mother to her baby during childbirth, resulting in ophthalmia neonatorum (conjunctivitis) or pneumonia in some exposed infants.
            <br />
            <br />
            Newborn babies can acquire chlamydia from their mother during birth. People who have had chlamydia and have been treated may get infected again if they have sexual contact with a person infected with chlamydia.
          </div>
          <div className="sub-header">What are the symptoms?</div>
          <div className="content">
            {" "}
            Chlamydia is often known as the “silent infection.” That’s because people with chlamydia may not experience symptoms at all.
            If a woman contracts the STI, it may take several weeks before any symptoms appear.
            Some of the most common symptoms of chlamydia in women include:
            <ul>
              <li>painful sexual intercourse (dyspareunia)</li>
              <li>vaginal discharge</li>
              <li>burning sensation during urination</li>
              <li>pain in the lower abdomen</li>
              <li>inflammation of the cervix (cervicitis)</li>
              <li>bleeding between periods</li>
            </ul>
            In some women, the infection can spread to the fallopian tubes, which may cause a condition called pelvic inflammatory disease (PID). PID is a medical emergency.
            The symptoms of PID are:
            <ul>
              <li>fever</li>
              <li>severe pelvic pain</li>
              <li>nausea</li>
              <li>abnormal vaginal bleeding between periods</li>
            </ul>
            Chlamydia can also infect the rectum. Women may not experience symptoms if they have a chlamydia infection in the rectum. If symptoms of a rectal infection do occur, however, they may include rectal pain, discharge, or bleeding.
            <br />
            <br />
            Additionally, women can develop a throat infection if they perform oral sex on someone with the infection. Though it’s possible to contract it without knowing it, symptoms of a chlamydia infection in your throat include cough, fever, and sore throat.

          </div>
          <div className="sub-header">Diagnosis and Treatment</div>
          <div className="content">
            {" "}
            The good news is that chlamydia is easy to treat. Since it’s bacterial in nature, it’s treated with antibiotics.
            <br />
            <br />
            Azithromycin is an antibiotic usually prescribed in a single, large dose. Doxycycline is an antibiotic that must be taken twice per day for about one week.
            Other antibiotics may also be given. No matter which antibiotic is prescribed, dosage instructions should be followed carefully to make sure the infection clears up fully.
            <br />
            <br />
            This can take up to two weeks, even with the single-dose medications.
            During the treatment time, it’s important not to have sex. It’s still possible to transmit and contract chlamydia if exposed again, even if you’ve treated a previous infection.
          </div>
          <div className="sub-header">How to prevent it?</div>
          <div className="content">
            {" "}
            The surest way for a sexually active person to avoid contracting chlamydia is to use a condom during sexual intercourse.
            To practice safe sex, it’s recommended to:
            <ul>
              <li>Use protection with each new partner.</li>
              <li>Get tested regularly for STIs with new partners.</li>
              <li>nausea</li>
              <li>Avoid having oral sex, or use protection during oral sex, until a partner has been screened for STIs.</li>
            </ul>
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

export default Chlamydia
