import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as queryString from "query-string";

import fetchProducts from "../../store/thunks/getProducts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksHelpers";
import { omitTotalPriceSelector } from "../../store/selectors";
import { setSort } from "../../store/slices";

const Request = () => {
    const sortObj = useAppSelector(omitTotalPriceSelector);
    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        const parsed = queryString.parse(history.location.search, {
            parseBooleans: true,
            parseNumbers: true
        });
        dispatch(setSort(parsed));
    }, []);

    useEffect(() => {
        history.push({
            pathname: `${history.location.pathname}`,
            search: queryString.stringify(sortObj, {
                skipEmptyString: true,
                skipNull: true
            })
        });
        dispatch(fetchProducts(sortObj));
    }, [dispatch, sortObj]);

    return null;
};

export default Request;
