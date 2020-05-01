# API-SEARCH-MULTIDB

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

### Baixando o repositorio


