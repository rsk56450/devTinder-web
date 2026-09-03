import NavbarComponent from "./Components/NavbarComponent.jsx";
import Body from "./Components/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./Components/Feed.jsx";
import { ErrorBoundary } from "react-error-boundary";

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
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
