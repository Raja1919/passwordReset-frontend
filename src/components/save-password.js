import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SavePassword = () => {
  const { resetToken } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://forgetpassword-backend-a7g0.onrender.com/api/savepassword",
        {
          NewPassword: password,
          resetToken,
        },
        setPassword("")
      );

      window.alert("Password saved successfully!");
        console.log(response.data)
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <h3 className="form-title">Save Password</h3>
          {errorMessage && <div className="text-danger">{errorMessage}</div>}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3 p-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SavePassword;
