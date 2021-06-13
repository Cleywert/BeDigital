# BeDigital
Plataforma para unificar os serviços Bemol

Tabela de conteúdos
=========
<!--ts-->
* [Tabela de conteúdos](#tabela-de-conteúdos)
* [Pré requisitos](#pré-requisitos)
  * [Criando uma base de dados](#criando-uma-base-de-dados)
  * [Instalando o Node](#instalando-o-node)
  * [Instalando o Vue](#instalando-o-vue)
  * [Instalando Dependências](#instalando-dependências)
* [Rodando a aplicação](#rodando-a-aplicação)
* [Tecnologias](#tecnologias) 
<!--te-->


Pré requisitos
=========
A aplicação está dividida em camada front-end e back-end utilizando dois frameworks, então, antes de continuar certifique-se que tenha instalado em sua máquina os framewors: Node.js e Vue.js. <br>
Também será necessário criar uma base de dados para o projeto.

## Criando uma Base de Dados

Para executar o projeto, é necessário possuir uma base de dados local com o nome de "bemolapp". Não é necessário executar ou criar qualquer tabela, apenas a base de dados, como na imagem abaixo: <br>
![banco de dados](https://cleywert.dev/imgs/banco-be.png)
<br>
Após a criação do banco, abra o arquivo "database.js" que encontra-se no diretório deste repositório "api/database/" e insira a senha do seu servidor de banco local no terceiro parâmetro da instancia "new Sequelize" como na imagem abaixo, onde encontram-se aspas vazias:
<br>
![Arquivo de conexão](https://cleywert.dev/imgs/databasejs-be.png)
<br>
Caso você não possua um servidor de banco local, veja como instalar um [aqui](https://www.mysql.com)


## Instalando o node

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

## Instalando o Vue

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
![Comandos Vue](https://cleywert.dev/imgs/comando-vue-be.png)

## Instalando Dependências

Após a instalação dos frameworks e o download do projeto concluídos, navege através do terminal até as pastas onde se encontram o package.json de cada camada. A partir da raiz deste repositório navegue para: <br>

```bash
api/
```
e execute o comando:

```bash
npm i
```
Isto irá instalar todas as dependências da camada de back-end e criar a pasta node modules. Em seguida realize o mesmo processo para a camada de front-end navegando, a partir da raiz deste repositório, para o diretório:
```bash
be-digital/
```
e execute novamente o comando:
```bash
npm i
```
Em cada diretório deve ser criada uma pasta "node_modules" que contém as bibliotecas de dependência deste projeto

## 🎲 Rodando a Aplicação

Para rodar a aplicação abra duas guias do terminal de comandos, em um deles você navegará até o diretório da api (api/) e, no outro, até o diretório do front-end (be-digital/). <br>
No terminal que navegamos até o diretório da api, execute o seguinte comando: 
```bash
nodemon index.js
```
![nodemon](https://cleywert.dev/imgs/nodemon-terminal-be.png)
<br>
E no terminal que navegamos até o diretório do front-end, execute o seguinte comando:
```bash
npm run serve
```
Em seguida abra o link localhost que aparecerá no terminal do front-end
<br>
![npm run serve](https://cleywert.dev/imgs/npm-run-serve-terminal-be.png)


🛠️ Tecnologias
=========
As seguintes tecnologias foram utilizadas neste projeto:
- [Vue.js](https://br.vuejs.org)
- [Node.js](https://nodejs.org/pt-br/)
- [MySql](https://www.mysql.com)
- [API ViaCep](https://viacep.com.br)
- [API Mercado Livre](api.mercadolibre.com/sites/)


📝 Autor
=========

<a href="https://cleywert.dev/">
 <img src="https://avatars.githubusercontent.com/u/48801253?s=96&v=4" width="100px" alt=""/>
 <br />
 <sub>
   <b>Cleywert Rayol</b>
 </sub>
</a>
<a href="https://cleywert.dev/" title="">🪐</a>
<br><br>
<p>Desenvolvido com muita dedicação por Cleywert Rayol 👋🏾 Entre em contato!</p>


[![Linkedin Badge](https://img.shields.io/badge/-Cleywert-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/cleywert/)](https://www.linkedin.com/in/cleywert)
[![Gmail Badge](https://img.shields.io/badge/-ctsr@icomp.ufam.edu.br-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ctsr@icomp.ufam.edu.br)](mailto:ctsr@icomp.ufam.edu.br)
