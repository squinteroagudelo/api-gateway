const { gql } = require('apollo-server');

const productTypeDefs = gql `
    type Product {
        id: Int!
        name: String!
        stock: Int!
        price: Int!
        active: Boolean!
    }

    input ProductInput {
        id: Int
        name: String!
        stock: Int!
        price: Int!
        active: Boolean
    }

    extend type Query {
        products: [Product]
        productById(id: Int!): Product
    }

    extend type Mutation {
        createProduct(product: ProductInput!): Product
        updateProduct(product: ProductInput!): Product
        deleteProduct(id: Int!): String
    }
`;

module.exports = productTypeDefs;