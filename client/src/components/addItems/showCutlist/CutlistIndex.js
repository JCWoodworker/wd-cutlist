import React, { useState } from "react"
import CutlistTile from "./CutlistTile"
import { createCutlist } from "../../../services/createCutlist"

const CutlistIndex = props => {
  // const [cutlist, setCutlist] = useState([])
  const cuts = createCutlist(props.itemList)
  const cutlistTiles = cuts.map(item => {
    return (
      <CutlistTile
        item={item}
      />
    )
  })

  return (
    <>
      {cutlistTiles}
    </>
  )
}

export default CutlistIndex