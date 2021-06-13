# BeDigital
Plataforma para unificar os serviços Bemol

Pré requisitos
=========
A aplicação está dividida em camada front-end e back-end utilizando dois frameworks, então, antes de continuar certifique-se que tenha instalado em sua máquina os framewors: Node.js e Vue.js. <br>
Também será necessário criar uma base de dados para o projeto.

Criando uma Base de Dados
=========
Para executar o projeto, é necessário possuir uma base de dados local com o nome de "bemolapp". Não é necessário executar ou criar qualquer tabela, apenas a base de dados, como na imagem abaixo: <br>
![banco de dados](https://cleywert.dev/imgs/banco.png)
<br>
Após a criação do banco, abra o arquivo "database.js" que encontra-se no diretório deste repositório "api/database/" e insira a senha do seu servidor de banco local no terceiro parâmetro da instancia "new Sequelize" como na imagem abaixo, onde encontram-se aspas vazias:
<br>
![Arquivo de conexão](https://cleywert.dev/imgs/databasejs.png)
<br>
Caso você não possua um servidor de banco local, veja como instalar um [aqui](https://www.mysql.com)


Instalando o node
=========

#### Para Linux: <br>
Para instalar o node no linux basta abrir o terminal de comando e executar como super usuário:
<br>

```bash
sudo apt-get install nodejs
```
Para garantir que a instalação ocorreu bem, execute os comandos:
<br>

```bash
node --version
npm --version
```

A informação da versão de cada pacote deve ser printada após a execução de cada comando
<br>
#### Para Windows:
* Acesse a página do [node](https://nodejs.org/pt-br/) e baixe a versão LTS (última versão estável) e execute o arquivo baixado
* Quando alcançar a etapa de instalação abaixo, garanta que as opções Node.js runtime, npm package manager e Add to PATH estejam selecionadas.<br>
![Node instalation](https://www.alura.com.br/artigos/assets/instalando-nodejs-no-windows-e-linux/imagem1.png)<br>
* Na próxima etapa, selecione o checkbox da opção indicada na imagem abaixo. Isso concederá ao instalador permissão de utilizar outras ferramentas. A importância deste passo é para que o Windows possa rodar algumas funções e bibliotecas do npm que não consegue rodar nativamente. <br>
![Node instalation](https://www.alura.com.br/artigos/assets/instalando-nodejs-no-windows-e-linux/imagem2.png) <br>
* Após isto basta seguir com a instalação até o final
* Após o fim da instalação, para garantir que a instalação foi realizada corretamente, abra o cmd e execute os seguintes comandos: <br>
```bash
node --version
npm --version
```
* A informação de versão de cada pacote deve ser exibida

Instalando o Vue
=========
Para instalar o Vue é necessário que tenhamos o pacote npm instalado na máquina, portanto é necessário que se cumpra as instruções de [instalação do node](#instalando-o-node).
<br>
Tendo o node instalado, basta agora abrir o terminal de comando e executar os seguintes comandos:
```bash
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```
Para garantir a instalação, execute o seguinte comando:
```bash
vue
```
Uma lista de comandos como esta deve aparecer: <br>
![Comandos Vue](https://cleywert.dev/imgs/comando-vue.png)
