import React, { useState } from "react"
import CutlistTile from "./CutlistTile"
import { createCutlist } from "../../../services/createCutlist"

const CutlistIndex = props => {
  // const [cutlist, setCutlist] = useState([])
  debugger
  const cuts = createCutlist(props.itemList)
  debugger
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