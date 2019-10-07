["a","b","c"].map(x => {
  console.log(x+":map1")
  return x;
})
.map(x => {
  console.log(x+":flatMap")
  return x;
})