
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


// function customMap(arr,cb){
//   let res = []
//   for(let i =0;i<arr.length;i++){
//     // let op = cb(arr[i])
//     res.push(cb(arr[i]))
//   }
//   return res
// }

// console.log(customMap([1,2,3,4,5],x=>x*2))

// function customFilter(arr,cb){
//   let res = []
//   for(let num of arr){
//     let op = cb(num)
//     if(op){
//       res.push(num)
//     }
//     // if(cb(num)){
//     //   res.push(num)
//     // }
//   }
//   return res
// }

// console.log(customFilter([1,2,3,4,5],x=>x%2===0))


// function customReduce(arr,cb,init){
//   let acc = init
//   for(let num of arr){
//     acc = cb(acc,num)
//   }
//   return acc
// }

// // const sum =(x,y)=>x+y
// function sum(x,y){
//   return x+y
// }

// console.log(customReduce([1,2,3,4,5],sum,0))


// function seconedLarge(arr){
//   let max1 = -1
//   let max2 =-1
//   for(let num of arr){
//     if( num>max1){
//       max2 =max1
//       max1= num
//     }
//     else if(max1 != num && num>max2){
//       max2 = num
//     }
//   }
//   if(max2==-1 && max1!= -1){
//     console.log("max1-",max1,"max2- none",)  
//   }
//   else if(max1 == -1 && max2 == -1){
//     console.log("max1- none","max2- none",)  

//   }
//   else{
//     console.log("max1-",max1,"max2-",max2)  
//   }
  
// }
// seconedLarge([10])




// function getFreq(arr){
//   let freq = {}
//   for(let num of arr){
//     if(freq[num]){
//       freq[num]++
//     }
//     else{
//       freq[num] = 1

//     }
//   }
//   return freq

// }
// console.log(getFreq(['ab','abc','ab','cd','ab','ab']))



// function getFreq(arr){
//  return arr.reduce((acc,cur)=>{
//     if(acc[cur]){
//       acc[cur]++
//     }
//     else{
//       acc[cur] =1

//     }
//     return acc
//   },{})
// }

// console.log(getFreq(['ab','abc','ab','cd','ab','ab']))
function getFreq(arr){
 return arr.reduce((acc,cur)=>{
   acc[cur] = (acc[cur] || 0) +1
    return acc
  },{})
}

console.log(getFreq(['ab','abc','ab','cd','ab','ab']))

