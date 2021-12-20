import React from "react";
import "./spinner.css";

const Spinner = function () {
    return (
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
