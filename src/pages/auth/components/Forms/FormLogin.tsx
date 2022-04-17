import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { isEmptyField } from "../../../../helpers/validationsForm";
import { useForm } from "../../../../hooks/useForm"
import { UserLoginCredentials } from "./interfaces";
import { useNavigate } from "react-router";
import { StyledContainerForm, StyledForm, StyledFormSpan } from "./StyledForm";


export const FormLogin = () => {

    const navigate = useNavigate();

    const { values, handleChange } = useForm<UserLoginCredentials>({ email: '', password: '' });
    const { email, password } = values;

    const [stateOfErrorsInputs, setStateOfErrorsInputs] = useState({ email: true, password: true });
    const [disableForm, setDisableForm] = useState(true);

    useEffect(() => {
        const values = Object.values(stateOfErrorsInputs);
        if (values.includes(true)) {
            setDisableForm(true);
        } else {
            setDisableForm(false)
        }
    }, [stateOfErrorsInputs])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(values)
        alert('Submited')
    }

    return (
        <StyledContainerForm>

            <h2>Login</h2>

            <StyledForm autoComplete="off" onSubmit={handleSubmit}>

                <Input
                    titleOfLabel='Email'
                    name="email"
                    onChangeFunction={handleChange}
                    value={email}
                    validatorFunction={isEmptyField}
                    stateOfError={setStateOfErrorsInputs}
                />

                <Input
                    titleOfLabel='Password'
                    name="password"
                    onChangeFunction={handleChange}
                    value={password}
                    validatorFunction={isEmptyField}
                    stateOfError={setStateOfErrorsInputs}
                />

                <StyledFormSpan onClick={() => navigate('/register')}>Dont have account?</StyledFormSpan>

                <button type="submit" disabled={disableForm}>Login</button>

            </StyledForm>

        </StyledContainerForm>
    )
}
