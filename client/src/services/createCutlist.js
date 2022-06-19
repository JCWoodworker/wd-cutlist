export const createCutlist = itemList => {
  const cuts = itemList.map(item => {
    let heights = parseFloat(item.height) + 10
    let widths = parseFloat(item.width) + 10
    let quantities = item.quantity * 2
    return ({heights, widths, quantities})
  })
  return cuts
}