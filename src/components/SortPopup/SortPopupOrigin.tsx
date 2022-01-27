import Select from "react-select";
import makeAnimated from "react-select/animated";
import style from "./sortPrice.module.scss";
import { setOriginSort } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { originSelector } from "../../store/selectors";
import { memo, useRef, useState } from "react";
import { originsOptions, TData } from "../../constants/SortOptions";
import useDebounce from "../../hooks/useDebounce";

const animatedComponents = makeAnimated();

const SortPopupOrigin = () => {
    const [state, setState] = useState(0);
    const ref = useRef(onSelectItem);
    console.log(ref.current == onSelectItem);

    const dispatch = useAppDispatch();
    const origins = useAppSelector(originSelector);
    const debounce = useDebounce(onSelectItem, 4000);
    const originsDefault = originsOptions.filter(({ value }) =>
        origins.includes(value)
    );

    function onSelectItem(originsStruct: TData<string>) {
        const origins = originsStruct.map(({ value }) => value).join(",");
        dispatch(setOriginSort(origins));
    }

    return (
        <div>
            <button onClick={() => setState((prev) => (prev += 1))}>{state}</button>

            <b className={style.sort__label}>Sort by origin:</b>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                defaultValue={originsDefault}
                options={originsOptions}
                onChange={(e) => debounce(e as TData<string>)}
            />
        </div>
    );
};

export default memo(SortPopupOrigin);
