export class PermitDeletedException extends Error {
    constructor() {
        super('Не удалось удалить информацию о путёвке');
    }
}