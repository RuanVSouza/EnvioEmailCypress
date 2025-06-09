describe('Testando EmailNodeMailer', () => {
    it('Testando envio de email', () => {
        cy.api({
            url: "url",
            method: "GET",
            headers: {
                "auth": "tokenAuthorization",
            },
        }).as('response');

        cy.get('@response').then((res) => {
            cy.log(res.body[0].name);
        });
        
        cy.get('@response').then((res) => {
            const test = res.body[0].id;
            cy.task('enviaEmail', {
                remetente: 'email1, email2',
                assunto: 'Teste de email',
                corpo: test
            })
        });
    });
});
