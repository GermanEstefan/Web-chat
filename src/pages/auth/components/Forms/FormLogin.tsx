import { Form } from "../../../../components/Form/Form";
import { Input } from "../../../../components/Input/Input"
import { useForm } from "../../../../hooks/useForm"
import { UserLoginCredentials } from "../../interfaces";


export const FormLogin = () => {

    const {
        values,
        handleChange
    } = useForm<UserLoginCredentials>({ email: '', password: '' });

    const { email, password } = values;

    return (
        <Form
            titleForm='Login'
            spanButtonText='Dont have account?'
            routeToNavigate='/register'
            valueButton="Login"
        >

            <Input
                validatorFunction={() => { }}
                titleOfLabel='Email'
                name="email"
                onChangeFunction={handleChange}
                value={email}
            />

            <Input
                validatorFunction={() => { }}
                titleOfLabel='Password'
                name="password"
                onChangeFunction={handleChange}
                value={password}
            />

        </Form>
    )
}
