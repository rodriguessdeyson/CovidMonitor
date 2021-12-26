# CovidMonitor
Projeto Final UFSC - Desenvolvedor WEB

# Aplicação Web: COVID-19

Vamos chamar de COVID-19 uma aplicação real onde pesquisadores da UFSC poderão obter informações sobre o estado da doença COVID-19 em Florianópolis.
O objetivo aqui é armazenar dados disponibilizados pela Secretaria de Saúde de Florianópolis. Os dados serão armazenados em um banco de dados.

As informações que queremos armazenar estão relacionadas as pessoas que realizaram testes para COVID-19. As informações são:

a data da notificação;
a data dos primeiros sintomas;
a data do teste;
a data do óbito (se for o caso);
a data de nascimento;
a faixa etária;
o sexo (M, F, N - Não deseja informar);
a cor (AMARELA, BRANCA, PARDA ou PRETA);
o bairro onde mora;
a cidade onde mora;
o Centro de Saúde;
o tipo do teste realizado;
dor de garganta (SIM, NÃO);
dispneia (SIM, NÃO);
febre (SIM, NÃO);
tosse (SIM, NÃO); e
internado na UTI (SIM, NÃO).



# Objetivos
O nosso objetivo é desenvolver uma aplicação web que

o usuário entra com os dados de pessoas que fizeram teste para COVID-19;
o sistema deve armazenar os dados recebidos em um banco de dados; e
responde ao usuário uma consulta sobre os dados armazenados.
Para receber os dados, a aplicação web deverá ter uma interface que possibilita o usuário entrar com cada informação citada anteriormente.
No entanto, a aplicação web deverá também dar opção ao usuário entrar com um arquivo com as informações necessárias disponíveis. Dessa forma, o servidor deverá receber esse arquivo e utilizá-lo para fazer as inserções das informações necessárias no banco de dados.
É importante dizer que este arquivo é público, disponibilizado pela Prefeitura de Florianópolis (aqui) e conterá mais informações que as necessárias para o nosso caso.