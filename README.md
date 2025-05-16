# Envio de email com nodemailer no Cypress
Esse sistema base faz o envio de email onde voce pode personalizar em quais casos enviar, é uma otima alternativa para quem so utiliza o Cypress Free e quer sempre manter os erros capturados por perto. Eu particularmente uso essa alternativa para inserir dentro dos comandos personalizados que detectam erros.
O serviço Nodemailer é baseado no node  
### Site oficial: https://mailtrap.io/pt/



# Definições:
### service: está localizado na pasta tasks, ele que define qual será o tipo de serviço. Existem alguns como outlook e gmail principalmente.
### email that sends: email que será usado para fazer o envio.
### code gmail: esse codigo voce precisa gerar nas configurações do gmail ou outro serviço (não recomendo utilizar a senha do proprio serviço), pesquise por "gerar chave de acesso no serviçoX" e siga os passos para gerar a chave que ira utilizar na autenticação do email
### email1,email2: email que ira receber os envios, podendo ser 1 ou mais, até hoje não encontrei um limite
