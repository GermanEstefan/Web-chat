import { Navigate } from "react-router";
import { PropsProtectedRoutes } from "../auth/components/Forms/interfaces"

const ChatPage = (props: PropsProtectedRoutes) => {
    return (
        <>
            {
                !(props.isAuth)
                    ? <Navigate to='/login' />
                    : <h1>Chat page</h1>
            }
        </>
    )
}

export default ChatPage;
