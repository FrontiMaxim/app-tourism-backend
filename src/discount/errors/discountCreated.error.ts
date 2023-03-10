export class  DiscountCreatedException extends Error {
    constructor() {
        super('Не удалось сохранить информаицю о новой скидке');
    }
}