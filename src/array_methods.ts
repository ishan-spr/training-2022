/*
Look for initial implementation of map reduce and filter
*/

export const myReduce = <T>(arr: Array<T>, fn: (prev: T, curr: T) => T, initial?: T): any => {
    if (arr.length === 0) return null
    let ans: T = initial ? initial : arr[0];
    for (let i of arr) {
        ans = fn(ans, i)
    }
    return ans
}

const getMax = (a: number, b: number) => Math.max(a, b);

const arr = [100, 50, 45, 67, 2876]
let ans = myReduce<number>(arr, getMax, 50)

console.log("Reduce : ", ans);


/* 
Remove redundant variables and add generics for output.
*/
export const myMap = <T>(arr: Array<T>, fn: (el: T) => any): Array<any> | null => {
    let ans = arr.reduce((prev: Array<any>, curr: T) => {
        let temp = [...prev]
        temp.push(fn(curr))
        return temp
    }, [])
    return ans;
}

const add1 = (a: number) => a + 1;

const arr2 = [100, 50, 45, 67, 2876]
let ans2 = myMap<number>(arr2, add1)

console.log("Map : ", ans2);

export const myFilter = <T>(arr: Array<T>, fn: (el: T) => boolean): Array<any> | null => {
    let ans = arr.reduce((prev: Array<any>, curr: T) => {
        let temp = [...prev]
        let isIncluded = fn(curr)
        if (isIncluded) temp.push(curr)
        return temp
    }, [])
    return ans;
}

const cond = (a: number) => a > 60;

const arr3: Array<number> = [100, 50, 45, 67, 2876]
let ans3 = myFilter<number>(arr3, cond)

console.log("Filter : ", ans3);
