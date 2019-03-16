const fun = (arr) => {
  
  arr = arr.map(arr => arr.toLowerCase())

  const first = arr[0].split('')
  const second = arr[1].split('')

  return second.every(char => first.includes(char))
}

console.log(fun(["Mary", "Aarmy"]))
