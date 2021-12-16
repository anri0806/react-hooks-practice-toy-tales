import React from "react";

function ToyCard({ toy, onClickRemove, onClickUpdate }) {
  function handleClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onClickRemove(toy));
  }

  function handleLikes() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: parseInt(toy.likes + 1),
      }),
    })
      .then((res) => res.json())
      .then((patchedData) => onClickUpdate(patchedData));
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;

