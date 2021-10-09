import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Chat from "./pages/chat/Chat";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/chats' component={Chat} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
