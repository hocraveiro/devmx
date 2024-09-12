# Contribua

## Preparando para execução

1. Use `pnpm install` para instalar as dependências do projeto
1. Execute `mv .env-example .env` e configure as variáveis de ambiente como quiser
1. Com o comando `docker compose up -d` você sobe o banco de dados configurado conforme as variáveis de ambiente
1. Então use `pnpm dev` para executar os 2 apps simultaneamente (back-end e front-end)

## Commits

Use o comando `pnpm commit` para escrever seu commit.

## Usando geradores do repositório

### Para criar um novo escopo

Criando o escopo do domínio, abrigará abstrações e casos de uso das regras de negócio

```sh
nx g @devmx/plugin:domain events
```

Criando a camada de fonte de dados, abrigará as implementações de acesso a dados definidos no domínio

```sh
nx g @devmx/plugin:data-source data-source --domain=events-domain
```

Criando a camada de recurso, abrigará os controllers com NestJS

```sh
nx g @devmx/plugin:resource resource --dataSource=events-data-source --domain=events-domain
```

Criando a primeira entidade do escopo

```sh
nx g @devmx/plugin:entity event --domain=events-domain --dataSource=events-data-source --resource=events-resource
```

Faça as adaptações necessárias para o comportamento esperado.
