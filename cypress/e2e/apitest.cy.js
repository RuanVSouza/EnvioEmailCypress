describe('Testando EmailNodeMailer', () => {
    it('Testando envio de email', () => {
        cy.api({
            url: "https://api.delfos.im/solar-data/data-studio/device-types",
            method: "GET",
            headers: {
                "api-key": "uXqU9w5IE6t4YYN5yK7OWmjUGH4WMng2",
            },
        }).as('response');

        cy.get('@response').then((res) => {
            cy.log(res.body[0].name);
        });
        //FUNCIONA 
        cy.get('@response').then((res) => {
            const test = res.body[0].id;
            cy.task('enviaEmail', {
                remetente: 'ruan2014souza17@gmail.com, ruan2014victor@hotmail.com.br',
                assunto: 'Teste de email',
                corpo: test
            })
        });
    });
});