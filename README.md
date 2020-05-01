# API-SEARCH-MULTIDB 👨‍💻

Atividade para disciplina de Computação Multidisciplinar

### Descrição

Esse projeto consiste em uma API que retorna uma lista de números a partir do banco de dados informado(MongoDB, MySQL, Postgres e SQL Server).

## Requisitos para execução da aplicação

Para executar o projeto é necessário seguir alguns passos.

### Instalação

Para instalar o node.js basta acessar: [Node.js](https://nodejs.org/en//). Caso seu SO seja Linux siga os proximos passos.

1. Descompacte o arquivo binário em qualquer diretório que você queira instalar o Node, 
eu uso  ```/ usr / local / lib / nodejs```

```
VERSION=v10.15.0
DISTRO=linux-x64
sudo mkdir -p /usr/local/lib/nodejs
sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 
```

2. Defina a variável de ambiente ```~ / .profile```, adicione abaixo ao final

```
# Nodejs
VERSION=v10.15.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```

3. Atualizar perfil

```
. ~/.profile
```

4. Testando a instalação

```
$ node -v
```

```
$ npm -v
```

saída no terminal

```
$ node -v
v10.15.3
```

### Baixando o repositorio

Para baixar o projeto, clique no botão Download depois no botão Download ZIP 

ou execute o seguinte comando:

```
$ git clone https://github.com/lukpod1/api-search-multidb.git
```

### Executando o projeto

Para executar o projeto basta abrir com terminal na pasta baixada e executar o seguinte comando:
```
$ npm install
```
esse comando irá baixar todas as dependências que se encontram no package.json

![Annotation 2020-05-01 013252](https://user-images.githubusercontent.com/30981427/80782258-bd1fb000-8b4b-11ea-8e84-fcb7ce017be4.png)

e agora para rodar a API, entre na pasta src e rode o comando:

```
$ node server.js
```

![image](https://user-images.githubusercontent.com/30981427/80782755-cdd12580-8b4d-11ea-8ed0-d7b438692359.png)
