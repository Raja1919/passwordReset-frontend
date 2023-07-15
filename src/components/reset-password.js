import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://forgetpassword-backend-a7g0.onrender.com/api/resetpassword",
        {
          Email: email,
        }
      );
      const token = response.data.resetToken;
      // console.log(token);
      setSuccess("Email sent successfully.");
      setEmail("");
      setError("");

      window.alert("mail send successfully!");

      navigate(`/save-new-password/${token}`);
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <h3 className="form-title">Forget Password</h3>
          <div className="text-center"></div>

          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

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

export default ResetPassword;
