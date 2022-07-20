interface ObjectLiteral {
    [key: string]: any;
}

const get = (obj: object, path: Array<string | number>, opt?: any) : any=> {
    if (path.length === 0) return obj;
    let key = path[0] as string
    if (obj.hasOwnProperty(key)) {
        return get(obj[key as keyof typeof obj], path.slice(1), opt)
    }
    return opt;
}

const set = (obj: ObjectLiteral, path: Array<string | number>, value: any) : ObjectLiteral=> {
    if (path.length == 0) {
        return value;
    }
    let key = path[0] as string;
    if (!obj.hasOwnProperty(key)) {
        obj[key as keyof typeof obj] = {}
    }

    obj[key as keyof typeof obj] = set(obj[key as keyof typeof obj], path.slice(1), value);
    return obj;
};

let object: ObjectLiteral = {
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