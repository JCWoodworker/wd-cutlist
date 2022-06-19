import React from "react"

const CutlistTile = ({ item }) => {
  
  return (
    <>
      <p>{item.heights}" x {item.quantities}</p>
      <p>{item.widths}" x {item.quantities}</p>
    </>
  )
}

export default CutlistTile