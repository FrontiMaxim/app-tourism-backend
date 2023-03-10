export class PermitAlreadyExistsException extends Error {
    constructor() {
        super('Такая путёвка уже есть в системе');
    }
}