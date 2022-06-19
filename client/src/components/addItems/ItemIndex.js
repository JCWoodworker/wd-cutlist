import { useEffect, useState } from "react"
import React from "react"
import ItemTile from "./ItemTile"
import ItemForm from "./itemForm"

const ItemIndex = (props) => {
  const [itemList, setItemList] = useState([
    {id: 1, type: "Door", height: 82, width: 42, quantity: 2},
    {id: 2, type: "Window", height: 48, width: 36, quantity: 4},
    {id: 3, type: "Window", height: 48, width: 72, quantity: 1}
  ])

  const addNewItem = itemToAdd => {
    setItemList([...itemList, itemToAdd])
    return true
  }

  const deleteItem = itemToDelete => {
    setItemList(itemList.filter(item => {
      return item != itemToDelete
    }))
  }

  let itemTiles = null
  if (itemList) {
    itemTiles = itemList.map(item => {
      return (
        <ItemTile
        key={Math.floor(Math.random() * 10000)}
        item={item}  
        deleteItem={deleteItem}    
        />
      )
    })
  }
    
  return (
    <>
      <h3>Add Items Here:</h3>
      <div className="item-list">
        {itemTiles}
      </div>
      <div className="form-container">
        <ItemForm
          addNewItem={addNewItem}
        />
      </div>
    </>
  )
}

export default ItemIndex