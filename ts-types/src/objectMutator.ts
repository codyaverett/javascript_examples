
function mutatePrototype<T, K extends keyof T>(prototypeObject: Object & Function & { prototype: T }, property: K, value: T[K] extends Function ? T[K] : never) {
    Object.defineProperty(prototypeObject.prototype, property, {
        configurable: true,
        value
    });
}

function propertyOverwriter<T>(obj: T): <K extends keyof T>(property: K, value: T[K]) => void {
    return function <K extends keyof T>(property: K, value: T[K]) {
        obj[property] = value;
    };
}
