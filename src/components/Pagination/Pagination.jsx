import { memo, useState } from "react";
import style from "../../pages/Home/home.module.scss";
import stl from "./paginator.module.scss";

const Pagination = ({ items: { items }, ViewComponent, limitOnPage = 20 }) => {
    const [curPage, setCurPage] = useState(1);
    const startItems = curPage * limitOnPage - limitOnPage;
    const elementsForView = items.slice(startItems, startItems + limitOnPage);
    const buttonsCount = Math.ceil(items.length / limitOnPage);
    const arrButtons = Array.from(Array(buttonsCount).keys());
    return (
        <div>
            <div className={style.home__wrapper}>
                {elementsForView.map((item) => (
                    <ViewComponent key={item.id} {...item} />
                ))}
            </div>
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
