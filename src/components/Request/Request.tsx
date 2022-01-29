import { useEffect, useState } from "react";
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
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true); // без проверки происходит зацикликание запросов

    useEffect(() => {
        const parsed = queryString.parse(history.location.search, {
            parseBooleans: true,
            parseNumbers: true
        });
        // если URL без query параметров то parsed пустой и setSort(parsed) не меняет Redux state, а значит не идет запрос на сервер ибо запрос зависит от изменения Redux state и продукты вообще не подгружаються
        if (Object.keys(parsed).length === 0) {
            dispatch(fetchProducts(sortObj));
        } else {
            dispatch(setSort(parsed));
        }
        setIsFirstRender(false);
    }, []);

    useEffect(() => {
        if (!isFirstRender) {
            history.push({
                pathname: `${history.location.pathname}`,
                search: queryString.stringify(sortObj, {
                    skipEmptyString: true,
                    skipNull: true
                })
            });
            dispatch(fetchProducts(sortObj));
        }
    }, [dispatch, sortObj]);

    return null;
};

export default Request;
