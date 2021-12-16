import React, { useState } from "react";

function ToyForm({ onSubmitAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newItem) => onSubmitAdd(newItem));

    setFormData({
      name: "",
      image: "",
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={formData.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

//make form input controlled with onChange/value
//on Submit, fetch/post request and send state obj to server
//in App.js, create function to setToys(...toys, newItem)
//pass this func to .then in ToyForm.js.
