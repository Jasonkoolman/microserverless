import DomainError from './DomainError';

export default class InternalError extends DomainError {
    constructor(error: any) {
        super(error);
        this.name = 'InternalError';
    }
}
