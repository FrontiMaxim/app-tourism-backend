export class DiscountAlreadyExistsException extends Error {
    constructor() {
        super('Такая скидка уже есть в системе');
    }
}