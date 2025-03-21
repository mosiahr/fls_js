export function generateSubSetArray(arr) {
    // const res = []
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i]
    //     // if ()
    //     console.log()
    //     res.push([array[i + 1]])
    // }
    if (arr.length === 0) return []
    // res.push(arr[0])
    // console.log(arr.slice(1))

    // const lastEl = arr.pop()
    // console.log(arr, [lastEl])
    // res.push(arr)
    // res.push([lastEl])

    // const newArr = [...arr]
    // console.log(arr, newArr)
    // res.push(newArr)
    // res.push([arr.pop()])
    // console.log(arr)

    // res.push(arr)

    // res.push(newArr.shift())

    const lastEl = arr.pop()

    // console.log(arr)

    // const arrWithoutLastEl = generateSubSetArray(arr)
    // console.log(arrWithoutLastEl)
    const res = [[lastEl], ...arr]
    res.push([lastEl])
    res.push(arr)

    console.log(res)

    generateSubSetArray(arr)
    // console.log(res)

    return [[lastEl], ...res]
}

const res = generateSubSetArray([1, 2, 3])
console.log(res)
