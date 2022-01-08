import Select from "react-select";
import makeAnimated from "react-select/animated";
import style from "./sortPrice.module.scss";
import { setOriginSort } from "../../store/slices/sortSlice";
import { useAppDispatch } from "../../hooks/hooksHelpers";

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

    const onSelectItem = (originsStruct: IData) => {
        const origins = originsStruct.map(({ value }) => value).join(",");
        dispatch(setOriginSort(origins));
    };

    return (
        <div>
            <b className={style.sort__label}>Sort by price:</b>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={data}
                onChange={(e) => onSelectItem(e as IData)}
            />
        </div>
    );
};

export default SortPopupOrigin;
