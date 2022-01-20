import { axiosInstance } from "./axios";
import URL from "../constants/url";
import { cleaningCart, EntityBase } from "../store/slices";
import { AxiosError } from "axios";
import type { AppDispatch } from "../store";
import { Dispatch, SetStateAction } from "react";
import { IFormInput } from "../components/Modal/childrens/CreateProduct/CreateProduct";

export const createProductRequest = async (
    values: IFormInput,
    reset: any,
    setIsConfetti?: Dispatch<SetStateAction<boolean>>
) => {
    const { name, price, origin } = values;
    try {
        await axiosInstance.post(
            URL.getProducts,
            JSON.stringify({
                product: { name, price: +price, origin: origin.value }
            })
        );
        if (setIsConfetti) {
            setIsConfetti(true);
            setTimeout(() => setIsConfetti(false), 5000);
        }
        reset({ name: "", price: "", origin: { value: "", label: "" } });
    } catch (e) {
        const errors = e as AxiosError;
        alert(
            `Error ${errors.response?.data.error.status} - ${errors.response?.data.error.message}`
        );
    }
};

export const payProductsRequest = async (
    cart: EntityBase,
    dispatch: AppDispatch
) => {
    const normalizeData = {
        order: {
            pieces: Object.values(cart.entities).map((item) => ({
                productId: item.id,
                count: item.count
            }))
        }
    };
    try {
        await axiosInstance.post(URL.getOrders, JSON.stringify(normalizeData));
        dispatch(cleaningCart());
    } catch (e) {
        const errors = e as AxiosError;
        alert(
            `Error ${errors.response?.data.error.status} - ${errors.response?.data.error.message}`
        );
    }
};
