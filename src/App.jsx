import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import {useState} from "react";
import Result from "./Components/Result.jsx";

function App() {
// This is example of lifting state up which we have lifted from USerInput component so that 
// we can use the value from this state in both UserInput state and Result component this is way by which
// we can use data from childern component because if this state belo was in UserInput component then there would be need to pass data up which makes up code complex .
  const[userInputLiftedState,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

const inputIsValid=userInputLiftedState.duration>=1;

let handleChange=(inputIdentifier,newValue)=>{
  setUserInput((pervUserInput)=>{
  return {
     ...pervUserInput,
     [inputIdentifier]:parseInt(newValue)   //JS property to dynamicaly set specific key value pair
    //  Also here on thing to note is that we have used parseInt because newValue is the input value which is given by user and by default this value from input tag is string although we have set input tupe to number in UserInput component
        }
  })
 }


  return (
    <>
    <Header/>
    <UserInput userInput={userInputLiftedState} onChange={handleChange}/>
    {inputIsValid ? <Result input={userInputLiftedState}/> : <p className="center">Please enter duration greater than zero</p>}
    </>
  )
}

export default App
