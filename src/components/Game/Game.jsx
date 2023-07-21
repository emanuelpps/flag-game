import React, { useEffect, useState, useRef } from "react";
import "./Game.css";
import { Link } from "react-router-dom";
import { requestOptions } from "../../Api/Api";

export default function Game() {
  const [allCountrys, setAllCountrys] = useState([]);
  const [loadRandomFlag, setLoadRandomFlag] = useState({});
  const [correctFlag, setCorrectFlag] = useState([]);
  //const [loadRandomAnswers, setLoadRandomAnswers] = useState([]);
  const [answerSelect, setAnswerSelect] = useState();
  const inputRef = useRef("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllCountrys(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    
    console.log("useEffect => allCountrys:",allCountrys);
    // Llamada a randomFlag después de que allCountrys se haya actualizado
    randomFlag();
    correctAnswer();
    //randomAnswers();
  }, [allCountrys]);

  // Buscar entre todos los paises 4 paises aleatorios
  function randomFlag() {
    const loadFlag = [];
    for (let index = 0; index < 4; index++) {
      const firstFlagLoad = Math.floor(Math.random() * allCountrys?.length);
      loadFlag.push(allCountrys[firstFlagLoad]);
    }
    setLoadRandomFlag(loadFlag);
    console.log("=> loadRandomFlag:",loadRandomFlag);
  }

  //
  /*function randomAnswers() {
    const element = [];
    for (let index = 0; index < allCountrys.length; index++) {
      Math.floor(Math.random() * allCountrys?.length);
      element.push(allCountrys[index]);
      if (element.length === 5) {
        setLoadRandomAnswers(element);
      }
    }
  }*/

  // de los 4 paises seleccionados tomar uno como respuesta correcta
  function correctAnswer() {
    const correctResponse = Math.floor(Math.random() * loadRandomFlag?.length);
    setCorrectFlag(loadRandomFlag[correctResponse]);
  }
  
    
  console.log("=> correctFlag:",correctFlag);

  function handleValue(e) {
    setAnswerSelect(e.target.value);
  }

  function checkAnswerHandler() {
    console.log("answerSelectEn Handler",answerSelect);
    //console.log("correctFlag",correctFlag.name.common);
    if(answerSelect === correctFlag.name.common){
      alert("correct")
    } else{
      alert("incorrect")
    }
/*     const answerSelect = inputRef.current.value;
    console.log("answerselect", answerSelect);
    console.log("select", correctAnswer()?.name.common);
    return answerSelect === correctAnswer()?.name.common
      ? alert("correct")
      : alert("incorrect"); */
  }

  //console.log(allCountrys);
  //console.log(loadRandomFlag);
  //console.log("correct", correctFlag);
  //console.log("asnwer", loadRandomAnswers);

  //console.log('answerselect',checkAnswerHandler());

  return (
    <div className="game">
      <div className="points">
        <h2>Points: 0</h2>
      </div>
      <div className="game-card">
        <div className="flag-query">
          {/* Agregar comprobación para asegurarse de que loadRandomFlag tenga datos */}
          {loadRandomFlag?.length ? (
            <img src={correctFlag?.flags.png} alt="" /> // Corregir aquí
          ) : (
            <p>Loading flag...</p>
          )}
        </div>
        <div className="answer-choice">
          <div className="answer">
            <ul class="list-answer">
              {loadRandomFlag?.length > 0 ? (
                loadRandomFlag?.map((answer, index) => (
                  <li key={index} className="list-group-item bg-transparent">
                    <input
                      className="form-check-input mt-3"
                      type="radio"
                      name="radioNoLabel"
                      id={`radioNoLabel${index}`}
                      value={answer?.name.common}
                      aria-label="..."
                      ref={inputRef}
                      onChange={handleValue}
                    />
                    <label
                      className="form-check-label mx-5 label-font"
                      htmlFor={`radioNoLabel${index}`}
                    >
                      {answer?.name.common}
                    </label>
                  </li>
                ))
              ) : (
                <div>loading...</div>
              )}
            </ul>
          </div>
        </div>
        <div className="button-check-container">
          <button
            className="button-check btn btn-success fs-5"
            onClick={() => checkAnswerHandler()}
          >
            Check?
          </button>
        </div>
      </div>
      <div className="go-back-button">
        <Link className="btn btn-warning fs-5" to="/guess-flag/">
          GO BACK
        </Link>
      </div>
      <div className="next-button">
        <Link to="/guess-flag/" className="btn btn-primary fs-5">
          NEXT {">>"}
        </Link>
      </div>
      <div className="life">
        <h2>Lifes: 5</h2>
      </div>
    </div>
  );
}
