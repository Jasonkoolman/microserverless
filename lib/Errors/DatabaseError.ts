import DomainError from './DomainError';

export default class DatabaseError extends DomainError {
    constructor(error: any) {
        super(error);
        this.name = 'DatabaseError';
    }
}
