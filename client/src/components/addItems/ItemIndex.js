import { useEffect, useState } from "react"
import React from "react"
import ItemTile from "./ItemTile"
import ItemForm from "./itemForm"
import CutlistIndex from "./showCutlist/CutlistIndex"

const ItemIndex = (props) => {
  const [itemList, setItemList] = useState([])

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
      <CutlistIndex
        itemList={itemList}
      />
    </>
  )
}

export default ItemIndex