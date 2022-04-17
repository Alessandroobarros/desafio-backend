
# API

Projeto desenvolvido para teste de avaliação.

Disponibiliza uma API RESTfull que permite o acesso aos desenvolvedores e níveis.

A API foi disponibilizada no heroku e pode ser acessada através do link https://desafio-backend.herokuapp.com/status

## 🚀 Começando Localmente


### 🔧 Instalação

* Clone o projeto em sua maquina.

* Na raiz do projeto altere o arquivo .env.example para .env e adicione a variavel do Banco (enviada por e-mail)

* Na raiz do projeto rode os seguintes comandos:


```
# Instalando as dependencias
$ npm i

# Inicia o projeto local na maquina
$ npm start

# Se preferir pode iniciar Localmente com docker
$ npm run up

```
Desta forma o projeto estara rodando localmente, basta acessar
http://localhost:3000/status



## 🔩 Utilizando a API

### Nível:
Cadastrar:
```
  POST /nivel
```
| Campo JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nivel`      | `string` | Descrição do nível (ex: JUNIOR) |

+ Request (application/json)

    + Body

            {
                "nivel": "JUNIOR",
            }
+ Response 201

    + Body

            {

                "message": "Nivel criado com sucesso id: 625724f7478340b2f9e7c8b5"

            }


Lista todos os niveis cadastrados:
```
  GET /nivel
```
+ Response 200

    + Body

            [
                {
                    "_id": "625724f7478340b2f9e7c8b5",
                    "nivel": "JUNIOR",
                    "dataCriacao": "2022-04-13 16:04:52",
                    "__v": 0
                },
                {
                    "_id": "625c3f3518990284c436a5f8",
                    "nivel": "PLENO",
                    "dataCriacao": "2022-04-17 16:04:73",
                    "__v": 0
                }
            ]

Lista nivel por id:
```
  GET /nivel/{id}
```
+ Response 200

    + Body

            {
                "_id": "625724f7478340b2f9e7c8b5",
                "nivel": "JUNIOR",
                "dataCriacao": "2022-04-13 16:04:52",
                "__v": 0
            }

Editar um nivel:
```
  PUT /nivel/{id}
```
| Campos do JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nivel`      | `string` | Descrição do novo nível (ex: PLENO) |

+ Request (application/json)

    + Body

            {
                "nivel": "PLENO",
            }
+ Response 200

    + Body

            {

                "message": "Nivel alterado com sucesso!"

            }

Remover um nivel:
```
  DEL /nivel/{id}
```
+ Response 204

    + No body


### Desenvolvedor:
Cadastrar desenvolvedor:
```
  POST /desenvolvedor
```
| Campo JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nivel`      | `string` | id referencia de nivel  |
| `nome`      | `string` | Nome do desenvolvedor(a) ex: 'Alessandro' |
| `sexo`      | `string` |  Sexo desenvolvedor(a) ex: M |
| `datanascimento`      | `Date` | ex:  '09-10-1992'|
| `idade`      | `Number` | Idade desenvolvedor(a) ex: 99)|
| `hobby`      | `string` | ex: 'Jogar Video Game' |

+ Request (application/json)

    + Body

            {
                "nivel": "6254dd4da80fb2d240c0dbb2",
                "nome": "Alessandro",
                "sexo": "M",
                "datanascimento": "09-10-1992",
                "idade": 99,
                "hobby": "Jogar Video Game"
            }
+ Response 201

    + Body

            {

                "message": "Desenvolvedor criado com sucesso id: 625c441518990284c436a606"

            }


Lista todos os desenvolvedores cadastrados:
```
  GET /desenvolvedor
```
+ Response 200

    + Body

            [
                {
                    "_id": "625b2ec38e5a56da40ffd954",
                    "nivel": {
                        "_id": "625724f7478340b2f9e7c8b5",
                        "nivel": "JUNIOR",
                        "dataCriacao": "2022-04-13 16:04:52",
                        "__v": 0
                    },
                    "nome": "Alessandro",
                    "sexo": "M",
                    "datanascimento": "1992-09-10T03:00:00.000Z",
                    "idade": 99,
                    "hobby": "Jogar Video Game",
                    "__v": 0
                },
                {
                    "_id": "625c452a18990284c436a617",
                    "nivel": {
                        "_id": "625c3f3518990284c436a5f8",
                        "nivel": "PLENO",
                        "dataCriacao": "2022-04-17 16:04:73",
                        "__v": 0
                    },
                    "nome": "TESTE",
                    "sexo": "M",
                    "datanascimento": "1992-09-10T00:00:00.000Z",
                    "idade": 99,
                    "hobby": "Jogar Video Game",
                    "__v": 0
                }
            ]

Lista desenvolvedor por id:
```
  GET /desenvolvedor/{id}
```
+ Response 200

    + Body

            {
                "_id": "625b2ec38e5a56da40ffd954",
                "nivel": {
                    "_id": "625724f7478340b2f9e7c8b5",
                    "nivel": "JUNIOR",
                    "dataCriacao": "2022-04-13 16:04:52",
                    "__v": 0
                },
                "nome": "Alessandro",
                "sexo": "M",
                "datanascimento": "1992-09-10T03:00:00.000Z",
                "idade": 99,
                "hobby": "Jogar Video Game",
                "__v": 0
            }

Editar um desenvolvedor (passar o campo desejado a alterar no json):
```
  PUT /desenvolvedor/{id}
```
| Campos para alterar   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nivel`      | `string` | Descrição do novo nível ex: '625c3f3518990284c436a5f8' |

+ Request (application/json)

    + Body

            {
                "nivel": "PLENO",
            }
+ Response 200

    + Body

            {

                "message": "Desenvolvedor alterado com sucesso!"

            }

Remover um Desenvolvedor:
```
  DEL /desenvolvedor/{id}
```
+ Response 204

    + No body

## ⚙️ Executando os testes
Os testes cobrem as funcionalidades das rotas para desenvolvedor e nivel.
```
# Rodando os testes
$ npm test

```


## 🛠️ Construção

Desenvolvido com as seguintes stacks:

* [babeljs](https://babeljs.io/) - Compilador commonjs para Es6.
* [Express](https://expressjs.com/pt-br/) - Gerenciador de diferentes requisições HTTP.
* [javascript](https://www.javascript.com/) - Linguagem utilizada.
* [jest](https://jestjs.io/pt-BR/) - Executor de testes.
* [mongodb](https://www.mongodb.com/pt-br) - Banco de dados utilizado.
* [nodejs](https://nodejs.org/en/) - Executor da Linguagem javascript em backend.



## ✒️ Autor

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Desenvolvedor** - *backend* - [Alessandro Barros](https://github.com/Alessandroobarros)



## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺
* Obrigado publicamente 🤓.
* etc.


---
⌨Desenvolvido com ❤️ por [Alessandro Barros](https://github.com/Alessandroobarros) 😊
