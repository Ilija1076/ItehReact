import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" />

      <label htmlFor="about">About you:</label>
      <textarea id="about" name="about"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};


export default Form;