export class  PermitCreatedException extends Error {
    constructor() {
        super('Не удалось сохранить информаицю о новой путёвке');
    }
}