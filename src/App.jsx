import Container from "./components/Container";
import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  
  
  let [foodItems,setFoodItems]=useState([]);
  // let [textToShow,setTextStateMethod]=useState("Food Item Entered by user");

  // instead of that we can also use this
  // let textStateArr=useState("Food Item Entered by user");
  // let textToShow=textStateArr[0];
  // let setTextStateMethod=textStateArr[1];
 
 
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      console.log(event);
      let newFoodItems = [...foodItems,event.target.value];
      setFoodItems(newFoodItems);
    }
  };

  return (
    <Container>
      <center>
        <h1 className="foodHeading GH-span">Healthy Food</h1>
      </center>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage  foodArray={foodItems} />
      <FoodItems foodArray={foodItems} />
    </Container>

  );
}

export default App;
