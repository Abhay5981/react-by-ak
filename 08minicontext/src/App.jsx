
import './App.css'
import Login from './componenets/Login'
import Profile from './componenets/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
  <h1>Context with chay</h1>
  <Login />
  <Profile />
  
    </UserContextProvider>
  )
}

export default App
