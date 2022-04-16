import { Navigate, Outlet } from 'react-router'
import { Hedaer } from '../../components/Hedaer/Hedaer'
import { PropsAuthPage } from './interfaces'
import { StyledAuthPage } from './StyledAuthPage'

export const AuthPage = (props: PropsAuthPage) => {
  return (
    <StyledAuthPage>
      {
        (props.isAuth)
          ? <Navigate to='/dashboard' />
          : <> <Hedaer /><Outlet /> </>
      }
    </StyledAuthPage>
  )
}
