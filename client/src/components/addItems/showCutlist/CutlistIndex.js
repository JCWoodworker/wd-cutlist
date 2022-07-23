import React, { useState } from "react"
import CutlistTile from "./CutlistTile"
import { createCutlist } from "../../../services/createCutlist"

const CutlistIndex = ({ itemList }) => {
  const cuts = createCutlist(itemList)
  const cutlistTiles = cuts.map(item => {

    return (
      <CutlistTile
        item={item}
      />
    )
  })

  return (
    <>
      <h3>CUTLIST:</h3>
      {cutlistTiles}
    </>
  )
}

export default CutlistIndex