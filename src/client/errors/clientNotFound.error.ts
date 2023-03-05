export class ClientNotFoundException extends Error {
    constructor() {
        super('Такого клиента нет в базе данных');
    }
}