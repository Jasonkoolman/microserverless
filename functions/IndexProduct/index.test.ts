import HttpTrigger from './index';
import MockContext from '../../test/MockContext';

describe('IndexProduct Function', () => {

    test('HttpTrigger should return 200', async () => {
        const context = new MockContext();

        await HttpTrigger(context as any);

        expect(context.res.body).toHaveProperty('data');
        expect(context.res.status).toBe(200);
    });

});
