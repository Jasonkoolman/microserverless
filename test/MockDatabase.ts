/**
 * A mocked database.
 * 
 * Use an ORM client (i.e. TypeORM, Sequelize or Moongose) to communicate with a database.
 */
const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

let products = [
    {
        id: generateId(),
        name: 'Product One',
        description: 'The first and foremost product.'
    },
    {
        id: generateId(),
        name: 'Product Two',
        description: 'The second product.'
    },
    {
        id: generateId(),
        name: 'Product Three',
        description: 'The third product.'
    },
    {
        id: generateId(),
        name: 'Product Four',
        description: 'The fourth and last product.'
    }
];

export async function findAll(): Promise<any[]> {
    return products;
};

export async function findOne(id: string): Promise<any|null> {
    const product = products.find(p => p.id === id);
    return product;
};

export async function create(product: any): Promise<any|null> {
    product.id = generateId();
    products.push(product);
    return product;
};

export async function update(id: string, data: any): Promise<any|null> {
    const product = await findOne(id);

    if (product) {
        Object.keys(data).forEach(key => product[key] = data[key]);
        return product;
    }

    return null;
};

export async function destroy(id: string): Promise<true|null> {
    const product = await findOne(id);

    if (product) {
        products = products.filter(p => p.id !== product.id);
        return true;
    }

    return null;
};
  