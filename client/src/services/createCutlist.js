export const createCutlist = itemList => {
  let heightsList = []
  let widthsList = []
  let cuts = []

  itemList.forEach(item => {

    let heights = parseFloat(item.height) + 12
    let widths = parseFloat(item.width) + 12
    let quantities = item.quantity * 2
    heightsList.push({ heights, quantities })
    widthsList.push({ widths, quantities })
  })
  return cuts
}