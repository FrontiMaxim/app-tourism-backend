export class DiscountUpdatedException extends Error {
    constructor() {
        super('Не удалось обновить информацию о скидке');
    }
}