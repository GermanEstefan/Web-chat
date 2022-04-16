export interface UserLoginCredentials {
    email: string
    password: string
};

export interface UserRegisterCredentials {
    name: string
    email: string
    password1: string
    password2: string
}

export interface PropsAuthPage {
    isAuth: boolean
}