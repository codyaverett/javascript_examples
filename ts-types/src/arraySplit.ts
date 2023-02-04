import type { Split } from 'type-fest';

declare function split<S extends string, D extends string>(string: S, separator: D): Split<S, D>;
type Item = 'foo' | 'bar' | 'baz' | 'waldo';

const items = 'foo,bar,baz,waldo';

let array: Item[];

array = split(items, ',');

console.log(array);