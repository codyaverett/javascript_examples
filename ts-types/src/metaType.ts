

type Prop<T> = {
    get: () => T;
    set: (t: T) => void;
}

function createProp<T>(val: T): Prop<T> {
    return {
        get() { return val },
        set(v: T) { val = v },
    }
}

type PropMap = {
    name: string;
    age: number;
};

const props = {
    name: createProp(''),
    age: createProp(0),
};


