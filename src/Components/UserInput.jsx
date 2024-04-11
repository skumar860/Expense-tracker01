import {useState} from 'react';

export default function UserInput({userInput,onChange}){

    // This state has been moved up level means to this component parent becausefrom there we
    // can passs data as props to more than one component based on this state value

    // const[userInput,setUserInput]=useState({
    //     initialInvestment:10000,
    //     annualInvestment:1200,
    //     expectedReturn:6,
    //     duration:10
    // })


    // same is done for this function that is moved up to parent state here it is APP component
    
    // let handleChange=(inputIdentifier,newValue)=>{
    //  setUserInput((pervUserInput)=>{
    //  return {
    //     ...pervUserInput,
    //     [inputIdentifier]:newValue   //ja property to dynamicaly set specific key value pair
    //        }
    //  })
    // }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" required 
                    value={userInput.initialInvestment}
                     onChange={(event)=>{onChange('initialInvestment',event.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required 
                    value={userInput.annualInvestment}
                    onChange={(event)=>{onChange('annualInvestment',event.target.value)}}/>
                </p>
                
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected return</label>
                    <input type="number" required 
                    value={userInput.expectedReturn}
                    onChange={(event)=>{onChange('expectedReturn',event.target.value)}} />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required 
                    value={userInput.duration}
                    onChange={(event)=>{onChange('duration',event.target.value)}}/>
                </p>
                
            </div>

        </section>
    )
}