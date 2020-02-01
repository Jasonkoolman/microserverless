import { validate as validateClass } from 'class-validator';
import { ValidationError } from '../Errors';

const VALIDATOR_OPTIONS = {
    whitelist: true,
    forbidNonWhitelisted: true,
    validationError: {
        target: false,
        value: true
    }
}

type Newable<T> = {
    new (): T;
};

type ValidationResult<T> = {
    error: ValidationError;
    schema: T;
};

/**
 * Wrapper function to validate a schema class against the given data.
 * 
 * Returns the schema instance when the validation passes and throws
 * an exception containing the validation error otherwise.
 */
export default async function validate<T>(schema: Newable<T>, data: Object): Promise<ValidationResult<T>> {
    const instance = new schema;

    try {
        Object.keys(data).forEach(key => instance[key] = data[key]);
    } catch(err) {
        new ValidationError('No input supplied');
    }
    
    const errors = await validateClass(instance, VALIDATOR_OPTIONS);
    const rejected = errors.length > 0;
        
    return {
        error: rejected ? new ValidationError('Input validation failed', errors[0]) : null,
        schema: rejected ? null : instance
    }
}
