export let number = (array: string[]): string[] =>
    array.map((str, index) => `${++index}: ${str}`);
