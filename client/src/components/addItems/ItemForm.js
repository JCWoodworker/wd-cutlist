import React, { useState } from "react"

export const ItemForm = (props) => {
  const [newItem, setNewItem] = useState({
    id: Math.floor(Math.random() * 1000),
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
      id: "",
      type: "",
      height: "",
      width: "",
      quantity: ""
    })
  }


  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <label htmlFor="type" className="type">Type
        <input
          type="text"
          id="type"
          name="type"
          onChange={handleInputChange}
          value={newItem.type}
        />
      </label>
      <label htmlFor="height" className="height">height
        <input
          type="float" min="1" max="9999"
          id="height"
          name="height"
          onChange={handleInputChange}
          value={newItem.height}
        />
      </label>
      <label htmlFor="width" className="width">width
        <input
          type="float" min="1" max="9999"
          id="width"
          name="width"
          onChange={handleInputChange}
          value={newItem.width}
        />
      </label>
      <label htmlFor="quantity" className="quantity">Quantity
        <input
          type="float" min="1" max="9999"
          id="quantity"
          name="quantity"
          onChange={handleInputChange}
          value={newItem.quantity}
        />
      </label>
      <input 
        id="all-buttons"
        type="submit">
      </input>
    </form>
  )
}

export default ItemForm