type primitives = number | string | boolean

function memoize<T, K, U>(fn: (...input: T[]) => U, resolver?: (input: T[]) => K): (...input: T[]) => U {
    let cache = new Map<K | T, U>()
    return (...input: T[]) => {
        let key = resolver ? resolver(input) : input[0]
        if (cache.has(key)) {
            console.log("Returning cached result")
            let cachedResult = cache.get(key);
            if (cachedResult !== undefined) return cachedResult
        }
        let result = fn(...input)
        cache.set(key, result)
        return result
    }
}

function getValues<T>(obj: ObjectLiteral<T>): any[] {
    let arr: Array<any> = []
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr;
}

function getSum(...input: number[]) {
    return input.reduce((prev, curr) => {
        return prev + curr
    }, 0)
}

// let values = memoize<ObjectLiteral<number|string>, any[]>(getValues, (obj: ObjectLiteral<number|string>) => JSON.stringify(Object.keys(obj)));

// let obj: ObjectLiteral<number|string>= {
//     a: 1,
//     b: 2,
//     c: 3
// }


let sums = memoize<number, string, number>(getSum, (obj: number[]) => JSON.stringify(obj))

console.log(sums(1, 2, 3, 4));

// obj.a = 4

// console.log(obj)
console.log(sums(1, 2, 3, 8))

// let obj2 : ObjectLiteral<number|string>= {
//     x: 100,
//     y: 200,
//     z: 300
// }

// console.log(values(obj2));

// obj.a = 4

// console.log('Obj 2',obj2)
// console.log('Obj 3',values(obj2))

