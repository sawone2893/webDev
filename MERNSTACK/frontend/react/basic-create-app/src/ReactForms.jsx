import { useState } from "react";

export function ReactForms() {
  let [fullName, setFullName] = useState("");
  let textUpdate = (event) => {
    setFullName(event.target.value);
  };
  return (
    <form>
      <label htmlFor="fullName">Full Name: </label>
      <input
        type="text"
        placeholder="Enter some text"
        onChange={textUpdate}
        value={fullName}
        id="fullName"
      />
    </form>
  );
}

export function HandleMultipleInputs() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name: </label>
      <input
        type="text"
        placeholder="Enter full name"
        onChange={handleInputChange}
        value={formData.fullName}
        id="fullName"
        name="fullName"
      />
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="Enter username"
        onChange={handleInputChange}
        value={formData.username}
        id="username"
        name="username"
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Enter some text"
        onChange={handleInputChange}
        value={formData.password}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
