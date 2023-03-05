export class СlientCreatedException extends Error {
    constructor() {
        super('Не удалось создать клиента');
    }
}