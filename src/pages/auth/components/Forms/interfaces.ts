export interface UserLoginCredentials {
    email: string
    password: string
};

export interface UserRegisterCredentials {
    name: string
    email: string
    password: string
}

export interface PropsProtectedRoutes {
    isAuth: boolean
}