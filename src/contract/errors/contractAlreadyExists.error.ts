export class ContractAlreadyExistsException extends Error {
    constructor() {
        super('Такой договор уже есть в системе');
    }
}