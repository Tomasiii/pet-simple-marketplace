import { SubmitHandler, useForm, Controller } from "react-hook-form";
import style from "./createProduct.module.scss";
import Select from "react-select";
import { axiosInstance } from "../../../../api/axios";
import URL from "../../../../constants/url";

const CreateProduct = () => {
    interface IFormInput {
        name: string;
        price: string;
        origin: { label: string; value: string };
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        // reset,
        control
    } = useForm<IFormInput>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<IFormInput> = async ({ name, origin, price }) => {
        let response;
        try {
            response = await axiosInstance.post(
                URL.getProducts,
                JSON.stringify({
                    product: { name, price: +price, origin: origin.value }
                })
            );
            console.log("response-", response);
        } catch (e) {
            console.log("e-", e);
            console.log("response-", response);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <h2 className={style.promo}>Create Product</h2>
            <label className={style.label}>
                <p className={style.label__text}>Name</p>
                <input
                    className={style.input}
                    {...register("name", {
                        required: "The field is required",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Maximum 20 characters"
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
                rules={{ required: true }}
                render={({ field }) => (
                    <Select
                        {...field}
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

            <button className={style.button}>Save</button>
        </form>
    );
};

export default CreateProduct;
