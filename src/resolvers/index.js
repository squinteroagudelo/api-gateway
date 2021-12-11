const authResolver = require('./auth_resolver');
const customerResolver = require('./customer_resolver');
const productResolver = require('./product_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, customerResolver, productResolver);

module.exports = resolvers;