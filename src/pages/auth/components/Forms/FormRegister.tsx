
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { IsEmailValid, isNameValid, isPasswordValid } from "../../../../helpers/validationsForm";
import { useForm } from "../../../../hooks/useForm";
import { UserRegisterCredentials } from "./interfaces";
import { useNavigate } from "react-router";
import { StyledContainerForm, StyledForm, StyledFormSpan } from "./StyledForm";

export const FormRegister = () => {

    const navigate = useNavigate();

    const { values, handleChange } = useForm<UserRegisterCredentials>({ name: '', email: '', password: '' });
    const { name, email, password } = values;

    const [stateOfErrorsInputs, setStateOfErrorsInputs] = useState({ name: true, email: true, password: true });
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

            <h2>Register</h2>

            <StyledForm autoComplete="off" onSubmit={handleSubmit}>

                <Input
                    titleOfLabel='Name'
                    name='name'
                    onChangeFunction={handleChange}
                    value={name}
                    stateOfError={setStateOfErrorsInputs}
                    validatorFunction={isNameValid}
                />

                <Input
                    titleOfLabel='Email'
                    name='email'
                    validatorFunction={IsEmailValid}
                    onChangeFunction={handleChange}
                    value={email}
                    stateOfError={setStateOfErrorsInputs}
                />

                <Input
                    titleOfLabel='Password'
                    name='password'
                    onChangeFunction={handleChange}
                    value={password}
                    stateOfError={setStateOfErrorsInputs}
                    validatorFunction={isPasswordValid}
                />

                <StyledFormSpan onClick={() => navigate('/login')}>Already have an account?</StyledFormSpan>

                <button type="submit" disabled={disableForm}>Register</button>

            </StyledForm>

        </StyledContainerForm>
    )
}
