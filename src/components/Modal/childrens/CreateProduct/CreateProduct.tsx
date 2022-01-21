import { Dispatch, SetStateAction, memo } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import style from "./createProduct.module.scss";
import Select from "react-select";
import { createProductRequest } from "../../../../api/request";

interface IProps {
    setIsConfetti?: Dispatch<SetStateAction<boolean>>;
}

export interface IFormInput {
    name: string;
    price: string;
    origin: { label: string; value: string };
}

const CreateProduct = ({ setIsConfetti }: IProps) => {
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
        await createProductRequest(values, reset, setIsConfetti);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <h2 className={style.promo}>Create Product</h2>
            <label className={style.label}>
                <p className={style.label__text}>Name</p>
                <input
                    className={style.input}
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
                    disabled={isSubmitting}
                    className={style.input}
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
                rules={{ required: true, shouldUnregister: true }}
                render={({ field }) => (
                    <Select
                        {...field}
                        isDisabled={isSubmitting}
                        options={[
                            {
                                value: "africa",
                                label: "Africa"
                            },
                            {
                                value: "asia",
                                label: "Asia"
                            },
                            {
                                value: "europe",
                                label: "Europe"
                            },
                            {
                                value: "usa",
                                label: "USA"
                            }
                        ]}
                        className={style.origin}
                    />
                )}
            />
            <div className={style.errorMessage}>
                {errors?.origin && <p>{"The field is required"}</p>}
            </div>

            <button className={style.button} disabled={isSubmitting}>
                Save
            </button>
        </form>
    );
};

export default memo(CreateProduct);
