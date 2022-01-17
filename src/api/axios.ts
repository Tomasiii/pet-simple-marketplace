import axios from "axios";
import URL from "../constants/url";

export const axiosInstance = axios.create({
    baseURL: URL.baseURL,
    headers: {
        Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlNlcmhpaSBOZXN0ZXJvdiIsImlhdCI6MTY0MjE3NzY0NCwiZXhwIjoxNjQ3MzYxNjQ0fQ.dvvGtRACxKpE47UvS3nzOcURcVX_mioUpnYI6snazdE",
        accept: "application/json",
        "Content-Type": "application/json"
    }
});
