import Item from "./Item";
const FoodItems=({foodArray})=>{

    return (
        <ul className="list-group">
        {foodArray.map((item) => ( 
          <Item key={item} foodItem_1={item} />
          ))}  
      </ul>
    )
};

export default FoodItems;
