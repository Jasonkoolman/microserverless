export default abstract class DomainError extends Error {
    details: any;

    constructor(error: any) {
        super(error);
        (Error as any).captureStackTrace(this, this.constructor);
    }
}
