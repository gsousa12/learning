
const getRandomIntergerInclusive = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min
console.log(getRandomIntergerInclusive(0,100))

