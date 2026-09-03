import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import Constants from "../utils/constants";
import { addUser } from "../utils/Slices/userSlice";
const EditProfile = () => {
  const userData = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState(userData?.firstName ?? "");
  const [lastName, setLastName] = useState(userData?.lastName ?? "");
  const [age, setAge] = useState(userData?.age ?? "");
  const [gender, setGender] = useState(userData?.gender ?? "");
  const [about, setAbout] = useState(userData?.about ?? "");
  const [photoUrl, setPhotoUrl] = useState(userData?.photoUrl ?? "");
  const dispatch = useDispatch();
  const [toast, showToast] = useState(false);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        showToast(false);
      }, 3000);
    }
  }, [toast]);

  const toastUi = () => {
    return (
      <div className="toast toast-center toast-middle">
        <div className="alert alert-success">
          <span>Profile save jali naacho.</span>
        </div>
      </div>
    );
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };
  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleSaveProfile = async () => {
    try {
      const res = await axios.patch(
        `${Constants.BASE_URL}/profile/editProfile`,
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true },
      );
      if (res.status == 200) {
        dispatch(addUser(res?.data?.updatedUserData));
        showToast(true);
      }
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center my-10 mx-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl font-bold">
            Edit Profile
          </legend>

          <label className="label text-md font-bold">Email</label>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />

          <label className="label text-md font-bold">Password</label>
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />

          <label className="label text-md font-bold">Age</label>
          <input
            type="number"
            className="input"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
          <label className="label text-md font-bold">Gender</label>
          <input
            type="text"
            className="input"
            placeholder="Gender"
            value={gender}
            onChange={handleGenderChange}
          />

          <label className="label text-md font-bold">About</label>
          <input
            type="text"
            className="input"
            placeholder="About"
            value={about}
            onChange={handleAboutChange}
          />

          <label className="label text-md font-bold">Photo Url</label>
          <input
            type="text"
            className="input"
            placeholder="Photo"
            value={photoUrl}
            onChange={handlePhotoUrlChange}
          />

          <button className="btn btn-neutral mt-4" onClick={handleSaveProfile}>
            Save Profile
          </button>
        </fieldset>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} />
      {toast && toastUi()}
    </div>
  );
};

export default EditProfile;
