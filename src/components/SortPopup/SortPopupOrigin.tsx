import Select from "react-select";
import makeAnimated from "react-select/animated";
import style from "./sortPrice.module.scss";
import { setOriginSort } from "../../store/slices";
import { useAppDispatch } from "../../hooks/hooksHelpers";
import { data, IData } from "./helpers";
import { memo } from "react";
import { useGetAllProductsQuery } from "../../config/api/productsApi";

const animatedComponents = makeAnimated();

const SortPopupOrigin = () => {
    const dispatch = useAppDispatch();
    const {
        originalArgs: { origin }
    } = useGetAllProductsQuery("products");
    const originsDefault = data.filter(({ value }) => origin?.includes(value));

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
