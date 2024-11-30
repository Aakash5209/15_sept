
// function doubleElement(arr){
//    return arr.map(num=>num*2)
// }

// console.log(doubleElement([1,2,3,4,5]))



// function getEven(arr){
//     return arr.filter(num=>num%2===0)
// }
// console.log(getEven([1,2,3,4,5]))

// function getSum(arr){
//     return arr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getSum([1,2,3,4,5]))


// function getEvenSum(arr){
//    let evenArr = arr.filter(num=>num%2==0)
//    return evenArr.reduce((acc,cur)=>acc+cur,0)
// }
// console.log(getEvenSum([1,2,3,4,5]))


// function getEvenSum(arr){
//    return arr.filter(num=>num%2==0).reduce((acc,cur)=>acc+cur,0)

// }
// console.log(getEvenSum([1,2,3,4,5]))

// function getEvenSum(arr){
// return arr.reduce((acc,cur)=>{
//     if(cur%2==0){
//         acc= acc+cur
//     }
//     return acc
// },0)
// }
// console.log(getEvenSum([1,2,3,4,5]))


// function getSqEvenSum(arr){
//     return arr.map(num=>num*num).filter(num=>num%2==0).reduce((acc,cur)=>acc+cur,0)
// }
// console.log(getSqEvenSum([1,2,3,4,5]))


// function getCommon(arr1,arr2){
//     return arr1.filter(num=>arr2.includes(num))
// }

// console.log(getCommon([1,2,3,4,5,6,7],[4,5,6,7,8,9]))


// function getNotCommonArr1(arr1,arr2){
//     return arr2.filter(num=>!arr1.includes(num))
// }

// console.log(getNotCommonArr1([1,2,3,4,5,6,7],[4,5,6,7,8,9]))


// function getNotCommonBothArr(arr1,arr2){
//     let op1 = arr1.filter(num=>!arr2.includes(num))
//     console.log("op1",op1)

//     let op2 = arr2.filter(num=>!arr1.includes(num))
//     console.log("op2",op2)

//     // return [...op1,...op2]
//     let res = [...op1,...op2]
//     return res


// }

// console.log(getNotCommonBothArr([1,2,3,4,5,6],[4,5,6,7,8]))



// function getChunk(arr,key){
//     let res = []
//     for(let i=0;i<arr.length;i+=key){
//         let op = arr.slice(i,i+key)
//         res.push(op)

//     }
//     return res
// }

// console.log(getChunk([1,2,3,4,5,6,7,8,9],3))


