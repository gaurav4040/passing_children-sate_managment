import styles from "./Container.module.css"
const Container =(childrens)=>{
    return (
        <div className={styles.container}>{childrens.children}</div>
    )
};

export default Container;