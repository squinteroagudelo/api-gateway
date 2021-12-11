const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';

    if (token === '') return { userIdToken: null}
    else {
        try {
            let requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
                redirect: 'follow'
            };

            let response = await fetch(
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions
            );

            if (response.status !== 200){
                console.log(response);
                throw new ApolloError(`Sesión inactiva - ${401} ${response.status}`, '401')
            }
            let userIdToken = (await response.json()).UserId;
            return { userIdToken };
        } catch (e) {
            throw new ApolloError(`Token Error: ${500}: ${e}`, '500')
        }
    }
}

module.exports = authentication;