import { Navigate, Outlet } from 'react-router'
import { Hedaer } from './components/Hedaer/Hedaer'
import { PropsProtectedRoutes } from './components/Forms/interfaces'
import { StyledAuthPage } from './StyledIndex'

const AuthPage = (props: PropsProtectedRoutes) => {
    return (
        <StyledAuthPage>
            {
                (props.isAuth)
                    ? <Navigate to='/chat' />
                    : <> <Hedaer /><Outlet /> </>
            }
        </StyledAuthPage>
    )
}

export default AuthPage;
