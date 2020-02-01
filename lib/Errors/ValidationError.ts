import DomainError from './DomainError';

export default class ValidationError extends DomainError {
    constructor(message: string, details?: any) {
        super(message);
        this.name = 'ValidationError'
        this.details = details;
    }
}
