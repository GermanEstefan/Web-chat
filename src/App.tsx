import { useEffect } from "react"
import { io } from "socket.io-client"

export const App = () => {

  useEffect(() => {
    io('http://localhost:4500/');
  }, [])

  return (
    <div>
      <h1>Web socket chat</h1>
      <form>
        <input type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

