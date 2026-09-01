import NavbarComponent from './Components/NavbarComponent.jsx';
import Body from './Components/Body.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';

function App() {
  return (
    <>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
    </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
