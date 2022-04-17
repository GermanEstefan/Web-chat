import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import GlobalStyle from './global-styles/GlobalStyle';
import AuthPage from './pages/auth';
import { FormLogin } from './pages/auth/components/Forms/FormLogin';
import { FormRegister } from './pages/auth/components/Forms/FormRegister';
import ChatPage from './pages/chat';


export const App = () => {

  const isAuth = false;

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<AuthPage isAuth={isAuth} />} >

            <Route index element={<FormLogin />} />
            <Route path='/login' element={<FormLogin />} />
            <Route path='/register' element={<FormRegister />} />

          </Route>

          <Route path='/chat' element={<ChatPage isAuth={isAuth} />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

