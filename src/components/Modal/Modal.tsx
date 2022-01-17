import style from "./modal.module.scss";
import { FC, memo, ReactElement, useEffect } from "react";

interface IProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    children: ReactElement;
}

const Modal: FC<IProps> = ({ isOpen, setIsOpen, children }) => {
    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "scroll";
        document.body.style.marginRight = isOpen ? "17px" : "0";
    }, [isOpen]);

    return (
        <div
            className={isOpen ? style.modal + " " + style.active : style.modal}
            onClick={() => setIsOpen(false)}
        >
            <div
                className={
                    isOpen
                        ? style.modal__content + " " + style.active
                        : style.modal__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default memo(Modal);
