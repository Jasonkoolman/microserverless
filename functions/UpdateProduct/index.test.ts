import HttpTrigger from './index';
import MockContext from '../../test/MockContext';
import * as mockDatabase from '../../test/MockDatabase';

describe('UpdateProduct Function', () => {

    test('HttpTrigger should return 200', async () => {
        const context = new MockContext();
        const products = await mockDatabase.findAll();
        const body = {
            name: 'product',
            description: 'description'
        };

        context.setRouteParam('id', products[0].id);
        context.setBody(body)
    
        await HttpTrigger(context as any);
    
        expect(context.res.body).toHaveProperty('data');
        expect(context.res.body.data).toMatchObject(body);
        expect(context.res.status).toBe(200);
    });

    test('HttpTrigger should return 404', async () => { 
        const context = new MockContext();

        context.setRouteParam('id', null);
        context.setBody({
            name: 'product',
            description: 'description'
        });
    
        await HttpTrigger(context as any);
    
        expect(context.res.body).toHaveProperty('error');
        expect(context.res.status).toBe(404);
    });

    test('HttpTrigger should return 422', async () => { 
        const context = new MockContext();
        const products = await mockDatabase.findAll();

        context.setRouteParam('id', products[0].id);
        context.setBody({
            wrongName: 'product'
        });
    
        await HttpTrigger(context as any);
    
        expect(context.res.body).toHaveProperty('error');
        expect(context.res.status).toBe(422);
    });

});


