import type { FixedLengthArray } from 'type-fest';
type FencingTeam = FixedLengthArray<string, 3 | 2>;
const guestFencingTeam: FencingTeam = ['Josh', 'Michael', 'Robert'];
const homeFencingTeam: FencingTeam = ['George', 'John'];

//=> error TS2322: Type string[] is not assignable to type 'FencingTeam'
// guestFencingTeam.push('Sam');
