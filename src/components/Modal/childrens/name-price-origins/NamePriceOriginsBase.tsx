import { Controller } from "react-hook-form";
import Select from "react-select";
import { originOptions } from "../../../../constants/SortOptions";
import style from "./EditProduct/editProduct.module.scss";
import { Control, UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import { IFormInput } from "../../../../models/Form";

interface IProps {
    defaultValuesProps: IFormInput;
    register: UseFormRegister<IFormInput>;
    control: Control<IFormInput>;
    isSubmitting: boolean;
    errors: FieldErrors<IFormInput>;
}

const NamePriceOriginsBase = ({
    defaultValuesProps,
    control,
    register,
    isSubmitting,
    errors
}: IProps) => {
    return (
        <>
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
        </>
    );
};

export default NamePriceOriginsBase;
