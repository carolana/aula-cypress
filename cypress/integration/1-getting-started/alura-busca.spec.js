//Criação da suíte de teste
describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br/');
    })
    //Criação do primeiro cenário (it) (entrar na página, escrever na barra de pesquisar, clicar na lupa e verificar se tem o curso formação java na lista)
    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should('contain', 'Formação Java e Orientação a Objetos');
    })
})