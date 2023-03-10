export class DiscountNotFoundException extends Error {
    constructor() {
        super('Информации о данной скидке нет в базе данных');
    }
}