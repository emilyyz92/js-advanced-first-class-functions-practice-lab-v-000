// Code your solution in this file!
const logDriverNames = function (driversArray) {
  driversArray.forEach(function (el, i, array) {
    console.log(el["name"]);
  })
}

const logDriversByHometown = function (driversArray, hometown) {
  driversArray.filter( function (value) {
    return value.toLowerCase() === hometown.toLowerCase()
  }
)
}