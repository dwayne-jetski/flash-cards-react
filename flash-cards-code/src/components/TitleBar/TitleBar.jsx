import React from "react";
import "./TitleBar.css";

function TitleBar(props) {
  return (
    <div className="row row-spacer">
      <div className="col-md-6" style={{ padding: 0 }}>
        <div className="titlebar-nav-left">
          <h1><i className="fab fa-react"></i> S.P.E.C.I.A.L Flash Card System</h1>
        </div>

      </div>
      <div className="col-md-6" style={{ textAlign: "right", paddingRight: "25px"}}>
        <div className="titlebar-nav-right"></div>
          <i class="fas fa-bars"></i>
      </div>
    </div>
  );
}
export default TitleBar;
