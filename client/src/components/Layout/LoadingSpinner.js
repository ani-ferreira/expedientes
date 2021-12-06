import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className="spinner-border" role="status"></div>
    </div>
  );
};

export default LoadingSpinner;
