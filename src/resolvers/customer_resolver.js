const customerResolver = {
    Query: {
        customers: ( _, {}, { dataSources, userIdToken }) => {
            if (userIdToken) return dataSources.customerAPI.getCustomers();
            else return null;
        },

        customerById: ( _, { id }, { dataSources, userIdToken }) => {
            if (userIdToken) return dataSources.customerAPI.customerById(id);
            else return null;
        }
    },
    Mutation: {
        createCustomer: async ( _, { customer }, { dataSources, userIdToken }) => {
            if (userIdToken){
                const customerInput = {
                    id: customer.id,
                    name: customer.name,
                    lastname: customer.lastname,
                    address: customer.address,
                    phone: customer.phone,
                    email: customer.email,
                }
                return await dataSources.customerAPI.createCustomer(customerInput);
            } else {
                return null;
            }
        },
        updateCustomer: async ( _, { customer }, { dataSources, userIdToken }) => {
            if (userIdToken){
                const customerInput = {
                    id: customer.id,
                    name: customer.name,
                    lastname: customer.lastname,
                    address: customer.address,
                    phone: customer.phone,
                    email: customer.email,
                }
                return await dataSources.customerAPI.updateCustomer(customerInput);
            } else {
                return null;
            }
        },
        deleteCustomer: async ( _, { id }, { dataSources, userIdToken }) => {
            if (userIdToken) return await dataSources.customerAPI.deleteCustomer(id);
            else return null;
        },
    }
}

module.exports = customerResolver;