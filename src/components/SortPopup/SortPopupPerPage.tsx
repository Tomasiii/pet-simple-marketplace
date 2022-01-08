import Select from "react-select";
import style from "./sortPrice.module.scss";
import { setPerPageSort } from "../../store/slices";
import { useAppDispatch } from "../../hooks/hooksHelpers";

const colourOptions = [
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

    const onSelectItem = ({ value }: { value: number }) => {
        dispatch(setPerPageSort(value));
    };

    return (
        <div>
            <b className={style.sort__label}>Sort by price:</b>
            <Select
                defaultValue={colourOptions[1] as { value: number; label: number }}
                options={colourOptions}
                onChange={(e) => onSelectItem(e as { value: number; label: number })}
            />
        </div>
    );
};

export default SortPopupPerPage;
