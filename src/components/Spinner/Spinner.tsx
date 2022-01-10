import React, { FC, memo } from "react";
import "./spinner.css";

const Spinner: FC = () => {
    return (
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default memo(Spinner);
