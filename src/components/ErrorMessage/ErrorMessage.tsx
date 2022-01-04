import img from "../../assets/gif/error.gif";
import styles from "./erorrMessage.module.scss";

const ErrorMessage = () => {
    return (
        <div className={styles.error}>
            <img src={img} alt="Error" />
            <p>Error, reload the site</p>
        </div>
    );
};

export default ErrorMessage;
