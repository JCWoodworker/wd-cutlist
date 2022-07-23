import React, { useState } from "react"
import { getNewId } from "../../services/getNewId"

export const ItemForm = (props) => {
  const [newItem, setNewItem] = useState({
    type: "",
    height: "",
    width: "",
    quantity: ""
  })

  const handleInputChange = event => {
    setNewItem({ ...newItem, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewItem(newItem)
    clearForm()
  }

  const clearForm = () => {
    setNewItem({
      type: "",
      height: "",
      width: "",
      quantity: ""
    })
  }


  return (
    <div className="form-container">
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="inputs">
        <label htmlFor="type" className="type">
          <p>Choose door or window below:</p>
          <input
            list="types"
            id="type"
            name="type"
            onChange={handleInputChange}
            value={newItem.type}
            required
          />
        </label>
        <datalist id="types">
          <option value="Door" />
          <option value="Window" />
        </datalist>
        <label htmlFor="height" className="height">Height
          <input
            type="float" min="1" max="9999"
            id="height"
            name="height"
            onChange={handleInputChange}
            value={newItem.height}
            style={{ width: "50px" }}
            required
          />
        </label>
        <label htmlFor="width" className="width">Width
          <input
            type="float" min="1" max="9999"
            id="width"
            name="width"
            onChange={handleInputChange}
            value={newItem.width}
            style={{ width: "50px" }}
            required
          />
        </label>
        <label htmlFor="quantity" className="quantity">Quantity
          <input
            type="float" min="1" max="9999"
            id="quantity"
            name="quantity"
            onChange={handleInputChange}
            value={newItem.quantity}
            style={{ width: "50px" }}
            required
          />
        </label>
      </div>
      <div className="submit-button">
        <input 
          id="all-buttons"
          type="submit">
        </input>
      </div>
    </form>
    </div>
  )
}

export default ItemForm