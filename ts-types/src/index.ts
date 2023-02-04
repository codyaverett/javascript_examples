import { KebabCase } from 'type-fest';

type firstName = "cody" | "heather";
type lastName = "averett";

type name = "codyAverett" | "heatherAverett"

const someVariable: KebabCase<name> = 'cody-averett';


const someVariable2: KebabCase<name> | 'codyAverett' = 'cody-averett';


console.log("elllo");