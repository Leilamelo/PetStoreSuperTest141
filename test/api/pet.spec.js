// Bibliotecas e framework
const supertest = require('supertest')

const petId = 133211201

// Em JavaScript, Classe é opcional, mas pode agrupar em uma Describe
describe('API PetStore Swagger - Entidade Pet', () => {

    // Atributos do grupo/describe

    const request = supertest('https://petstore.swagger.io/v2') // baseURL
    const massa1 = require('../../vendors/json/massaPet.json')

    // Funções ou métodos: Its
    it('POST Pet', async () => {

        // Atributos, campos, caracteristicas, configurações
        const pet = await require('../../vendors/json/pet.json')

        //Função de testes em si
        return await request
            .post('/pet')
            .send(pet)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.id).toBe(petId)
                expect(res.body.name).toBe('Pluto')
                expect(res.body.category.name).toBe('dog')
                expect(res.body.tags[0].name).toBe('vaccine')
            })
    })//Final do Post Pet

    // Método POST que le e  cria 3 registros (Data Driven simples)
    it.only.each(massa1.array.map(elemento => [
        elemento.nomePet,
        elemento.petId,
        elemento.nomeCategoria,
        elemento
    ]))
    it('POST Pet Data Driven simples', async () => {

        // Atributos, campos, caracteristicas, configurações
        const pet = await require('../../vendors/json/pet.json')

        //Função de testes em si
        return await request
            .post('/pet')
            .send(pet)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.id).toBe(petId)
                expect(res.body.name).toBe('Pluto')
                expect(res.body.category.name).toBe('dog')
                expect(res.body.tags[0].name).toBe('vaccine')
            })
    })//Final do Post Pet

    it('GET Pet', async () => {
        return await request
            // .get('/pet/' + petId) // tradicional
            .get(`/pet/${petId}`)// Método literal
            .then((res) => {
                expect(res.statusCode).toBe(200)
                expect(res.body.id).toBe(petId)
                expect(res.body.status).toBe('available')
            })
    })

    it('PUT Pet', () => {
        const pet = require('../../vendors/json/petput.json')

        return request
            .put('/pet')
            .send(pet)
            .then((res) => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.status).toEqual('sold')

            })
    })


    it('DELETE Pet', () => {
        return request
            .delete(`/pet/${petId}`)
            .then((res) => {
                expect(res.statusCode).toEqual(200)
                expect(res.body.code).toEqual(200)
                expect(res.body.message).toBe(petId.toString())
            })

    })

})// Termina a describe 

//Testes novo commit