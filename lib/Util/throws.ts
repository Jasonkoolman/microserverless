import { DomainError } from "../Errors";

type Newable<T> = {
    new (error: any): T;
};

/**
 * Promise wrapper to throw the given exception on error.
 */
export default async function throws<T>(
    promise: Promise<T>,
    error: Newable<DomainError>
): Promise<T|DomainError> {
    try {
        return await promise;
    }
    catch (err) {
        throw new error(err);
    }
}
