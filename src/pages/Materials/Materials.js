import React from "react";
import "./Materials.scss";
import myowise from "../../assets/icons/logo-myowise.jpg";
import tracymed from "../../assets/icons/logo-tracymed.svg";
import easymyo from "../../assets/icons/easymyo.png";

function Materials({ materials }) {
  const logos = [myowise, tracymed, easymyo];

  return (
    <div className="material">
      {materials.map((material) => {
        return (
          <div key={material.id} className="row materials">
            <div className="col-md-2 offset-md-1 materials1">
              <img
                className={"logo" + material.id}
                src={logos[material.id - 1]}
                alt={material.title}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-1 vit">
              {material.vit}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 materials2">
              <h1 className="naslov">{material.title}</h1>
              <p className="text">{material.text}</p>
              <a href={material.href} target="_blank" rel="noreferrer">
                {material.more}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Materials;
