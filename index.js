const fun = (arr) => {
  
  arr = arr.map(arr => arr.toLowerCase())

  const first = arr[0].split('')
  const second = arr[1].split('')

  return second.every(char => first.includes(char))
}

console.log(fun(["Mary", "Aarmy"]))


//  second example with for loop
//
//  const fun = (arr) => {
//  arr[0] = arr[0].toLowerCase()
//  arr[1] = arr[1].toLowerCase()
//   console.log(arr[0], arr[1])
//   let check = []
//   for(let i = 0; i < arr[1].length; i++) {
//     for(let y = 0; y < arr[0].length; y++) {
//       if(arr[1][i] == arr[0][y]) {
//         check.push(1)
//         break
//       }
//     }
//   }
//   console.log(arr[1].length, check.length, check )
//   return arr[1].length == check.length ? true : false
//   }
