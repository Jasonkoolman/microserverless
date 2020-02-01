import HttpTrigger from './index';
import MockContext from '../../test/MockContext';
import * as mockDatabase from '../../test/MockDatabase';

describe('DeleteProduct Function', () => {

    test('HttpTrigger should return 200', async () => {
        const context = new MockContext();
        const products = await mockDatabase.findAll();

        context.setRouteParam('id', products[0].id);
    
        await HttpTrigger(context as any);
    
        expect(context.res.status).toBe(200);
    });

    test('HttpTrigger should return 404', async () => { 
        const context = new MockContext();

        context.setRouteParam('id', null);
    
        await HttpTrigger(context as any);
    
        expect(context.res.body).toHaveProperty('error');
        expect(context.res.status).toBe(404);
    });

});


