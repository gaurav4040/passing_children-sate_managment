import Item from "./Item";
import { useState } from "react";
const FoodItems=({foodArray})=>{
  
  let [activeItems,setActiveItems] = useState([]);

  let onBuyButton=(item,event)=>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }
    return (
        <ul className="list-group">
        {foodArray.map((item) => ( 
          <Item key={item} 
          foodItem_1={item}
          bought={activeItems.includes(item)}
           handleBuyButton={(event)=>onBuyButton(item,event)} />
          ))}  
      </ul>
    )
};

export default FoodItems;
