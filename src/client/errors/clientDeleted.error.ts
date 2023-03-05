export class СlientDeletedException extends Error {
    constructor() {
        super('Не удалось удалить клиента');
    }
}