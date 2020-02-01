import { Context } from '@azure/functions';
import { HttpStatusCode } from '../Constants';
import { CreateProductRequest, UpdateProductRequest } from '../Schemas';
import { validate } from '../Util';
import ProductService from '../Services/ProductService';
import HttpController from '../Controllers/HttpController';

class ProductController extends HttpController {

    constructor(private productService: ProductService) {
        super();
    }

    /**
     * List products.
     */
    async index({req, res}: Context) {
        await this.productService.findMany()
            .then(data => this.successResponse(res, data))
            .catch(err => this.errorResponse(res, err));
    }

    /**
     * Retrieve a single product.
     */
    async show({req, res}: Context) {
        await this.productService.find(req.params.id)
            .then(data => this.successResponse(res, data))
            .catch(err => this.errorResponse(res, err));

    }

    /**
     * Create a new product.
     */
    async create({req, res}: Context) {
        const {error, schema} = await validate(CreateProductRequest, req.body);

        if (error) {
            return this.errorResponse(res, error);
        }

        await this.productService.create(schema)
            .then(data => this.successResponse(res, data, HttpStatusCode.Created))
            .catch(err => this.errorResponse(res, err));
    }

    /**
     * Update a product.
     */
    async update({req, res}: Context) {
        const {error, schema} = await validate(UpdateProductRequest, req.body);

        if (error) {
            return this.errorResponse(res, error);
        }

        await this.productService.update(req.params.id, schema)
            .then(data => this.successResponse(res, data))
            .catch(err => this.errorResponse(res, err));
    }

    /**
     * Delete a product.
     */
    async delete({req, res}: Context) {
        await this.productService.delete(req.params.id)
            .then(bool => this.successResponse(res, bool))
            .catch(err => this.errorResponse(res, err));
    }

}

export default ProductController;
