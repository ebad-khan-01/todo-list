import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  // Add an item to the list
  const addItem = () => {
    if (inputData.trim()) {
      setItems([...items, inputData.trim()]);
      setInputData('');
    }
  };

  // Delete an item from the list
  const deleteItem = (indexToDelete) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToDelete));
  };

  // Remove all items from the list
  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src="./todo.webp" alt="Todo App" />
          <figcaption>Add Your List Here</figcaption>
        </figure>

        {/* Add Items Section */}
        <div className="add-items">
          <input
            type="text"
            placeholder="Add items"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addItem()} // Add item on pressing Enter
          />
          <button
            className="add-btn"
            title="Add Item"
            onClick={addItem}
          >
            +
          </button>
        </div>

        {/* Show Items Section */}
        <div className="show-items">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="each-item" key={index}>
                <h3>{item}</h3>
                <button
                  className="delete-btn"
                  title="Delete Item"
                  onClick={() => deleteItem(index)}
                >
                  🗑
                </button>
              </div>
            ))
          ) : (
            <p className="no-items">Your list is empty. Start adding items!</p>
          )}
        </div>

        {/* Remove All Button */}
        {items.length > 0 && (
          <div className="remove-btn">
            <button onClick={removeAll}>Clear List</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
