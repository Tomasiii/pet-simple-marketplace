import React, { Fragment } from "react";
import "./PaginationBootstrap.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import {
    pageSelector,
    perPageSelector,
    totalItemsSelector
} from "../../store/selectors";
import { selectAll, setPageSort } from "../../store/slices";
import style from "../../pages/Home/home.module.scss";
import CardHome from "../Card/CardHome/CardHome";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const total = Math.ceil(
        useAppSelector(totalItemsSelector) / useAppSelector(perPageSelector)
    );
    const current = useAppSelector(pageSelector);
    const items = useAppSelector(selectAll);

    const handlePagination = (current: number) => {
        dispatch(setPageSort(current));
    };

    if (Object.keys(items).length === 0)
        return <p>There is no items according this price</p>;

    return (
        <div>
            <div className={style.home__wrapper}>
                {items.map((item) => (
                    <CardHome key={item.id} {...item} />
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a
                            className={`page-link ${
                                current === 1 ? "disabled" : current > 1 ? "" : ""
                            }`}
                            href="#"
                            onClick={() => handlePagination(current - 1)}
                        >
                            Previous
                        </a>
                    </li>
                    {total < 7 ? (
                        <>
                            {Array.apply(0, Array(total)).map((arr, i) => (
                                <Fragment key={i}>
                                    <li
                                        className={`page-item ${
                                            current === i + 1 ? "active" : ""
                                        }`}
                                    >
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={() => handlePagination(i + 1)}
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                </Fragment>
                            ))}
                        </>
                    ) : current % 5 >= 0 && current > 4 && current + 2 < total ? (
                        <>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(1)}
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link disabled" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(current - 1)}
                                >
                                    {current - 1}
                                </a>
                            </li>
                            <li className="page-item active">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(current)}
                                >
                                    {current}
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(current + 1)}
                                >
                                    {current + 1}
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link disabled" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(total)}
                                >
                                    {total}
                                </a>
                            </li>
                        </>
                    ) : current % 5 >= 0 && current > 4 && current + 2 >= total ? (
                        <>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(1)}
                                >
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link disabled" href="#">
                                    ...
                                </a>
                            </li>
                            <li
                                className={`page-item ${
                                    current === total - 3 ? "active" : ""
                                }`}
                            >
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(total - 3)}
                                >
                                    {total - 3}
                                </a>
                            </li>
                            <li
                                className={`page-item ${
                                    current === total - 2 ? "active" : ""
                                }`}
                            >
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(total - 2)}
                                >
                                    {total - 2}
                                </a>
                            </li>
                            <li
                                className={`page-item ${
                                    current === total - 1 ? "active" : ""
                                }`}
                            >
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(total - 1)}
                                >
                                    {total - 1}
                                </a>
                            </li>
                            <li
                                className={`page-item ${
                                    current === total ? "active" : ""
                                }`}
                            >
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(total)}
                                >
                                    {total}
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            {Array.apply(0, Array(5)).map((arr, i) => (
                                <Fragment key={i}>
                                    <li
                                        className={`page-item ${
                                            current === i + 1 ? "active" : ""
                                        }`}
                                    >
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={() => handlePagination(i + 1)}
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                </Fragment>
                            ))}
                            <li className="page-item">
                                <a className="page-link disabled" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(total)}
                                >
                                    {total}
                                </a>
                            </li>
                        </>
                    )}
                    <li className="page-item">
                        <a
                            className={`page-link ${
                                current === total
                                    ? "disabled"
                                    : current < total
                                    ? ""
                                    : ""
                            }`}
                            href="#"
                            onClick={() => handlePagination(current + 1)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
