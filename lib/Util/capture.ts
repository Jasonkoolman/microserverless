/**
 * Promise wrapper to capture the result into a fixed array (aka "tuple").
 */
export default function capture<T>(promise: Promise<T>): Promise<(any|T)[]> {
    return promise
        .then(data => [null, data])
        .catch(err => [err, null]);
}
