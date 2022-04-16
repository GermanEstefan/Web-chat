import { ChangeEvent, useState } from "react"
import { errorInput, inputComponentProps } from "./interfaces";
import { StyledInput, StyledInputContainer } from "./StyledInput";


export const Input = (props: inputComponentProps) => {

    const [messageError, setMessageError] = useState<errorInput>({ error: null, message: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const validation = props.validatorFunction(e.target.value);
        if (validation.error) {
            setMessageError(validation)
        } else {
            setMessageError(validation)
        }
        props.onChangeFunction({ ...e });
    }

    return (
        <StyledInputContainer>
            <label>{props.titleOfLabel}</label>
            <StyledInput
                name={props.name}
                type="text"
                onChange={handleChange}
                error={messageError.error}
                value={props.value}
            />
            <span>{messageError.message}</span>
        </StyledInputContainer>
    )
}
