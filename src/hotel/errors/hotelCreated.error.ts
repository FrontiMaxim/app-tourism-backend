export class  HotelCreatedException extends Error {
    constructor() {
        super('Не удалось сохранить информаицю о новом отеле');
    }
}