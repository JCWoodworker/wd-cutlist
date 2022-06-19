import React from "react"

const ItemTile = ({ item, deleteItem }) => {

  const handleDeleteClick = event => {
    event.preventDefault()
    debugger
    deleteItem(item)
  }

  return (
    <div className="item-tile">
      <p>{item.type}:</p>
      <p>Height: {item.height}"</p>
      <p>Width: {item.width}"</p>
      <p>Quantity: {item.quantity}</p>
      <p onClick={handleDeleteClick}>-</p>
    </div>
  )
}

export default ItemTile