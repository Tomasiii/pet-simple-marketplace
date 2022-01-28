import axios from "axios";
import URL from "../constants/url";
import * as queryString from "query-string";

export const axiosInstance = axios.create({
    baseURL: URL.baseURL,
    headers: {
        Authorization: `${process.env.REACT_APP_AUTHORIZATION}`,
        accept: "application/json",
        "Content-Type": "application/json"
    },
    paramsSerializer: function (params) {
        return queryString.stringify(params, {
            skipEmptyString: true,
            skipNull: true
        });
    }
});
