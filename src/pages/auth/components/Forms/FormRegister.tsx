
import { Form } from "../../../../components/Form/Form";
import { Input } from "../../../../components/Input/Input";
import { useForm } from "../../../../hooks/useForm";
import { UserRegisterCredentials } from "../../interfaces";

export const FormRegister = () => {

    const {
        values,
        handleChange
    } = useForm<UserRegisterCredentials>({ name: '', email: '', password1: '', password2: '' });

    const { name, email, password1, password2 } = values;

    const validateEmail = (value: any) => {
        if (!(value.includes('@'))) {
            return { error: true, message: 'Not is a email!' }
        }
        return { error: false, message: '' }
    }

    return (

        <Form
            titleForm='Register'
            spanButtonText='Already have an account?'
            routeToNavigate='/login'
            valueButton='Register'
        >

            <Input
                validatorFunction={() => { }}
                titleOfLabel='Name'
                name="name"
                onChangeFunction={handleChange}
                value={name}
            />

            <Input
                validatorFunction={validateEmail}
                titleOfLabel='Email'
                name="email"
                onChangeFunction={handleChange}
                value={email}
            />

            <Input
                validatorFunction={() => { }}
                titleOfLabel='Password'
                name="password1"
                onChangeFunction={handleChange}
                value={password1}
            />

            <Input
                validatorFunction={() => { }}
                titleOfLabel='Confirm password'
                name="password2"
                onChangeFunction={handleChange}
                value={password2}
            />

        </Form>
    )
}
