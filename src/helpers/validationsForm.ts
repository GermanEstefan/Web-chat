import isEmail from "validator/lib/isEmail"
import { errorInputModel } from "../pages/auth/components/Input/interfaces"

export const IsEmailValid = (email: string): errorInputModel => {
    if (!(isEmail(email))) {
        return { error: true, message: 'Not is a valid email' }
    } else {
        return { error: false, message: '' }
    }
}

export const isNameValid = (name: string): errorInputModel => {
    if (name.length <= 0) {
        return { error: true, message: 'Field name is empty' }
    } else {
        return { error: false, message: '' }
    }
}

export const isPasswordValid = (password: string): errorInputModel => {
    if (password.length <= 4) {
        return { error: true, message: 'The password must be +4 characters' }
    } else {
        return { error: false, message: '' }
    }
}

export const isEmptyField = (value: string): errorInputModel => {
    if (value.length <= 0) {
        return { error: true, message: 'The field is empty' }
    } else {
        return { error: false, message: '' }
    }
}

