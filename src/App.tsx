import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { AuthPage } from './pages/auth/AuthPage';
import { FormLogin } from './pages/auth/components/Forms/FormLogin';
import { FormRegister } from './pages/auth/components/Forms/FormRegister';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import GlobalStyle from './styled-components/GlobalStyle';

export const App = () => {

  const isAuth = false;

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* Public Route PROTECTED*/}
          <Route path='/' element={<AuthPage isAuth={isAuth} />} >

            <Route index element={<FormLogin />} />
            <Route path='/login' element={<FormLogin />} />
            <Route path='/register' element={<FormRegister />} />

          </Route>

          {/* TODO: Private Route PROTECTED*/}
          <Route path='/dashboard' element={<DashboardPage />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

