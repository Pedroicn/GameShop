import ReactDOM from "react-dom";
import loaderImg from "../../assets/loader.gif";
import styles from "./Loader.module.scss";

function Loader() {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
}

export default Loader;
