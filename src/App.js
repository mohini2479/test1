import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Nav from './component/NavComponent/Nav';
import Banner from './component/BannerComponent/Banner';
import Register from './component/RegisterComponent/Register';
import Login from './component/LoginComponent/Login';
function App() {
  return (
    <>
    <div>
      {/* <Nav/> */}
      <Banner/>
      {/* <Routes>
        <Route path="/register" element={<Register />} ></Route>
      </Routes> */}
      {/* <Register/> */}
      <Login/>
    </div>
    </>
  );
}

export default App;
