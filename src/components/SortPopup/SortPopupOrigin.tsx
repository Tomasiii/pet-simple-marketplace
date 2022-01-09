import Select from "react-select";
import makeAnimated from "react-select/animated";
import style from "./sortPrice.module.scss";
import { setOriginSort } from "../../store/slices/sortSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { originSelector, perPageSelector } from "../../store/selectors";
import { memo } from "react";

type IData = Array<{ [key: string]: string }>;

const data: IData = [
    {
        value: "africa",
        label: "Africa"
    },
    {
        value: "asia",
        label: "Asia"
    },
    {
        value: "europe",
        label: "Europe"
    },
    {
        value: "usa",
        label: "USA"
    }
];

const animatedComponents = makeAnimated();

const SortPopupOrigin = () => {
    const dispatch = useAppDispatch();
    const origins = useAppSelector(originSelector);
    const originsDefault = data.filter(({ value }) => origins.includes(value));

    const onSelectItem = (originsStruct: IData) => {
        const origins = originsStruct.map(({ value }) => value).join(",");
        dispatch(setOriginSort(origins));
    };

    return (
        <div>
            <b className={style.sort__label}>Sort by origin:</b>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                defaultValue={originsDefault}
                options={data}
                onChange={(e) => onSelectItem(e as IData)}
            />
        </div>
    );
};

export default memo(SortPopupOrigin);
