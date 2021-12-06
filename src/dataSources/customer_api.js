const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CustomerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.customer_api_url;
    }

    async createCustomer(customer) {
        customer = new Object(JSON.parse(JSON.stringify(customer)));
        return await this.post('/customers/', customer)
    }

    async getCustomers() {
        return await this.get('/customers');
    }

    async customerById(id) {
        return await this.get(`/customers/${id}`);
    }

    async updateCustomer(customer) {
        return await this.put(`/customers/`, customer);
    }

    async deleteCustomer(id) {
        return await this.delete(`/customers/${id}`);
    }
}

module.exports = CustomerAPI;