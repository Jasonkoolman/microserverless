import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import ProductController from '../../lib/Controllers/ProductController';
import ProductService from '../../lib/Services/ProductService';

const controller = new ProductController(
    new ProductService()
);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    await controller.create(context);
};

export default httpTrigger;
