import styles from "../StyleSheet/ToDo.module.css";
export default function Count() {
  return (
    <div className={styles.header}>
      <h1 className={styles.words}>MY ToDo list</h1>
      <div className={styles.number}>
        <p>0/6</p>
      </div>
    </div>
  );
}
