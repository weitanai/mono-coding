type URLList = {
    [k: string]: URL;
   }

function isAvailable<Formats extends URLList, Key extends keyof Formats>(
    obj: Formats, key: Key
): key is Key {
    return key in obj;
}

const urlObj: URLList = {
    a: new URL('https://example.com'),
    b: new URL('https://example.com'),
}

type MyPick<O, K extends keyof O> = {
    [P in K]: O[P];
}
