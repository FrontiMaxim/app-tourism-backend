export class HotelNotFoundException extends Error {
    constructor() {
        super('Информации о данном отеле нет в базе данных');
    }
}