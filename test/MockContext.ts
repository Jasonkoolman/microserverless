/**
 * A mocked function context.
 */
export default class MockContext {
    log: any = jest.fn();
    res: any = {
        body: null,
        headers: {}
    };
    req: any = {
        body: null,
        query: {},
        params: {}
    };

    constructor() {
        this.res.status = (status: number) => {
            this.res.status = status;
            return this.res;
        };
        this.res.json = (body: any) => {
            this.res.body = body;
            return this.res;
        };
    }

    setRouteParam(key: string, value: any) {
        this.req.params[key] = value;
    }

    setQueryParam(key: string, value: any) {
        this.req.query[key] = value;
    }

    setBody(body: any) {
        this.req.body = body;
    }
}
