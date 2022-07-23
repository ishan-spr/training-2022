interface ObjectLiteral <T>{
    [key: string]: T | ObjectLiteral<T>;
}

function isObject <T> (obj : any): obj is ObjectLiteral<T> {
   if(typeof obj === 'object'){
    return true
   } 
   return false
}

const get = <T>(obj: ObjectLiteral<T> | T, path: Array<string | number>, opt?: T) : T | null=> {
    if (path.length === 0 && opt) return opt;
    let key = path[0] as string
    if(isObject(obj)){
        if (obj.hasOwnProperty(key)) {
            return get(obj[key as keyof typeof obj], path.slice(1), opt)
        }
        return opt ? opt : null;
    }
    return null
}

const set = <T>(obj: ObjectLiteral<T> | T, path: Array<string | number>, value: any): ObjectLiteral<T> | T => {
    if (path.length == 0) {
        return value;
    }
    let key = path[0] as string;
    if (isObject(obj)) {
        if (!obj.hasOwnProperty(key)) {
            obj[key as keyof typeof obj] = {} as ObjectLiteral<T>
        }

        obj[key as keyof typeof obj] = set(obj[key as keyof typeof obj], path.slice(1), value);
        return obj;
    }
    return obj
};

let object: ObjectLiteral<any> = {
    a: [{ b: { c: 15 } }],
    x: {
        y: {
            z: "25",
        },
    },
};

let value = get(object, ["a", "0","b","c"], 10);
console.log(value);

let setValue = set(object, ["x", "y", "z"], [4, 0, 8]);
console.log("set value", setValue.x.y.z);