import Header from "./components/header/header";
import InvestForm from "./components/form/InvestForm";
import ResultTab from "./components/table/ResultTab";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];  // per-year results are stored in this array

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  } 

  return (
    <div>
      <Header />
      <InvestForm onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign : "center"}}> <b>No Value Yet</b></p>}
      {userInput && <ResultTab data={yearlyData} initialValue={userInput["current-savings"]} />}
    </div>
  );
}

export default App;
