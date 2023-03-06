export class HotelAlreadyExistsException extends Error {
    constructor() {
        super('Такой отель уже есть в системе');
    }
}