import logo from './logo.svg';
import './App.css';
import Register from './component/RegisterComponent/Register';
import Login from './component/LoginComponent/Login';
import Manageusers from './component/ManageusersComponent/Manageusers';
function App() {
  return (
    <>
    <div>
      <Register/>
      <Login/>
      <Manageusers/>
    </div>
    </>
  );
}

export default App;
