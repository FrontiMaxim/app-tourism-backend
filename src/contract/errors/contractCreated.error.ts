export class  ContractCreatedException extends Error {
    constructor() {
        super('Не удалось сохранить новый договор');
    }
}