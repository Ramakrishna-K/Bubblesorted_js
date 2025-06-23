

// // part 1
// function bubblesort(arr){
//     let n = arr.length;
//     let swapped;
    
// for(i=0;i<n-1;i++){
//     swapped=false
//     for(j=0;j<n-i-1;j++){
//         if(arr[j] > arr[j+1]){
//             let tem = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=tem;
//             swapped = true
            
//         }
//     }
//     if(!swapped){
//         console.log("Alredy swapped values here")
//         break;
//     }
    
// }
// return arr
// }

// let number = [1,2,3,4,5,6,7]

// let number1 = [23,45,64,34,99,22,4,5,2,1]
// console.log(bubblesort(number))

// console.log(bubblesort(number1))




// // part 2
// function bs(arr){
//     let n = arr.length;
    
//     for(i=0;i<n-1;i++){
//         for(j=0 ;j < n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//               let tem = arr[j] ;
//               arr[j]= arr[j+1]
//               arr[j+1]=tem
//             }
//         }
//         return arr
//     }
// }
// let num =  [23,45,32,45,245,8]


// console.log(bs(num))



// arrow functions 



const Bs = (arr) => {
    let n = arr.length;
    for(i=0;i < n-1; i++){
    for(j =0 ; j < n-i-1;j++){
        if(arr[i]>arr[j+1]){
            let tem = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]= tem;
        }
    }
}
    return arr

}
let result = [24,2,4,32,56,6.81,5,1];

console.log(Bs(result))





































