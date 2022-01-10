import img from "../../config/assets/gif/error.gif";
import styles from "./erorrMessage.module.scss";
import { FC, memo } from "react";

const ErrorMessage: FC = () => (
    <div className={styles.error}>
        <img src={img} alt="Error" />
        <p>Error, reload the site</p>
    </div>
);

export default memo(ErrorMessage);
