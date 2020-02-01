import { throws } from '../Util';
import { DatabaseError, EntityNotFoundError } from '../Errors';
import * as mockDatabase from '../../test/MockDatabase';

export default class ProductService {

    constructor(private db = mockDatabase) {}

    /**
     * Find a product by ID.
     */
    async find(id: string) {
        const product = await throws(
            this.db.findOne(id),
            DatabaseError
        );

        if (!product) {
            throw new EntityNotFoundError();
        }

        return product;
    }

    /**
     * Find all products.
     */
    async findMany() {
        const products = await throws(
            this.db.findAll(),
            DatabaseError
        );

        return products;
    }

    /**
     * Create a new product.
     */
    async create(data: any) {
        const product = await throws(
            this.db.create(data),
            DatabaseError
        );

        return product;
    }

    /**
     * Update a existing product.
     */
    async update(id: string, data: any) {
        const product = await throws(
            this.db.update(id, data),
            DatabaseError
        );

        if (!product) {
            throw new EntityNotFoundError();
        }

        return product;
    }

    /**
     * Delete a product by ID.
     */
    async delete(id: string) {
        const result = await throws(
            this.db.destroy(id),
            DatabaseError
        );

        if (!result) {
            throw new EntityNotFoundError();
        }

        return true;
    }

}
