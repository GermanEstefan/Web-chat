export interface inputComponentProps {
    validatorFunction: Function
    titleOfLabel: string
    name: string
    onChangeFunction: Function
    value: string | number
}

export interface errorInput {
    error: boolean | null
    message: string
}

export interface propInputStyle {
    error: boolean | null
}
