import Select from "react-select";
import style from "./sortPrice.module.scss";
import { setPerPageSort } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { perPageSelector } from "../../store/selectors";
import { perPageOptions } from "../../constants/SortOptions";
import { memo } from "react";

const SortPopupPerPage = () => {
    const dispatch = useAppDispatch();
    const perPage = useAppSelector(perPageSelector);
    const perPageDefault = perPageOptions.find((item) => item.value === perPage);
    const onSelectItem = ({ value }: { value: number }) => {
        dispatch(setPerPageSort(value));
    };

    return (
        <div>
            <b className={style.sort__label}>Sort by perPage:</b>
            <Select
                value={perPageDefault as { value: number; label: number }}
                options={perPageOptions}
                onChange={(e) => onSelectItem(e as { value: number; label: number })}
            />
        </div>
    );
};

export default memo(SortPopupPerPage);
