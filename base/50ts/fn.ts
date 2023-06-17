function search(
    term: string,
    tags?: string[]
): Promise<string[]> 

function search(
    term: string,
    callback: (results: string[]) => void,
    tags?: string[]
): void
// Here comes the implementation
function search(
    term: string,
    p2?: unknown,
    p3?: string[]
) {
    // Now for the implementation
}

search('heloo',  ['hello'])