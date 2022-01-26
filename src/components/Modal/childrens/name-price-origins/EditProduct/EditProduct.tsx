import { Dispatch, SetStateAction, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { axiosInstance } from "../../../../../api/axios";
import { IProduct } from "../../../../../models/Product";
import style from "./editProduct.module.scss";
import URL from "../../../../../constants/url";
import { IFormInput } from "../../../../../models/Form";
import NamePriceOriginsBase from "../NamePriceOriginsBase";

interface IProps {
    defaultValuesProps: IFormInput;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setCard: Dispatch<SetStateAction<IProduct>>;
    id: string;
}

const EditProduct = ({
    defaultValuesProps = { name: "", origin: { label: "", value: "" }, price: "" },
    id,
    setIsOpen,
    setCard
}: IProps) => {
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
            const { data } = await axiosInstance.patch(`${URL.getProducts}/${id}`, {
                product: {
                    name,
                    price: +price,
                    origin: origin?.value || defaultValuesProps.origin?.value
                }
            });
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

            <NamePriceOriginsBase
                defaultValuesProps={defaultValuesProps}
                register={register}
                control={control}
                isSubmitting={isSubmitting}
                errors={errors}
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
