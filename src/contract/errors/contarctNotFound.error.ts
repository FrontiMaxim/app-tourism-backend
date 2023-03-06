export class ContarctNotFoundException extends Error {
    constructor() {
        super('Данного договора нет в базе данных');
    }
}