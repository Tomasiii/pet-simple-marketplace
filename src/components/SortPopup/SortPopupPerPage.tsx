import Select from "react-select";
import style from "./sortPrice.module.scss";
import { setPerPageSort } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { perPageSelector } from "../../store/selectors";
import { memo } from "react";

const perPageOptions = [
    {
        value: 10,
        label: 10
    },
    {
        value: 25,
        label: 25
    },
    {
        value: 50,
        label: 50
    }
];

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
                defaultValue={perPageDefault as { value: number; label: number }}
                options={perPageOptions}
                onChange={(e) => onSelectItem(e as { value: number; label: number })}
            />
        </div>
    );
};

export default memo(SortPopupPerPage);
