import styles from "./showcase.module.css";
const ShowCase = () => {
  return (
    <div className={styles.pluginContainer}>
      <h1 className={styles.fontBoldText3xlTextRed500}>MFE Showcase</h1>
      <p className={styles.textGray500}>This is the showcase of mfe-remote-1</p>
    </div>
  );
};

export default ShowCase;
