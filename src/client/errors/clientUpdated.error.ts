export class СlientUpdatedException extends Error {
    constructor() {
        super('Не удалось обновить клиента');
    }
}