# state ReactJS

## Atualização: 06 de junho de 2019
## Criação: 02 de junho de 2019
## Prática : @douglasabnovato

## Ferramentas : 

![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![Nodejs](/images/nodejs.png)

#### `state ReactJS`
- Estado : 
> O estado do componente não é uma simples variável, ele é gerenciado pelo React que determina a necessidade de cada componente ser renderizado novamente, ou seja, sempre que o nosso estado sofrer alguma alteração em uma informação utilizada dentro do método render nosso componente é montado novamente com as novas informações, em tempo-real, nesse caso, se adicionarmos um novo post ao fim do vetor de posts do estado, ele irá disparar um novo render exibindo-o em tela.
- Fluxo de renderização
- Alterando o estado : 
> Apesar do estado ser uma variável em nossa classe acessada diretamente pelo this.state, não podemos alterar o estado da mesma forma que alteramos uma variável comum, isso porque o estado é imutável, ou seja, ele nunca deve ser alterado e sempre deve ser sobreposto, dessa forma, se precisarmos adicionar um post ao fim da lista, precisamos na verdade redefinir essa variável com o novo post ao fim.
> Para facilitar esse processo, podemos utilizar a função setState em qualquer parte do componente e dessa forma repassamos apenas as variáveis que iremos atualizar no estado, deixando de lado qualquer outra informação que não iremos modificar e o React irá apenas copiar elas para o novo estado.
- Ciclo de vida : 
> os componentes são montados em tela, podem sofrer alterações e no fim são desmontados. Assim, a cada passo do ciclo de vida de um componente conseguimos chamar métodos interceptando sua renderização tradicional ou captando informações desse ciclo. 
##### Ciclo de vida :
1. constructor
2. componentWillMount
3. render
4. componentDidMount
5. componentWillReceiveProps
6. shouldComponentUpdate
7. componentWillUpdate
8. componentDidUpdate
9. componentWillUnmount
10. componentDidCatch

##### {SEM} Ciclo de vida :
1. Stateless Components

##### Redux e a arquitetura Flux
1. resolver algumas lacunas do react

:. De `React do zero: componentização, propriedades e estado`.<br/> 
Por Diego Fernandes - Rocketseat - https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/
:. De `React do zero: ciclo de vida, stateless components e arquitetura flux`.<br/> 
Por Diego Fernandes - Rocketseat - https://blog.rocketseat.com.br/react-do-zero-ciclo-de-vida-stateless-components-e-arquitetura-flux/

De `Um Guia para Iniciantes no React.js`.<br/>
Por Thiago Reis - Rocketseat - https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649

:. De `Iniciando no ReactJS`.<br/>
Por Diego Fernandes - Rocketseat - https://www.youtube.com/watch?v=7A4UQGrFU9Q 
