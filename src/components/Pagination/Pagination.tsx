import React, { FC, Fragment, useCallback } from "react";
import "./Pagination.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { sortSelector } from "../../store/selectors";
import { setPageSort } from "../../store/slices";
import style from "../../pages/Home/home.module.scss";
import CardHome from "../Card/CardHome/CardHome";
import { useGetSortedProductsQuery } from "../../config/api/productsApi";

const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const sortObj = useAppSelector(sortSelector);
    const { data } = useGetSortedProductsQuery(sortObj);
    const totalItemsCount = data?.totalItems || 0;
    const perPageCount = data?.perPage || 0;
    const currentPage = data?.page || 0;
    const total = Math.ceil(totalItemsCount / perPageCount);

    const handlePagination = useCallback(
        (currentPage: number) => {
            dispatch(setPageSort(currentPage));
        },
        [dispatch]
    );

    if (data?.items.length === 0)
        return <h3>There is no items according this price</h3>;

    return (
        <div>
            <div className={style.home__wrapper}>
                {data?.items.map((item) => (
                    <CardHome key={item.id} {...item} />
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a
                            className={`page-link ${
                                currentPage === 1
                                    ? "disabled"
                                    : currentPage > 1
                                    ? ""
                                    : ""
                            }`}
                            href="#"
                            onClick={() => handlePagination(currentPage - 1)}
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
                                            currentPage === i + 1 ? "active" : ""
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
                    ) : currentPage % 5 >= 0 &&
                      currentPage > 4 &&
                      currentPage + 2 < total ? (
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
                                    onClick={() => handlePagination(currentPage - 1)}
                                >
                                    {currentPage - 1}
                                </a>
                            </li>
                            <li className="page-item active">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(currentPage)}
                                >
                                    {currentPage}
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePagination(currentPage + 1)}
                                >
                                    {currentPage + 1}
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
                    ) : currentPage % 5 >= 0 &&
                      currentPage > 4 &&
                      currentPage + 2 >= total ? (
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
                                    currentPage === total - 3 ? "active" : ""
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
                                    currentPage === total - 2 ? "active" : ""
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
                                    currentPage === total - 1 ? "active" : ""
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
                                    currentPage === total ? "active" : ""
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
                                            currentPage === i + 1 ? "active" : ""
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
                                currentPage === total
                                    ? "disabled"
                                    : currentPage < total
                                    ? ""
                                    : ""
                            }`}
                            href="#"
                            onClick={() => handlePagination(currentPage + 1)}
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
