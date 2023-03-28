
// function to convert a string to snake case
export function snakeCase(str: string): string {
    return str
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase();
}

// run the function
console.log(snakeCase('helloWorld'));
