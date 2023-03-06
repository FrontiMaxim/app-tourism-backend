export class HotelUpdatedException extends Error {
    constructor() {
        super('Не удалось обновить информацию об отеле');
    }
}