import React from "react";
import Popup from "reactjs-popup";

function Link() {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
            alias. Vitae?
          </div>
          <div className="sub-header">How do you catch it?</div>
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
            alias. Vitae?
          </div>
          <div className="sub-header">What are the symptoms?</div>
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
            alias. Vitae?
          </div>
          <div className="sub-header">Diagnosis and Treatment</div>
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
            alias. Vitae?
          </div>
          <div className="sub-header">How to prevent it?</div>
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
            alias. Vitae?
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

export default Link
