import React from "react";
import "./Home.css";
import flagAustralia from "../../assets/flag_australia.png";
import flagGreece from "../../assets/flag_greece.png";
import flagSpain from "../../assets/flag_spain.png";
import flagBelgium from "../../assets/flag_belgium.png";
import flagSouthKorea from "../../assets/flag_south-korea.png";
import flagNorway from "../../assets/flag_norway.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <div className="home-title">
          <h1>¿Can You Guess The Flag?</h1>
        </div>
        <div className="flags-box">
          <div className="flag-1">
            <img src={flagAustralia} alt="" className="flag"></img>
          </div>
          <div className="flag-2">
            <img src={flagGreece} alt="" className="flag"></img>
          </div>
          <div className="flag-3">
            <img src={flagSpain} alt="" className="flag"></img>
          </div>
          <div className="flag-4">
            <img src={flagBelgium} alt="" className="flag"></img>
          </div>
          <div className="flag-5">
            <img src={flagSouthKorea} alt="" className="flag"></img>
          </div>
          <div className="flag-6">
            <img src={flagNorway} alt="" className="flag"></img>
          </div>
          <div className="enter-button"><Link to='/guess-flag/game'><button className="btn btn-outline-success px-5 fs-5">ENTER</button></Link></div>
        </div>
      </div>
    </div>
  );
}
