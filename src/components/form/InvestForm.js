import React, { useState } from "react";
import "./InvestForm.css";

const InvestForm = (props) => {

  const INITIAL_VALUE = {
    "current-savings" : 100,
    "yearly-contribution" : 1200,
    "expected-return" : 4,
    duration : 10
  }

  const [userInput, setUserInput] = useState(INITIAL_VALUE); 


  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    props.onCalculate(userInput);
    
    }
  const onResetHandler = (event) => {
    setUserInput(INITIAL_VALUE);
    console.log(userInput);
  }

  const onChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {...prevState, [input]: +value}
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings"  onChange={(event) => onChangeHandler("current-savings", event.target.value)}  value={userInput["current-savings"]}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution"  onChange={(event) => onChangeHandler("yearly-contribution", event.target.value)} value={userInput["yearly-contribution"]}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"  onChange={(event) => onChangeHandler("expected-return", event.target.value)} value={userInput["expected-return"]}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration"  onChange={(event) => onChangeHandler("duration", event.target.value)} value={userInput['duration']}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestForm;
