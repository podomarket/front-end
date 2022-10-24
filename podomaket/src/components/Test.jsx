import React, { useEffect, useState } from "react";
import Header from "./Header";

const Test = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(4);

  const ShowMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container">
      {items.slice(0, visible).map((item) => (
        <div className="card">
          <div className="id">
            <span>{item.id}</span>
          </div>
          <p>{item.title}</p>
        </div>
      ))}
      <button onClick={ShowMoreItems}>Lead more</button>
    </div>
  );
};

export default Test;
