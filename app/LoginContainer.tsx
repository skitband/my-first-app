import React from "react";

const LoginContainer = ({ onInputChange, onSubmit, formData }) => {
  return (
    <main className="form-signin w-100 m-auto">
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <form>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={onInputChange}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={onInputChange}
          />
          <label>Password</label>
        </div>
        <button
          className="btn btn-primary w-100 p-2 mt-2"
          onClick={(e) => onSubmit(e)}
        >
          Sign in
        </button>
      </form>
    </main>
  );
};

export default LoginContainer;
