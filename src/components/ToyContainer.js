import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onClickRemove, onClickUpdate }) {
  const toyCards = toys.map(toy => <ToyCard onClickUpdate={onClickUpdate} onClickRemove={onClickRemove} key={toy.id} toy={toy} /> )
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
