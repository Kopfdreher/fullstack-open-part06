import { createContext, useState } from 'react'

const NotificationContext = createContext()

export default NotificationContext

let timeoutId

export const NotificationContextProvider = (props) => {
  const [ message, setMessage ] = useState(null)

  const notify = (m) => {
    clearTimeout(timeoutId)
    setMessage(m)
    timeoutId = setTimeout(() => setMessage(null), 5000)
  }

  return (
    <NotificationContext.Provider value={{ message, notify }}>
      {props.children}
    </NotificationContext.Provider>
  )
}
