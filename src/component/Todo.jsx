import React, { useState } from "react";
import "./todo.css";
import todoimg from "../images/todo.webp";

function Todo() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData.trim() !== '') {
      setItems([...items, inputData]);
      setInputData('');
    }
  };

  const deleteItem = (indexToDelete) => {
    // console.log(indexToDelete)
    const updatedItems = items.filter((ele, index) => index !== indexToDelete);
    setItems(updatedItems);
  };
  const removeAll= ()=>{
    setItems([])
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoimg} alt="todo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="add-items">
            <input
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="add items"
              onClick={addItem}
            ></i>
          </div>
          <div className="show-items-container">
              {items.map((elem, index) => (
                <div className="each-item" key={index}>
                  <h3>{elem}</h3>
                  <i
                    className="fa fa-trash add-btn"
                    title="delete item"
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              ))}
          </div>
          <div className="remove-btn">
            <button onClick={()=> removeAll()}>Check list</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
