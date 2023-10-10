import React from "react";
import { NavLink } from "react-router-dom";
import "./Methods.scss";
import Path from "./Path";
import Teams from "./Teams";

function Methods({ met, teams, path, logo, setView }) {
  return (
    <div className="methods">
      <div id="methods1" className="method met row">
        <div className="col-md-2 offset-md-1 col-12 met1">
          <h1>{met.nav1}</h1>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-1 vit">{met.vit}</div>
        <div className="col-xs-12 col-sm-12 col-md-6 met2">
          <h1>{met.firstTitle}</h1>
          <p>{met.firstText}</p>
        </div>
      </div>
      <div className="circle">
        <div className="circles circle-lg"></div>
      </div>
      <div className="circle">
        <div className="circles circle-md"></div>
      </div>
      <div className="circle">
        <div className="circles circle-sm"></div>
      </div>
      <div className="method2">
        <p className="text-center col-8 offset-2">{met.text1}</p>
        <p className="text-center col-8 offset-2">{met.text2}</p>
        <p className="text-center col-8 offset-2">{met.text3}</p>
        <a
          href="http://oralfunctionmeasurement.com/assets/files/complete_bibliography.pdf"
          target="_blank"
          rel="noreferrer"
          className="link-center"
        >
          {met.link1}
        </a>
      </div>
      <div className="circle circle-sm"></div>
      <div className="circle circle-md"></div>
      <div className="circle circle-lg"></div>
      <Teams teams={teams} met={met} />
      <Path met={met} path={path} />
      <footer>
        <NavLink
          to="/introduction"
          className="footer"
          onClick={() => setView({ display: "none" })}
        >
          <p>References</p>
          <img src={logo} alt="logo" />
        </NavLink>
      </footer>
    </div>
  );
}

export default Methods;
