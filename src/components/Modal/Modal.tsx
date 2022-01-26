import style from "./modal.module.scss";
import React, { FC, memo, ReactElement, useEffect, useState } from "react";
import Confetti from "react-confetti";

interface IProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    children: ReactElement;
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
    const [isConfetti, setIsConfetti] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "scroll";
        document.body.style.marginRight = isOpen ? "17px" : "0";
    }, [isOpen]);

    return (
        <div
            className={isOpen ? style.modal + " " + style.active : style.modal}
            onClick={() => {
                setIsOpen(false);
            }}
        >
            {isConfetti && (
                <Confetti recycle={false} numberOfPieces={800} gravity={0.3} />
            )}
            <div
                className={
                    isOpen
                        ? style.modal__content + " " + style.active
                        : style.modal__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                {React.cloneElement(children, {
                    setIsConfetti: setIsConfetti
                })}
            </div>
        </div>
    );
};

export default memo(Modal);
