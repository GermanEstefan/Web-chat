import { ChangeEvent, useState } from "react"
import { errorInputModel, inputComponentProps } from "./interfaces";
import { StyledInput, StyledInputContainer } from "./StyledInput";

export const Input = (props: inputComponentProps) => {

    const [messageError, setMessageError] = useState<errorInputModel>({ error: null, message: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const validation = props.validatorFunction(e.target.value);

        if (validation.error) {
            props.stateOfError((state: any) => {
                return { ...state, [e.target.name]: true };
            });
        } else {
            props.stateOfError((state: any) => {
                return { ...state, [e.target.name]: false };
            });
        }
        props.onChangeFunction({ ...e });
        setMessageError(validation);
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
