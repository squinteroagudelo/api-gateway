const authTypeDefs = require('./auth_type_defs');
const productTypeDefs = require('./product_type_defs');
const customerTypeDefs = require('./customer_type_defs');
const billTypeDefs = require('./bill_type_defs');

const schemasArrays = [authTypeDefs, productTypeDefs, customerTypeDefs, billTypeDefs];

module.exports = schemasArrays;