import NavbarComponent from "./Components/NavbarComponent.jsx";
import Body from "./Components/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Profile from "./Components/Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./Components/Feed.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Connections from "./Components/Connections.jsx";
import MyConnectionsPage from "./Components/MyConnectionsPage.jsx";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/my-connections" element={<MyConnectionsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
