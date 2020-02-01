import HttpTrigger from './index';
import MockContext from '../../test/MockContext';

describe('CreateProduct Function', () => {

    test('HttpTrigger should return 201', async () => {
        const context = new MockContext();
        const body = {
            name: 'product',
            description: 'description'
        };

        context.setBody(body)
    
        await HttpTrigger(context as any);
    
        expect(context.res.body).toHaveProperty('data');
        expect(context.res.body.data).toMatchObject(body);
        expect(context.res.status).toBe(201);
    });

    test('HttpTrigger should return 422', async () => { 
        const context = new MockContext();

        context.setBody({
            wrongName: 'product',
        });
    
        await HttpTrigger(context as any);
    
        expect(context.res.body).toHaveProperty('error');
        expect(context.res.status).toBe(422);
    });

});


