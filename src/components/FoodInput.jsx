import styles from "./FoodInput.module.css"
import bgChanging from "./ColorChanging";

const FoodInput=({handleKeyDown})=>{
    const handleInputChange = () => {
        const el = document.getElementsByClassName(styles.foodInput)[0];
            bgChanging(el); 
        
    };
    
    return (
        <div className={`${styles.foodbar}`}>
            <input placeholder="Enter Food Item here" className={`${styles.foodInput} `} type="text" onKeyDown={(event)=> {handleInputChange(); handleKeyDown(event);}}  />
            <button className={`${styles.button} btn btn-success`}>submit</button>
        </div>
    )
};

export default FoodInput;