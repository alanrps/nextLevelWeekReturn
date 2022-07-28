# Next Level Week Return

- $ npm i typescript @types/node ts-node-dev -d

- $ npx typescript --init

- $ npx init -> criação da pasta prisma

- $ npx prisma migrate dev

- $ npx prisma studio


## SOLID

1. Single Responsibility Principle
- Cada classe/função deve ter apenas uma única responsabilidade 
- Prestar atenção ao explicar a funcionalidade, se ela faz algo "e" outra coisa

2. Open/Close Principle
- As classes devem ser abertas para extensão e fechadas para modificação
- Não deveria modificar a classe de origem, apenas extende-la

3. Liskov Substituition Principle
- Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
- As heranças devem incorporar o funcionamento da classe pai
- trocar o pai e os filhos continuarem funcionando

4. Interface Segregation Principle
- Segregar as interfaces sempre que possível

5. Dependency Inversion Principle
- Ao invés da classe buscar as dependencias que ela precisa, o contexto externo mostra quais ela precisa usar
- Apenas recebe sem saber como funciona muito a fundo
- Ajuda nos testes

55 min