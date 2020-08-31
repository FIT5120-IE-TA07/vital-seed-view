import React from "react";
import Popup from "reactjs-popup";

function Hpv() {
  return (
    <Popup trigger={<button className="button"> HPV </button>} modal>
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> HPV </div>
          <div className="sub-header">What is it?</div>
          <div className="content">
            {" "}
            Human papillomavirus (HPV) is a virus that can be passed from one person to another through intimate skin-to-skin or sexual contact. HPV infection can be serious. It can cause cancers, including cancer of the cervix, vulva, vagina, penis and anus, and some head and neck cancers.
            <br />
            <br />
            Types 16 and 18 cause up to 80% of the cervical cancers in women. Not all HPV infections lead to cancer.
          </div>
          <div className="sub-header">How do you catch it?</div>
          <div className="content">
            {" "}
            Anyone who’s had sexual skin-to-skin contact is at risk for HPV infection. Other factors that may put someone at an increased risk for HPV infection include:
            <ul>
              <li>increased number of sexual partners</li>
              <li>unprotected vaginal, oral, or anal sex</li>
              <li>a weakened immune system</li>
              <li>having a sexual partner that has HPV</li>
            </ul>
            If you contract a high-risk type of HPV, some factors can make it more likely that the infection will continue and may develop into cancer:
            <ul>
              <li>a weakened immune system</li>
              <li>having other STIs, such as gonorrhea, chlamydia, and herpes simplex</li>
              <li>chronic inflammation</li>
              <li>having many children (cervical cancer)</li>
              <li>using oral contraceptives over a long period of time (cervical cancer)</li>
              <li>using tobacco products (mouth or throat cancer)</li>
              <li>receiving anal sex (anal cancer)</li>
            </ul>
          </div>
          <div className="sub-header">What are the symptoms?</div>
          <div className="content">
            {" "}
            It’s estimated that 80 percent Trusted Source of women will contract at least one type of HPV during their lifetime. Like with men, many women that get HPV don’t have any symptoms and the infection goes away without causing any health problems.
            <br />
            <br />
            Some women may notice that they have genital warts, which can appear inside the vagina, in or around the anus, and on the cervix or vulva.
            Make an appointment with your doctor if you notice any unexplained bumps or growths in or around your genital area.
            <br />
            <br />
            Some strains of HPV can cause cervical cancer or cancers of the vagina, anus, or throat. Regular screening can help detect the changes associated with cervical cancer in women. Additionally, DNA tests on cervical cells can detect strains of HPV associated with genital cancers.
          </div>
          <div className="sub-header">Diagnosis and Treatment</div>
          <div className="content">
            {" "}
            HPV testing can be performed for women with a Pap test (commonly known as a Pap smear), which is a screening test for cervical cancer. HPV testing is only available for women, and it can determine if HPV is present. If present, the test can determine whether the HPV is a low- or a high-risk type.
            <br />
            <br />
            The HPV test isn’t recommended as routine screening for women under the age of 30. This is because many women will have some strain of HPV by that age. Most of these will clear spontaneously without intervention.
            <br />
            <br />
            Treatment is directed to the macroscopic (e.g., genital warts) or pathologic precancerous lesions caused by HPV. Subclinical genital HPV infection typically clears spontaneously; therefore, specific antiviral therapy is not recommended to eradicate HPV infection. Precancerous lesions are detected through cervical cancer screening.

          </div>
          <div className="sub-header">How to prevent it?</div>
          <div className="content">
            {" "}
            Two HPV vaccines can prevent diseases and cancers caused by HPV. The Cervarix and Gardasil vaccines protect against most cases of cervical cancer; Gardasil also protects against most genital warts. HPV vaccines are recommended routinely for boys and girls aged 11–12 years; either vaccine is recommended for girls/women, these vaccines are safe and effective.
            <br />
            <br />
            Condoms used consistently and correctly can lower the chances of acquiring and transmitting HPV and developing HPV-related diseases (e.g., genital warts and cervical cancer). However, because HPV can infect areas not covered by a condom, condoms might not fully protect against HPV.
            <br />
            <br />
            Limiting number of sex partners can reduce the risk for HPV. However, even persons with only one lifetime sex partner can get HPV.
            Abstaining from sexual activity is the most reliable method for preventing genital HPV infection.
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

export default Hpv
