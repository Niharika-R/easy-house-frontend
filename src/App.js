import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages";
import { UserAuthentication } from "./context/UserAuthentications";
import Appbar from './components/Appbar'

function App() {
  return (
    <UserAuthentication>
    <div className="App">
      <Router>
      <Appbar/>
        <Routes>
          {Object.values(Pages).map((page) => (
            <Route key={page.path} path={page.path} element={page.element}/>
          ))}
        </Routes>
      </Router>
    </div>
    </UserAuthentication>
  );
}

export default App;
