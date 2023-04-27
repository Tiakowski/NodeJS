# API de Games
API de teste

## Endpoints
### GET /games
Esse endpoint é responsável por retornar uma listagem com os jogos cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### OK! Status - 200
Caso aconteça esse status, receberá a listagem dos jogos.
Exemplo de resposta:
```
[
    {
        "id": 1,
        "title": "Valorant",
        "year": "2019",
        "price": "0"
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": "2010",
        "price": "60"
    },
    {
        "id": 3,
        "title": "Call of Duty: Modern Warfare",
        "year": "2022",
        "price": "300"
    }
]

```

##### Falha na autenticação! Status - 401
Falha no processo de autenticação durante o processo de requisição. Motivos: Token inválido, Token expirado;
Exemplo de resposta:

```
{
    "err": "Não autorizado"
}
```

## Endpoints
### POST /auth
Esse endpoint é responsável por fazer o processo de login.
#### Parametros
email: E-mail do usuário cadastrado no sistema.
password: Senha do usuário cadastrado no sistema.

```
{
    "email":"email@dominio.com",
    "password":"senha"
}
```

#### Respostas
##### OK! Status - 200
Caso aconteça esse status, receberá o token JWT de autenticação.
Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0aWFnb3NhbnRvc2ZsYW1lbmdvQGdtYWlsLmNvbSIsImlhdCI6MTY4MjYzMzUwMywiZXhwIjoxNjgyODA2MzAzfQ.Bn9qjewUm2StX82J5wiMCht5TluwYC20kc869IDRJ88"
}

```

##### Falha na autenticação! Status - 401
Falha no processo de autenticação durante o processo de requisição. Motivos: Senha ou Email inválidos.
Exemplo de resposta:

```
{
    {err: "Credenciais inválidas"}
}
```

##### Email inválido! Status - 400
Falha no processo de autenticação durante o processo de requisição. Motivos: Email inválido.
Exemplo de resposta:

```
{
    {err: "Email inválido"}
}
```

##### Email inválido! Status - 404
Falha no processo de autenticação durante o processo de requisição. Motivos: Email não cadastrado no sistema.
Exemplo de resposta:

```
{
    {err: "Email não cadastrado"}
}
```

