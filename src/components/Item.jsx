import styles from "./Item.module.css"

const Item=({foodItem_1,bought,handleBuyButton})=>{
    
    return (
        <li className={`${styles["GItem"]} list-group-item ${bought && `${styles.selected}` }`}><span className={`${styles["GI-span"]}`}>
            {foodItem_1}
            </span>
            <button className={`${styles.button} btn btn-success`} onClick={handleBuyButton}>Buy</button>
            </li>
    )
};
export default Item;