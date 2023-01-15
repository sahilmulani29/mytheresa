
// to check If movied added to wish list
export const isItemAddedToList = (id, list) => {
  const index = list.findIndex((item) => item.id === id)
  return index > -1
}

// Common function to create Genres, prodcution company & countries
export const getStringCommaSaperated = (list, key) => {
  let result = ''
  for (let i = 0; i < list[key].length; i++) {
    result += list[key][i].name
    if (i !== list[key].length - 1) {
      result += ', '
    }
  }
  return result
}
