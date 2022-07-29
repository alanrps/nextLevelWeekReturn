# Next Level Week Return

## Install/init typescript and ts-node-dev
```console
$ npm i typescript @types/node ts-node-dev -D
$ npx typescript --init
````
## Configure prisma (ORM)

### Install
```console
$ npm install @prisma/client
````

### Generate prisma client
```console
$ npx prisma generate 
```

### Init sqlite
```console
$ npx prisma init --datasource-provider sqlite
```

### Execure migrations
```console
$ npx prisma migrate dev
```
### Open Prisma Studio for view tables
```console
$ npx prisma studio
```

## Install jest and swc and init
```console
$ npm i jest -D
$ npm i -D @swc/cli @swc/core
$ npx jest --init
```

Obs: Os testes trazem mais segurança para o desenvolvimento, evitando erros em produção.

## SOLID

1. Single Responsibility Principle
Cada classe/função deve ter apenas uma única responsabilidade.
Obs: Prestar atenção ao explicar a funcionalidade, se ela faz algo "e" outra coisa.

2. Open/Close Principle
As classes devem ser abertas para extensão e fechadas para modificação.
Obs: Não deveria modificar a classe de origem, apenas extender-la.

3. Liskov Substituition Principle
Devemos substituir uma classe pai por uma herança dela e tudo continuar funcionando.

4. Interface Segregation Principle
Segregar as interfaces sempre que possível.

5. Dependency Inversion Principle
Ao invés da classe buscar as dependências que ela precisa, o contexto externo mostra quais ela precisa usar.
Obs: Facilita o processo de testes