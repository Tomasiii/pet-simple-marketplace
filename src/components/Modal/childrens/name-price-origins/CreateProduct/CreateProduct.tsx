import { Dispatch, SetStateAction, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./createProduct.module.scss";
import { createProductRequest } from "../../../../../api/request";
import { IFormInput } from "../../../../../models/Form";
import NamePriceOriginsBase from "../NamePriceOriginsBase";

interface IProps {
    setModal: Dispatch<SetStateAction<boolean>>;
    setIsConfetti?: Dispatch<SetStateAction<boolean>>;
}

const CreateProduct = ({ setModal, setIsConfetti }: IProps) => {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
        control
    } = useForm<IFormInput>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<IFormInput> = async (values) => {
        await createProductRequest(values, reset, setModal, setIsConfetti);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <h2 className={style.promo}>Create Product</h2>

            <NamePriceOriginsBase
                defaultValuesProps={{
                    name: "",
                    price: "",
                    origin: { label: "", value: "" }
                }}
                register={register}
                control={control}
                isSubmitting={isSubmitting}
                errors={errors}
            />

            <button className={style.button} disabled={isSubmitting}>
                Save
            </button>
        </form>
    );
};

export default memo(CreateProduct);
