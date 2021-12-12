const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ProductAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.product_api_url;
    }

    async createProduct(product) {
        product = new Object(JSON.parse(JSON.stringify(product)));
        return await this.post('/products/', product)
    }

    async getProducts() {
        return await this.get('/products');
    }

    async getProductById(id) {
        return await this.get(`/products/${id}`);
    }

    async updateProduct(product) {
        product = new Object((JSON).parse(JSON.stringify(product)));
        return await this.put(`/products/${product.id}/`, product);
    }

    async deleteProduct(id) {
        return await this.delete(`/products/${id}`);
    }
}

module.exports = ProductAPI;