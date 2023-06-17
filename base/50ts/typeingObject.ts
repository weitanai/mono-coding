type Article = {
    title: string,
    price: number,
    vat: number,
    stock: number,
    description: string
}

const movBackup = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica',
    rating: 5
}


function createArticleElement(
    article: {
        title: string, price: number, vat: number
    }): string {
    const title = article.title
    const price = article.price * article.vat
    return `<h2>Buy ${title} for ${price}</h2>`
}

const movie: Article = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica'
}
createArticleElement({
    title: 'Design Systems by Alla Kholmatova',
    price: 20,
    vat: 0.19,
    rating: 5
   }) 