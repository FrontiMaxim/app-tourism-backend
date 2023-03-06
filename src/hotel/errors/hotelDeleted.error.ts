export class HotelDeletedException extends Error {
    constructor() {
        super('Не удалось удалить информацию об отеле');
    }
}