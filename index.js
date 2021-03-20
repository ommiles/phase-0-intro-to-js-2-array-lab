const cats = [`Milo`, `Otis`, `Garfield`]
const copyOfCats = [...cats]

// appends a cat to the end of the cats array
// add Bob to end
let destructivelyAppendCat = () => {
    return(cats.push(`Ralph`))
}

// prepends a cat to the beginning of the cats array
// add Bob to beginning
let destructivelyPrependCat = () => {
    return(cats.unshift(`Bob`))
}

// removes the last cat from the cats array
// [`Milo`, `Otis`]
let destructivelyRemoveLastCat = () => {
    return(cats.pop())
}

// removes the first cat from the cats array
// [ 'Otis', 'Garfield' ]
let destructivelyRemoveFirstCat = () => {
    return(cats.shift())
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
let appendCat = () => {
    return([...cats, `Broom`])
} 

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
let prependCat = () => {
    return([`Arnold`, ...cats])
} 

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
let removeLastCat = () => {
    return(cats.slice(0, 2))
} 

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
let removeFirstCat = () => {
    return(cats.slice(1))
} 