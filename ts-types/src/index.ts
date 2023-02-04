import { KebabCase, PascalCase } from 'type-fest';

type firstName = "cody" | "heather";
type lastName = "averett";

type name = PascalCase<`${firstName} ${lastName}`>;

const someVariable: KebabCase<name> = 'cody-averett';
const someVariable2: KebabCase<name> | 'codyAverett' = 'heather-averett';

console.log("someVariable", someVariable);
console.log("someVariable2", someVariable2);