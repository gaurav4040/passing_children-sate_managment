import Container from "./components/Container";
import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  
  
  let [foodItems,setFoodItems]=useState([]);

  const addFoodItem = (value) => {
    value = value.trim(); // Remove extra spaces
    if (value === "") {
      alert("Food item cannot be empty!");
      return; // Prevent empty values
    }
    if (foodItems.includes(value)) {
      alert(`${value} is already in the list!`);
      return; // Prevent duplicates
    }
    setFoodItems((prevItems) => [...prevItems, value]);
  
  }
 
  // let [textToShow,setTextStateMethod]=useState("Food Item Entered by user");

  // instead of that we can also use this
  // let textStateArr=useState("Food Item Entered by user");
  // let textToShow=textStateArr[0];
  // let setTextStateMethod=textStateArr[1];
  const onClickPress=(value)=>{
    console.log(value);
    // let newFoodItems=[...foodItems,value];
    addFoodItem(value);
  }
  
  const onKeyDown=(event)=>{
    console.log(event.target)
    if(event.key==='Enter'){
      console.log(event);
      // let newFoodItems = [...foodItems,event.target.value];
      // setFoodItems(newFoodItems);
      addFoodItem(event.target.value);
      event.target.value="";

    }
  };

  return (
    <Container>
      <center>
        <h1 className="foodHeading GH-span">Healthy Food</h1>
      </center>
      <FoodInput handleKeyDown={onKeyDown} handleClick={onClickPress} />
      <ErrorMessage  foodArray={foodItems} />
      <FoodItems foodArray={foodItems} />
    </Container>

  );
}

export default App;
