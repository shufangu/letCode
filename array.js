/*
 * @Author: your name
 * @Date: 2020-10-27 23:05:29
 * @LastEditTime: 2020-11-24 23:35:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /letCode/array.js
 */
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]



// const findTotalNum = (arr, target) => {
//     const map = {};
//     for(let i = 0; i < arr.length ; i++) {
//         const key = target - arr[i];
//         if(map[key] === undefined) {
//             map[arr[i]] = [key, i];
//             console.log(map);
//         } else {
//             return [map[key][1], i]
//         }
//     }
// }

// console.log(findTotalNum([2, 7, 11, 15], 9));


const totalNumsIndex = (arr, target) => {
    const map = new Map();
    for(let i = 0; i< arr.length; i++) {
        const key = target - arr[i];
        if(map.get(key) === undefined) {
            map.set(arr[i], i)
        } else {
            return [map.get(key), i]
        }
    }
}

console.log(totalNumsIndex([ 11,2, 15, 7], 9));