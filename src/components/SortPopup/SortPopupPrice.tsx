import { memo, useRef, useState } from "react";
import TriangleSvg from "../../assets/svg/TriangleSvg";
import { setMaxPriceSort, setMinPriceSort } from "../../store/slices";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useAppDispatch } from "../../hooks/hooksHelpers";
import style from "./sortPrice.module.scss";

const SortPopupPrice = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [min, setMin] = useState("0");
    const [max, setMax] = useState("-");
    const sortRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = () => setVisiblePopup(false);
    useOnClickOutside(sortRef, handleOutsideClick);

    const onSelectItem = () => {
        if (+min > +max) {
            alert("Min value can't be greater than Max value");
            return;
        }
        if (+max <= 0 || max === "") {
            alert("Max value must be > 0");
            setMax("0");
            return;
        }
        if (+min < 0 || min === "") {
            alert("Min value must be >= 0");
            setMin("0");
            return;
        }
        dispatch(setMaxPriceSort(+max));
        dispatch(setMinPriceSort(+min));
        toggleVisiblePopup();
    };

    return (
        <div ref={sortRef} className={style.sort}>
            <div onClick={toggleVisiblePopup} className={style.sort__label}>
                <TriangleSvg
                    visiblePopup={visiblePopup}
                    activeClass={style.rotated}
                />

                <b>Sort by price:</b>
                <span>
                    <p>{min}</p>
                    <p>-</p>
                    {max === "-" ? <p>&#8734;</p> : <p>{max}</p>}
                </span>
            </div>
            {visiblePopup && (
                <div className={style.sort__popup}>
                    <ul>
                        <li>
                            <div>Min: {min}</div>
                            <input
                                type="number"
                                placeholder={"min"}
                                value={min}
                                onChange={(e) => {
                                    setMin(e.target.value);
                                }}
                            />
                        </li>
                        <li>
                            <div>Max: {max}</div>
                            <input
                                type="number"
                                placeholder={"max"}
                                value={max}
                                onChange={(e) => {
                                    setMax(e.target.value);
                                }}
                            />
                        </li>
                    </ul>
                    <div className={style.sort__popup__button}>
                        <button onClick={onSelectItem}>Set</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(SortPopupPrice);

//import {
//     ComponentType,
//     MutableRefObject,
//     NamedExoticComponent,
//     Props,
//     PropsWithChildren,
//     useEffect,
//     useRef,
//     useState
// } from "react";
//
// type M = MouseEvent & {
//     path: Node[];
// };
//
// type BaseProps = {
//     toggleVisiblePopup(): void;
//     handleOutsideClick(event: M): void;
//     sortRef: MutableRefObject<HTMLDivElement | null>;
// };
// export function withDropdown(Component: NamedExoticComponent<BaseProps<any>>) {
//     const [visiblePopup, setVisiblePopup] = useState(false);
//
//     const sortRef = useRef<HTMLDivElement | null>(null);
//
//     useEffect(() => {
//         document.body.addEventListener("click", handleOutsideClick as EventListener);
//     }, []);
//
//     const toggleVisiblePopup = () => {
//         setVisiblePopup(!visiblePopup);
//     };
//     const handleOutsideClick = (event: M) => {
//         const path = event.path || (event.composedPath && event.composedPath());
//         if (!path.includes(sortRef.current!)) {
//             setVisiblePopup(false);
//         }
//     };
//     return (
//         <Component
//             {...({ toggleVisiblePopup, handleOutsideClick } as BaseProps)}
//             toggleVisiblePopup={toggleVisiblePopup}
//             handleOutsideClick={handleOutsideClick}
//         />
//     );
// }
