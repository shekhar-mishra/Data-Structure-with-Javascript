/*
    Find minimum and maximum element in an array 

    Given an array A of size N of integers. Your task is to find the minimum and maximum 
    elements in the array.

    Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output:
min = 1, max =  10000
*/

/*  Here we will initialize our min and max with first element.
 then we will iterate till n-1 and compare 
with all Element. */

function getMinAndMax (arr){
    let max=arr[0]
    let min=arr[0]
    for (let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }

    return {
        max:max,
        min:min
    }
}
let arr=[1,2,3,4,5,6]
console.log("Max and Min elemnet ===",getMinAndMax(arr))