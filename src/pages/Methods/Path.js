import React from "react";
import "./Path.scss";

function Path({ met, path }) {
  return (
    <div id="path">
      <div>
        <h1 className="text-center">{met.title}</h1>
      </div>
      <div className="analysis">
        <div className="row analysis-row">
          {path.map((pat) => {
            return (
              <div className="col-xl-4 col-lg-12 col-12 analysis-col">
                <div className="analisis-column">
                  <h2>
                    {pat.id}
                    {pat.h2}
                  </h2>
                  <h3>{pat.h3des}</h3>
                  <p>{pat.description}</p>
                  <h3>{pat.h3rec}</h3>
                  <p>{pat.recipients}</p>
                </div>
                <a
                  href={pat.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  {pat.btn}
                </a>
              </div>
            );
          })}
          <div className="col-xl-4 col-lg-12 col-12 offset-xl-4 analysis-col analysis-col2">
            <h2>{met.h2}</h2>
            <h3>{met.h3des}</h3>
            <p>{met.description}</p>
            <h3>{met.h3rec}</h3>
            <p>{met.recipients}</p>
            <a
              href="http://oralfunctionmeasurement.com/assets/files/web.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              {met.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
