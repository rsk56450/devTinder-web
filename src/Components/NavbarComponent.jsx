import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Links, useNavigate } from "react-router-dom";
import Constants from "../utils/constants";
import { removeUser } from "../utils/Slices/userSlice";

const NavbarComponent = () => {
  const user = useSelector((state) => state.user);
  const photoURL = user?.user?.photoUrl;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const res = await axios.post(`${Constants.BASE_URL}/auth/logout`, {}, {
      withCredentials: true,
    })
      console.log("=--- res --- ",res)
      
      if (res.status == 200) {
    dispatch(removeUser());
      navigate("/login");
    }
    } catch (error) {
      
    }
  }
  return (
    <div className="navbar w-full bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Dev Tinder</Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
           {user ? <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={photoURL}
              />
            </div> : <></>}
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between"  to="/profile">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li >
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
