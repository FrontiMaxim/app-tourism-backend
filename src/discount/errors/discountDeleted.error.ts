export class DiscountDeletedException extends Error {
    constructor() {
        super('Не удалось удалить информацию о скидке');
    }
}