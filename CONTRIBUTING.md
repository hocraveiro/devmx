# Contribua

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
