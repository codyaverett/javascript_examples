import type { Includes } from 'type-fest';

type hasRed<array extends any[]> = Includes<array, 'red'>;
type hasBlue<array extends any[]> = Includes<array, 'blue'>;


const myArray = ['red', 'blue', 'green'];
const myOtherArray = ['blue', 'green'];

const redArray: hasRed<['red']> = true;