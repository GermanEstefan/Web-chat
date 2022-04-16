import { useNavigate } from 'react-router'
import { FormComponentProps } from './interfaces';
import { StyledContainerForm, StyledForm, StyledFormSpan } from './StyledForm'

export const Form = (props: FormComponentProps) => {

    const navigate = useNavigate();

    return (
        <StyledContainerForm>
            <h2>{props.titleForm}</h2>
            <StyledForm autoComplete='off'>
                {props.children}
                <StyledFormSpan onClick={() => navigate(props.routeToNavigate || '')}>{props.spanButtonText}</StyledFormSpan>
                <button type="submit">{props.valueButton}</button>
            </StyledForm>
        </StyledContainerForm>
    )
}
