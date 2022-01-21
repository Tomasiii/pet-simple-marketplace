import { Dispatch, SetStateAction, memo } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { AxiosError } from "axios";
import { axiosInstance } from "../../../../api/axios";
import { IProduct } from "../../../../models/Product";
import { originOptions } from "../../../../constants/SortOptions";
import style from "./editProduct.module.scss";
import Select from "react-select";
import URL from "../../../../constants/url";

interface IProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setCard: Dispatch<SetStateAction<IProduct>>;
    defaultValuesProps: {
        name: string;
        origin?: { label: string; value: string };
        price: number;
        id: string;
    };
}
interface IFormInput {
    name: string;
    price: number;
    origin: { label: string; value: string };
}

const EditProduct = ({ defaultValuesProps, setIsOpen, setCard }: IProps) => {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        control,
        reset
    } = useForm<IFormInput>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<IFormInput> = async ({ name, origin, price }) => {
        try {
            const { data } = await axiosInstance.patch(
                `${URL.getProducts}/${defaultValuesProps.id}`,
                JSON.stringify({
                    product: {
                        name,
                        price: +price,
                        origin: origin?.value || defaultValuesProps.origin?.value
                    }
                })
            );
            setCard(data);
            setIsOpen(false);
        } catch (e) {
            const errors = e as AxiosError;
            alert(
                `Error ${errors.response?.data.error.status} - ${errors.response?.data.error.message}`
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <h2 className={style.promo}>Create Product</h2>
            <label className={style.label}>
                <p className={style.label__text}>Name</p>
                <input
                    className={style.input}
                    defaultValue={defaultValuesProps.name}
                    disabled={isSubmitting}
                    {...register("name", {
                        required: "The field is required",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Maximum 20 characters"
                        },
                        pattern: {
                            value: /^[A-Za-z ]+$/i,
                            message: "Should contains only letter"
                        }
                    })}
                />
            </label>
            <div className={style.errorMessage}>
                {errors?.name && <p>{errors.name.message}</p>}
            </div>

            <label className={style.label}>
                <p className={style.label__text}>Price</p>
                <input
                    type="number"
                    className={style.input}
                    disabled={isSubmitting}
                    defaultValue={defaultValuesProps.price}
                    {...register("price", {
                        required: "The field is required"
                    })}
                />
            </label>
            <div className={style.errorMessage}>
                {errors?.price && <p>{errors.price.message}</p>}
            </div>

            <label className={style.label}>
                <p className={style.label__text}>Origin</p>
            </label>
            <Controller
                name="origin"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        isDisabled={isSubmitting}
                        options={originOptions}
                        className={style.origin}
                        defaultValue={defaultValuesProps.origin}
                    />
                )}
            />

            <div className={style.buttons}>
                <button
                    className={`${style.button} ${style.green}`}
                    disabled={isSubmitting}
                >
                    Save
                </button>
                <input
                    disabled={isSubmitting}
                    type="button"
                    className={style.button}
                    value="Close"
                    onClick={() => setIsOpen(false)}
                />
                <input
                    disabled={isSubmitting}
                    type="button"
                    className={`${style.button} ${style.red}`}
                    value="Reset"
                    onClick={() => {
                        reset(defaultValuesProps);
                    }}
                />
            </div>
        </form>
    );
};

export default memo(EditProduct);
