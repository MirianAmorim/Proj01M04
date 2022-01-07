Essa é uma API foi criada utilizando Typescript, NestJS e postgres.

PAra iniciar o aplicativo
Em modo de desenvolvimento:
npm run start:dev
Em ambiente de produção:
npm run start
URL Base
https://localhost:3000
Os retornos da aplicação estão no formato JSON.
Listando objeto específico (GET)
Deverá ser passado um parametro(nome) na rota /{urlBase}/{tabela}/{id}, exemplo:
    {urlBase}/filmes/1
    {urlBase}/generos/1
    {urlBase}/participantes/1
    Será retornado um objeto no formato JSON com os dados do banco.
Adicionando novos objetos (POST)
Para adicionar um novo objeto a alguma tabela do banco, deverá ser enviado um JSON para a rota correta, tendo os dados corretos, caso contrário a API retornará um erro. Campos abaixo marcados com "?" são opcionais.
Para adicionar um novo objeto na tabela FILMES:
  Rota: /filmes/
  Formato JSON esperado: { "nome": String, "imagem": String?, "data_lancamento": string, "tempo_duracao": String }
Para adicionar um novo objeto na tabela GENEROS:
  Rota: /generos/
  Fomato JSON esperado: { "nome": String}
Para adicionar um novo objeto na tabela PARTICIPANTES:
  Rota: /participantes/
  Fomato JSON esperado: { "nome": String, "imagem": String,
  "data_nascimento": String, "staff_ator": String }
Caso exista algum problema com os dados do JSON enviado, a aplicação retornará um erro com detalhes.
Caso o objeto seja adicionado com sucesso, a API retornará um JSON igual ao objeto adicionado ao banco.
Atualizando um objeto (PATCH)
Para atualizar uma linha de alguma tabela, deverá ser informado o ID do objeto na rota, e enviado um JSON com os novos valores através do método PATCH.
Para atualizar um novo objeto na tabela FILMES:
  Rota: /filmes/{id}
  Fomato JSON esperado: { "nome": String, "imagem": String?, "data_lancamento": string, "tempo_duracao": String, "generoid": Number, "participanteid": Number }
Para adicionar um novo objeto na tabela GENEROS:
  Rota: /generos/{id}
  Fomato JSON esperado: { "nome": String}
Para adicionar um novo objeto na tabela PARTICIPANTES:
  Rota: /participantes/{id}
  Fomato JSON esperado: { "nome": String, "imagem": String,
  "data_nascimento": String, "staff_ator": String}
Caso o objeto seja atualizado com sucesso, a API retornará um JSON igual ao objeto atualizado no banco.
Excluindo um objeto (DELETE)
Para deletar um objeto de alguma tabela, deverá ser informado o ID do objeto na rota.
Para deletar um objeto na tabela FILMES:
  Rota: /filmes/{id}
Para deletar um objeto na tabela GENEROS:
  Rota: /generos/{id}
Para deletar um objeto na tabela PARTICIPANTES:
  Rota: /participantes/{id}
Caso o objeto seja deletado com sucesso, a API retornará um JSON igual ao objeto deletado.