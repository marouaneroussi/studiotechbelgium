// components/solutionCard/index.js
import styles from "./solution.module.css";

const SolutionCard = ({ title, description, icon }) => {
  return (
    <div className={styles.solutionCard}>
      <div className={styles.solutionIcon}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SolutionCard;
