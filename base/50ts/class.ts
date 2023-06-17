class Discount {
    isPercentage: boolean
    amount: number
    constructor(
        isPercentage: boolean,
        amount: number) {
        this.isPercentage = isPercentage
        this.amount = amount
    }
    apply(article: Article) {
        if (this.isPercentage) {
            article.price = article.price
                - (article.price * this.amount)
        } else {
            article.price = article.price - this.amount
        }
    }
}
const discount: Discount = new Discount(true, 0.1);
