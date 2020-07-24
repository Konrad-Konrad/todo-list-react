import React from "react";
import "./style.css";

const Main = ({headerH1, headerForm, buttonsHeaderH2, listHeaderH2, paragraphButtons, paragraphList}) => (

  <div className="main">
    <h1 className="main__headerH1">{headerH1}</h1>
    <h2 className="main__headerH2">{buttonsHeaderH2}</h2>
    {headerForm}
    <div className="main__paragraph">
      <h2 className="main__headerH2">{listHeaderH2}</h2>
      {paragraphButtons}
    </div>
    {paragraphList}
  </div>
);

export default Main;

