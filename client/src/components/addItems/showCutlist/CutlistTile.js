import React from "react"

const CutlistTile = ({ item }) => {
  let piece = null
  let title = "Heights"

  item.heights? piece = item.heights : piece = item.widths

  return (
    <>
      <p>{piece}" x {item.quantities}</p>
    </>
  )
}

export default CutlistTile