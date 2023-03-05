export class ClientAlreadyExistsException extends Error {
    constructor() {
        super('Такой клиент уже есть в системе');
    }
}