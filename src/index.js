const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api');
const CustomerAPI = require('./dataSources/customer_api');
const ProductAPI = require('./dataSources/product_api');
// const BillAPI = require('./dataSources/bill_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        customerAPI: new CustomerAPI(),
        productAPI: new ProductAPI(),
        // billAPI: new BillAPI(),
    }),
    introspection: true,
    playground: true,
});

server.listen(process.env.PORT || 4000)
.then(( {url} ) => console.log(`Server ready at ${url}`))