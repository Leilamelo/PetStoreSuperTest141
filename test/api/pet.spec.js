// Bibliotecas e framework
const supertest = require('supertest')

const petId = 133211201

// Em JavaScript, Classe é opcional, mas pode agrupar em uma Describe
describe('API PetStore Swagger - Entidade Pet', () => {

    // Atributos do grupo/describe
    const request = supertest('https://petstore.swagger.io/v2') // baseURL

    // Funções ou métodos: Its

    it('POST Pet', () => {
        // Atributos, campos, caracteristicas, configurações

        // Funções de apoio (Opcional)

        // Funcções de Test em Si


    })//Final do Post Pet

})// Termina a describe