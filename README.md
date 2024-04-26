## Instalação

```bash
$ npm install
```

## Buildar o projeto

```bash
# development
$ npm run build
```

## Rodar as migrações
Necessária a configuração da .env para a conexão com o banco de dados
```bash
# development
$ typeorm -d dist/db/data-source.js migration:run
```

## Iniciar o projeto
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
