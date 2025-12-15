describe('Teste de API - PokéAPI', () => {

  it('Deve buscar o Pokémon Pikachu e validar um poder (stat)', () => {

    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu'
    }).should((response) => {

      // Valida status code
      expect(response.status).to.eq(200)

      // Valida nome do Pokémon
      expect(response.body.name).to.eq('pikachu')
    })
  })

  it('Deve retornar erro 404 ao buscar um Pokémon inexistente', () => {

    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/pokemon-invalido-999',
      failOnStatusCode: false
    }).should((response) => {

      // Valida status code de erro
      expect(response.status).to.eq(404)

      // Valida mensagem retornada pela API
      expect(response.body).to.eq('Not Found')
    })
  })

})