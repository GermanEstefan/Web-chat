export interface inputComponentProps {
    validatorFunction: (value: string ) => errorInputModel
    stateOfError: Function
    titleOfLabel: string
    name: string
    onChangeFunction: Function
    value: string | number
}

export interface errorInputModel {
    error: boolean | null
    message: string
}

export interface propInputStyle {
    error: boolean | null
}
