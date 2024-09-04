import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    const errors = {};
    const REGEX_NAME = /^[a-zA-Z ]{2,30}$/;
    const REGEX_PASSWORD =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const REGEX_EMAIL = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    const { name, password, email, age } = formData;

    if (!REGEX_NAME.test(name)) {
      errors.name = "Invalid Name";
    }

    if (!REGEX_PASSWORD.test(password)) {
      errors.password = "Invalid Password";
    }

    if (!REGEX_EMAIL.test(email)) {
      errors.email = "Invalid Email";
    }

    if (Number(age) < 18) {
      errors.age = "You are not adult";
    }

    setErrors(errors);

    if (Object.keys(errors).length == 0) {
      setFormData({
        name: "",
        password: "",
        email: "",
        age: "",
      });
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="max-w-[800px] my-10 mx-auto border-gray-100 border-1 bg-slate-200 p-5">
      <h2 className="text-3xl font-bold">React Form</h2>
      <form
        className="p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <div className="my-4">
          <label className="mx-2 w-1/4">Name:</label>
          <input
            type="text"
            value={formData.name}
            className="mx-5 border-blue-100 border-2 rounded-lg w-1/2"
            name="name"
            onChange={handleFieldChange}
          ></input>
          {errors.name && <p className="text-red-400">{errors.name}</p>}
        </div>
        <div className="my-4">
          <label className="mx-2 w-1/4">Password:</label>
          <input
            type="text"
            value={formData.password}
            name="password"
            className="mx-5 border-blue-100 border-2 rounded-lg w-1/2"
            onChange={handleFieldChange}
          ></input>
          {errors.password && <p className="text-red-400">{errors.password}</p>}
        </div>
        <div className="my-4">
          <label className="mx-2 w-1/4">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="mx-5 border-blue-100 border-2 rounded-lg w-1/2"
            onChange={handleFieldChange}
          ></input>
          {errors.email && <p className="text-red-400">{errors.email}</p>}
        </div>
        <div className="my-4">
          <label className="mx-2 w-1/4">Age</label>
          <input
            name="age"
            type="number"
            value={formData.age}
            className="mx-5 border-blue-100 border-2 rounded-lg w-1/2"
            onChange={handleFieldChange}
          ></input>
          {errors.age && <p className="text-red-400">{errors.age}</p>}
        </div>
        <input
          type="Submit"
          text="Submit"
          className="py-2 px-5 bg-red-600 text-white rounded-lg"
        ></input>
      </form>
    </div>
  );
};

export default Form;
