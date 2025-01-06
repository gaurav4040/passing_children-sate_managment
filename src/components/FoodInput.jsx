import styles from "./FoodInput.module.css"
import bgChanging from "./ColorChanging";
import { useState } from "react";

const FoodInput=({handleKeyDown,handleClick})=>{

    const [inputValue,setInputValue]=useState("");
    
    const handleChange=(event)=>{
        setInputValue(event.target.value);
    }

    const handleInputChange = () => {
        const el = document.getElementsByClassName(styles.foodInput)[0];
            bgChanging(el); 
        
    };
   
    return (
        <div className={`${styles.foodbar}`}>
            <input placeholder="Enter Food Item here" className={`${styles.foodInput} `} type="text" onChange={(event)=>{handleChange(event)}} onKeyDown={(event)=> {handleInputChange(); handleKeyDown(event);}}  />
            <button className={`${styles.button} btn btn-success`} onClick={()=>{handleClick(inputValue);}}>submit</button>
        </div>
    )
};

export default FoodInput;