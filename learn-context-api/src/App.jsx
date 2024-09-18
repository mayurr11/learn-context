import "./App.css";
import { AuthContextProvider } from "./Context/AuthContext";
import LoginButton from "./components/LoginButton";
import UserStatus from "./components/UserStatus";
// import Login from "./components/login";
// import Profile from "./components/Profile";


function App() {
  return (
    <AuthContextProvider>
      <div style={{ padding: '20px' }}>
        <h1>Authentication with Context API</h1>
        <UserStatus />
        <LoginButton />
      </div>
    </AuthContextProvider>
  );
}

export default App;
