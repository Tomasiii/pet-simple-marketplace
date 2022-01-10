import Select from "react-select";
import style from "./sortPrice.module.scss";
import { setPerPageSort } from "../../store/slices";
import { useGetAllProductsQuery } from "../../config/api/productsApi";
import { useAppDispatch } from "../../hooks/hooksHelpers";
import { perPageOptions } from "./helpers";
import { memo } from "react";

const SortPopupPerPage = () => {
    const dispatch = useAppDispatch();
    const {
        data: { perPage }
    } = useGetAllProductsQuery("products");

    const perPageDefault = perPageOptions.find((item) => item.value === perPage);

    const onSelectItem = ({ value }: { value: number }) => {
        dispatch(setPerPageSort(value));
    };

    return (
        <div>
            <b className={style.sort__label}>Sort by perPage:</b>
            <Select
                defaultValue={perPageDefault as { value: number; label: number }}
                options={perPageOptions}
                onChange={(e) => onSelectItem(e as { value: number; label: number })}
            />
        </div>
    );
};

export default memo(SortPopupPerPage);
