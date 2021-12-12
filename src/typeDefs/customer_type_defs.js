const {gql} = require('apollo-server');

const customerTypeDefs = gql `
    type Customer {
        id: String!
        name: String!
        lastname: String!
        address: String!
        phone: String!
        email: String!
    }

    input CustomerInput {
        id: String!
        name: String!
        lastname: String!
        address: String!
        phone: String!
        email: String!
    }

    extend type Query {
        customers: [Customer]
        customerById(id: String!): Customer
    }

    extend type Mutation {
        createCustomer(customer: CustomerInput!): Customer
        updateCustomer(customer: CustomerInput!): Customer
        deleteCustomer(id: String!): String
    }
`;

module.exports = customerTypeDefs;