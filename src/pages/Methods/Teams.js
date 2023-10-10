import React from "react";
import claudia from "../../assets/teams/2.png";
import federica from "../../assets/teams/3.png";
import redento from "../../assets/teams/4.png";
import francesco from "../../assets/teams/5.png";
import riccardo from "../../assets/teams/6.png";

function Teams({ teams, met }) {
  const playername = [claudia, federica, redento, francesco, riccardo];

  return (
    <div id="team" className="method">
      <br></br>
      <br></br>
      <h1 className="text-center">{met.team}</h1>
      <h2 className="text-center">{met.text4}</h2>
      <div className="row team-row">
        <div className="col-1 off"></div>
        {teams.map((team) => {
          return (
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-10 player">
              <div className="card team">
                <img
                  src={playername[team.id - 1]}
                  alt={team.name}
                  className="card-image"
                ></img>
                <h3 className="card-title">{team.name}</h3>
                <p className="team-info">{team.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Teams;
