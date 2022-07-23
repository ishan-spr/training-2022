type primitives = number|string|boolean

function memoize<T, U>(fn: (input: T) => U, resolver: (input: T) => primitives): (input: T) => U {
    let cache = new Map<primitives, U>()
    return (input: T) => {
        let key = resolver(input)
        if (cache.has(key)) {
            let cachedResult = cache.get(key);
            if (cachedResult !== undefined) return cachedResult
        }
        let result = fn(input)
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

let values = memoize<ObjectLiteral<number|string>, any[]>(getValues, (obj: ObjectLiteral<number|string>) => JSON.stringify(Object.keys(obj)));

let obj: ObjectLiteral<number|string>= {
    a: 1,
    b: 2,
    c: 3
}

console.log(values(obj));

obj.a = 4

console.log(obj)
console.log(values(obj))

