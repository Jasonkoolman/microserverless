import { Context } from '@azure/functions';
import { DomainError, InternalError, EntityNotFoundError, DatabaseError, ValidationError } from '../Errors';
import { HttpStatusCode } from '../Constants';

export default abstract class HttpController {

    /**
     * Return a successful HTTP response.
     */
    successResponse(res: Context['res'], body: any, status = HttpStatusCode.Ok) {
        res.status(status).json({
            data: body
        });
    }

    /**
     * Return a failed HTTP response.
     */
    errorResponse(res: Context['res'], error: DomainError) {
        const status = this.getStatusCode(error);

        // prevent direct exposure of uncaught errors
        if (error instanceof DomainError === false) {
            error = new InternalError(error);
        }

        res.status(status).json({
            error: {
                name: error.name,
                message: error.message,
                details: error.details
            }
        })
    }

    /**
     * Get the corresponding HTTP status code from the error.
     */
    getStatusCode(error: Error) {
        switch (true) {
            case error instanceof EntityNotFoundError:
                return HttpStatusCode.NotFound;
            case error instanceof ValidationError:
                return HttpStatusCode.UnprocessableEntity;
            case error instanceof DatabaseError:
                return HttpStatusCode.BadRequest;
            default:
                return HttpStatusCode.InternalServerError;
        }
    }

}
