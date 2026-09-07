import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Constants from "../utils/constants";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [error, setError] = useState("");

    const userData = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (userData) {
            navigate("/");
        }
    },[userData]);

  const handleAddSkill = () => {
    const trimmedSkill = skillInput.trim();
    if (!trimmedSkill) return;
    if (skills.includes(trimmedSkill)) {
      setSkillInput("");
      return;
    }
    setSkills([...skills, trimmedSkill]);
    setSkillInput("");
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSignup = async () => {
      // TODO: call signup API
      let res;
      try {
          res = await axios.post(`${Constants.BASE_URL}/auth/signup`, { firstName, lastName, email, password, age, gender, about, photoUrl, skills }, { withCredentials: true })
          console.log("res -------  ", res);
        if (res.status === 201) {
         return navigate("/");
        }
        return setError(res);
      } catch (error) {
        console.log("error -------  ", res);
        setError(error?.response?.data?.error);
      }
  };

  return (
    <>
      <div className="flex justify-center items-center my-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl font-bold">Sign Up</legend>

          <label className="label text-md font-bold">First Name</label>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label text-md font-bold">Last Name</label>
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="label text-md font-bold">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label text-md font-bold">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="label text-md font-bold">Age</label>
          <input
            type="number"
            className="input"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label className="label text-md font-bold">Gender</label>
          <select
            className="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label className="label text-md font-bold">About</label>
          <textarea
            className="textarea"
            placeholder="Tell us about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <label className="label text-md font-bold">Photo URL</label>
          <input
            type="url"
            className="input"
            placeholder="https://example.com/photo.jpg"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />

          <label className="label text-md font-bold">Skills</label>
          <div className="flex gap-2">
            <input
              type="text"
              className="input flex-1"
              placeholder="Add a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillKeyDown}
            />
            <button type="button" className="btn btn-neutral" onClick={handleAddSkill}>
              Add
            </button>
          </div>
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill) => (
                <span key={skill} className="badge badge-primary gap-1">
                  {skill}
                  <button
                    type="button"
                    className="text-xs"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}

          <button className="btn btn-neutral mt-4" onClick={handleSignup}>
            Sign Up
          </button>

          <p className="text-center mt-3 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </fieldset>
      </div>
      {error && <div className="text-center text-red-500 my-10">{error}</div>}
    </>
  );
};

export default SignUp;
