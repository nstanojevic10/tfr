import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
// import flagIT from "../../assets/italy-flag.jpg";
// import flagEN from "../../assets/gb-flag.png";

function Header({
  logo,
  flag,
  changeLang,
  title,
  setView,
  viewRes,
  viewMet,
  setDisMet,
  setDisRes,
}) {
  const active = useState();

  const [nav, setNav] = useState({ display: "none" });

  const [header] = useState({ display: "" });

  // const [flag, setFlag] = useState(flagIT);

  return (
    <div style={header} className="header row">
      <div className="col-3 logo-div">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="col-9 nav-div">
        <nav className="nav navbar navbar-expand-lg float-right">
          <button
            className="navbar-toggler btn-toggler"
            onClick={() => setNav({ display: "block" })}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={nav}>
            <button
              className="x btn"
              onClick={() => setNav({ display: "none" })}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="navbar-nav">
              {/* {navs[0].map(nav => {
                return (
                  <li className='nav-item li' key={nav.id}>
                    {nav.link === '/methods' 
                    ? <a href="http://oralfunctionmeasurement.com/en/" target='_blank' rel="noreferrer" className={'nav-link navlink ' + active} >{lang === 'eng' ? nav.nameEN : nav.nameIT}</a>  
                    : <NavLink className={'nav-link navlink ' + active} to={nav.link} >{lang === 'eng' ? nav.nameEN : nav.nameIT}</NavLink>}
                  </li>
                )
              })} */}
              <li
                className="nav-item li"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"first nav-link navlink " + active}
                  to="/introduction"
                  onClick={() => setView({ display: "none" })}
                >
                  {title.introduction}
                </NavLink>
              </li>
              <li
                className="nav-item li"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"nav-link navlink " + active}
                  to="/aim"
                  onClick={() => setView({ display: "none" })}
                >
                  {title.aim}
                </NavLink>
              </li>
              <li
                className="nav-item li"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"nav-link navlink " + active}
                  to="/materials"
                  onClick={() => setView({ display: "none" })}
                >
                  {title.materials}
                </NavLink>
              </li>
              <li
                className="nav-item li"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"nav-link navlink " + active}
                  to="/methods"
                  onClick={() => setDisMet({ display: "block" })}
                >
                  {title.methods}
                </NavLink>
              </li>
              <li
                className="nav-item li meths"
                onClick={() => setNav({ display: "none" })}
              >
                <a href="#team" className={"nav-link navlink "} style={viewMet}>
                  {title.team}
                </a>
              </li>
              <li
                className="nav-item li meths"
                onClick={() => setNav({ display: "none" })}
              >
                <a href="#path" className={"nav-link navlink "} style={viewMet}>
                  {title.path}
                </a>
              </li>
              <li
                className="nav-item li"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"nav-link navlink " + active}
                  to="/results"
                  onClick={() => setDisRes({ display: "block" })}
                >
                  {title.results}
                </NavLink>
              </li>
              <li
                className="nav-item li bibl"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"nav-link navlink "}
                  style={viewRes}
                  to="/results"
                >
                  {title.bibliography}
                </NavLink>
              </li>
              <li
                className="nav-item li bibl"
                onClick={() => setNav({ display: "none" })}
              >
                <a
                  href="http://easymyo.it/en/blog.php"
                  target="_blank"
                  rel="noreferrer"
                  className={"nav-link navlink "}
                  style={viewRes}
                >
                  {title.blog}
                </a>
              </li>
              <li
                className="nav-item li"
                onClick={() => setNav({ display: "none" })}
              >
                <NavLink
                  className={"nav-link navlink " + active}
                  to="/contacts"
                  onClick={() => setView({ display: "none" })}
                >
                  {title.contacts}
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-flag"
                  onClick={() => changeLang()}
                >
                  <img className="flag" src={flag} alt="flag" />
                </button>
              </li>
              <div className="secondRow">
                <li
                  className="nav-item li"
                  style={viewRes}
                  onClick={() => setNav({ display: "none" })}
                >
                  <NavLink
                    className={"nav-link navlink " + active}
                    to="/results"
                  >
                    {title.bibliography}
                  </NavLink>
                </li>
                <li
                  className="nav-item li"
                  style={viewRes}
                  onClick={() => setNav({ display: "none" })}
                >
                  <a
                    href="http://easymyo.it/en/blog.php"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link navlink"
                  >
                    {title.blog}
                  </a>
                </li>
                <li
                  className="nav-item li"
                  style={viewMet}
                  onClick={() => setNav({ display: "none" })}
                >
                  <a href="#team" className={"nav-link navlink " + active}>
                    {title.team}
                  </a>
                </li>
                <li
                  className="nav-item li"
                  style={viewMet}
                  onClick={() => setNav({ display: "none" })}
                >
                  <a href="#path" className={"nav-link navlink " + active}>
                    {title.path}
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
