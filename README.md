# testesJS Documentação


## Iniciando



```
npm install --save-dev jest
```

### Vamos começar por escrever um teste para uma função hipotética que soma dois números. Primeiro, crie um arquivo sum.js:


```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Em seguida, crie um arquivo chamado sum.test.js. Este irá conter o nosso teste real:


```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
``` 

Adicione a seguinte seção ao seu package.json:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, run yarn test or npm test and Jest will print this message:

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
### Você escreveu com sucesso seu primeiro teste usando Jest!
