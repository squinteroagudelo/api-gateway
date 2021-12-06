const { gql } = require('apollo-server');

const productTypeDefs = gql `
    type Product {
        id: Int!
        name: String!
        stock: Int!
        price: Int!
        active: Boolean!
    }
    
    input ProductInput{
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
        
    }
`;

module.exports = productTypeDefs;