
const nums = [1,2,3,4,5]

// const numSquare = nums.map(n => n * n )

function double(n){
    return n*2
}

const doubleNum = nums.map(function triple(n){
    return n*3
})

// console.log(doubleNum)

const cubeNum = nums.map(n => n*n*n)
console.log(cubeNum)
// console.log(numSquare)

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
// const newCountries = countries.map((i) => i.toUpperCase())

// console.log(newCountries)