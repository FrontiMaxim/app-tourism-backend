export class PermitUpdatedException extends Error {
    constructor() {
        super('Не удалось обновить информацию о путёвке');
    }
}