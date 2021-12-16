import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((toyData) => setToys(toyData));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewItem(newItem) {
    setToys([...toys, newItem]);
  }

  function handleDelete(item) {
    const filteredToys = toys.filter((toy) => toy.id !== item.id);

    setToys(filteredToys);
  }

  function handleUpdateLikes(item) {
    const updatedItems = toys.map(toy => toy.id === item.id ? item : toy)

    setToys(updatedItems)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmitAdd={handleAddNewItem} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onClickUpdate={handleUpdateLikes} onClickRemove={handleDelete} toys={toys} />
    </>
  );
}

export default App;
