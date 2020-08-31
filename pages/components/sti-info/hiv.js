import React from "react";
import Popup from "reactjs-popup";

function Hiv() {
  return (
    <Popup trigger={<button className="button"> HIV </button>} modal>
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> HIV </div>
          <div className="sub-header">What is it?</div>
          <div className="content">
            {" "}
            HIV can damage the immune system and raise the risk of contracting other viruses or bacteria and certain cancers. If left untreated, it can lead to stage 3 HIV, known as AIDS. But with today’s treatment, many people living with HIV don’t ever develop AIDS.
            <br />
            <br />
            HIV is a virus that damages the immune system. The immune system helps the body fight off infections. Untreated HIV infects and kills CD4 cells, which are a type of immune cell called T cells. Over time, as HIV kills more CD4 cells, the body is more likely to get various types of infections and cancers.
          </div>
          <div className="sub-header">How do you catch it?</div>
          <div className="content">
            {" "}
            People can only get HIV by coming into direct contact with certain body fluids from a person with HIV who has a detectable viral load. These fluids are:
            <ul>
              <li>Blood</li>
              <li>Semen (cum) and pre-seminal fluid</li>
              <li>Rectal fluids</li>
              <li>Vaginal fluids</li>
              <li>Breast milk</li>
            </ul>
            For transmission to occur, the HIV in these fluids must get into the bloodstream of an HIV-negative person through a mucous membrane (found in the rectum, vagina, mouth, or tip of the penis); open cuts or sores; or by direct injection.
          </div>
          <div className="sub-header">What are the symptoms?</div>
          <div className="content">
            {" "}
            Both men and women with HIV are at increased risk of sexually transmitted infections (STIs). However, women may be less likely than men to notice small spots or other changes to their genitals. In addition, women with HIV are at increased risk of:
            <ul>
              <li>recurrent vaginal yeast infections</li>
              <li>other vaginal infections, including bacterial vaginosis</li>
              <li>pelvic inflammatory disease (PID)</li>
              <li>menstrual cycle changes</li>
              <li>human papillomavirus (HPV), which can cause genital warts and lead to cervical cancer</li>
            </ul>
            While not related to HIV symptoms, another risk for women with HIV is that the virus can be transmitted to a baby during pregnancy. However, antiretroviral therapy is considered safe during pregnancy. Women who are treated with antiretroviral therapy are at very low risk of passing HIV to their baby during pregnancy and delivery.
            <br />
            <br />
            Breastfeeding is also affected in women with HIV. The virus can be passed to a baby through breast milk. In the United States and other settings where formula is accessible and safe, it’s recommended that women with HIV not breastfeed their babies. For these women, use of formula is encouraged. Options besides formula include pasteurized banked human milk.
          </div>
          <div className="sub-header">Diagnosis and Treatment</div>
          <div className="content">
            {" "}
            Treatment should begin as soon as possible after a diagnosis of HIV, regardless of viral load. The main treatment for HIV is antiretroviral therapy, a combination of daily medications that stop the virus from reproducing. This helps protect CD4 cells, keeping the immune system strong enough to fight off disease.
            <br />
            <br />
            Antiretroviral therapy helps keep HIV from progressing to AIDS. It also helps reduce the risk of transmitting HIV to others.
            When treatment is effective, the viral load will be “undetectable.” The person still has HIV, but the virus is not visible in test results.
            <br />
            <br />
            However, the virus is still in the body. And if that person stops taking antiretroviral therapy, the viral load will increase again and the HIV can again start attacking CD4 cells.
          </div>
          <div className="sub-header">How to prevent it?</div>
          <div className="content">
            {" "}
            The most common way for HIV to spread is through anal or vaginal sex without a condom. This risk can’t be completely eliminated unless sex is avoided entirely, but the risk can be lowered considerably by taking a few precautions. A person concerned about their risk of HIV should:
            <ul>
              <li>Get tested for HIV. It’s important they learn their status and that of their partner.</li>
              <li>Get tested for other sexually transmitted infections (STIs). If they test positive for one, they should get it treated, because having an STI increases the risk of contracting HIV.</li>
              <li>Use condoms. They should learn the correct way to use condoms and use them every time they have sex, whether it’s through vaginal or anal intercourse. It’s important to keep in mind that pre-seminal fluids (which come out before male ejaculation) can contain HIV.</li>
              <li>Limit their sexual partners. They should have one sexual partner with whom they have an exclusive sexual relationship.</li>
              <li>Take their medications as directed if they have HIV. This lowers the risk of transmitting the virus to their sexual partner.</li>
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

export default Hiv
