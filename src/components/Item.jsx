import styles from "./Item.module.css"

const Item=({foodItem_1})=>{
    
    return (
        <li className={`${styles["GItem"]} list-group-item`}><span className={`${styles["GI-span"]}`}>
            {foodItem_1}
            </span>
            </li>
    )
};
export default Item;