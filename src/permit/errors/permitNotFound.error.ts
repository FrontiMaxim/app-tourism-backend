export class PermitNotFoundException extends Error {
    constructor() {
        super('Информации о данной путёвке нет в базе данных');
    }
}