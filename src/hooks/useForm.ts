import { ChangeEvent, useState } from "react";

export function useForm<T>(initState: T) {

    const [values, setValues] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const handleReset = (): void => setValues(initState);

    return {
        values,
        handleChange,
        handleReset
    }
}