import DomainError from './DomainError';

export default class EntityNotFoundError extends DomainError {
    constructor(message = 'Entity not found') {
        super(message);
        this.name = 'EntityNotFoundError';
    }
}
