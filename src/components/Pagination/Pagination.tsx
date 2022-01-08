import { FC, memo } from "react";
import style from "../../pages/Home/home.module.scss";
import stl from "./paginator.module.scss";
import { selectAll, setPageSort } from "../../store/slices";
import {
    pageSelector,
    perPageSelector,
    totalItemsSelector
} from "../../store/selectors";
import CardHome from "../Card/CardHome/CardHome";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";

interface IProps {
    className: string;
}

const Pagination: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectAll);
    const perPage = useAppSelector(perPageSelector);
    const totalItems = useAppSelector(totalItemsSelector);
    const page = useAppSelector(pageSelector);

    const buttonsCount = Math.ceil(totalItems / perPage);
    const arrButtons = Array.from(Array(buttonsCount).keys());

    return (
        <div>
            <div className={style.home__wrapper}>
                {items.map((item) => (
                    <CardHome key={item.id} {...item} />
                ))}
            </div>
            <div className={stl.paginator__buttons}>
                <button
                    disabled={page === 1}
                    onClick={() => dispatch(setPageSort(page - 1))}
                    className={stl.paginator__buttons__arrow}
                >
                    <i className={`fas fa-arrow-circle-left fa-2x`} />
                </button>
                {arrButtons.map((button) => (
                    <div
                        className={
                            page === button + 1
                                ? stl.paginator__buttons__item__active
                                : stl.paginator__buttons__item
                        }
                        onClick={() => dispatch(setPageSort(button + 1))}
                        key={button}
                    >
                        {button + 1}
                    </div>
                ))}
                <button
                    disabled={page === buttonsCount}
                    onClick={() => dispatch(setPageSort(page + 1))}
                    className={stl.paginator__buttons__arrow}
                >
                    <i className="fas fa-arrow-circle-right fa-2x" />
                </button>
            </div>
        </div>
    );
};

export default memo(Pagination);
