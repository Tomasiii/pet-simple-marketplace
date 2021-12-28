import { FC, memo, NamedExoticComponent, useMemo, useState } from "react";
import style from "../../pages/Home/home.module.scss";
import stl from "./paginator.module.scss";
import { IProduct } from "../../models/IProduct";

type Props = {
    className: string;
    items: Array<IProduct>;
    ViewComponent: NamedExoticComponent<IProduct>;
    limitOnPage?: number;
};

const Pagination: FC<Props> = ({ items, ViewComponent, limitOnPage = 20 }) => {
    const [curPage, setCurPage] = useState(1);
    const startItems = curPage * limitOnPage - limitOnPage;
    const elementsForViewCount = items.slice(startItems, startItems + limitOnPage);
    const buttonsCount = Math.ceil(items.length / limitOnPage);
    const arrButtons = Array.from(Array(buttonsCount).keys());

    const productsForView = useMemo(
        () =>
            elementsForViewCount.map((item) => (
                <ViewComponent key={item.id} {...item} />
            )),
        elementsForViewCount
    );

    return (
        <div>
            <div className={style.home__wrapper}>{productsForView}</div>
            <div className={stl.paginator__buttons}>
                <button
                    disabled={curPage === 1}
                    onClick={() => setCurPage((prev) => prev - 1)}
                    className={stl.paginator__buttons__arrow}
                >
                    <i className={`fas fa-arrow-circle-left fa-2x`} />
                </button>
                {arrButtons.map((button) => (
                    <div
                        className={
                            curPage === button + 1
                                ? stl.paginator__buttons__item__active
                                : stl.paginator__buttons__item
                        }
                        onClick={() => setCurPage(button + 1)}
                        key={button}
                    >
                        {button + 1}
                    </div>
                ))}
                <button
                    disabled={curPage === buttonsCount}
                    onClick={() => setCurPage((prev) => prev + 1)}
                    className={stl.paginator__buttons__arrow}
                >
                    <i className="fas fa-arrow-circle-right fa-2x" />
                </button>
            </div>
        </div>
    );
};

export default memo(Pagination);
