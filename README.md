# Loja Virtual - Integração PHP, React e Bootstrap

Este projeto demonstra a integração de um backend PHP com um frontend React e estilização Bootstrap, usando Webpack para empacotamento e otimização de assets.

## 📋 Características

- **Backend em PHP**: Fornece dados para a aplicação React
- **Frontend em React**: Interface dinâmica e reativa com componentes reutilizáveis
- **Bootstrap**: Estilização responsiva e moderna
- **Webpack**: Empacotamento e otimização dos assets do frontend
- **Integração PHP-React**: Passagem de dados do backend para o frontend

## 🛠️ Tecnologias Utilizadas

- PHP 7.4+
- React 18
- Bootstrap 5
- Webpack 5
- Babel
- SASS
- Cross-env

## 🚀 Configuração e Execução

### Pré-requisitos

- Node.js (v14+)
- npm ou yarn
- PHP 7.4+
- Servidor web local (opcional, pode usar o servidor embutido do PHP)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://seu-repositorio/projeto-loja-virtual.git
   cd projeto-loja-virtual
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução em Desenvolvimento

1. Em um terminal, inicie o build do Webpack em modo de desenvolvimento:
   ```bash
   npm start
   ```
   
   Isso iniciará o servidor de desenvolvimento na porta 3000 com hot reloading.

2. Em outro terminal, inicie o servidor PHP:
   ```bash
   php -S localhost:8000
   ```

3. Acesse a aplicação em `http://localhost:8000`.

### Build para Produção

1. Gere os assets otimizados para produção:
   ```bash
   npm run build
   ```

2. Os arquivos gerados estarão na pasta `dist/` e serão referenciados automaticamente pelo PHP através do arquivo `manifest.json`.

## 📁 Estrutura do Projeto

```
projeto/
├── dist/               # Arquivos compilados (gerados pelo Webpack)
├── src/                # Código fonte do frontend
│   ├── components/     # Componentes React
│   │   ├── App.js
│   │   ├── ProdutoCard.js
│   │   └── CarrinhoCompras.js
│   ├── styles/         # Estilos SCSS
│   │   └── main.scss
│   ├── index.html      # Template HTML para desenvolvimento
│   └── index.js        # Ponto de entrada JavaScript
├── index.php           # Arquivo principal PHP
├── package.json        # Dependências npm
└── webpack.config.js   # Configuração do Webpack
```

## 🔄 Fluxo de Dados

1. O PHP gera dados (de um banco de dados ou fonte estática)
2. Os dados são passados para o JavaScript como uma variável global (`window.dadosIniciais`)
3. O React inicializa com esses dados e renderiza a interface
4. As interações do usuário (como adicionar itens ao carrinho) são gerenciadas pelo React

## 🚢 Deploy em Produção

Para deploy em produção, envie os seguintes arquivos para o servidor:

1. `index.php` (arquivo principal)
2. Pasta `dist/` completa (após executar `npm run build`)

O arquivo PHP está configurado para localizar automaticamente os arquivos CSS e JS corretos através do arquivo `manifest.json`, independentemente dos hashes nos nomes dos arquivos.

## 📝 Notas Importantes

- Este projeto usa o `webpack-manifest-plugin` para gerar um mapeamento entre os nomes originais e os nomes com hash
- O hot reloading funciona apenas para o desenvolvimento no servidor Webpack (porta 3000)
- Para testar a integração completa com PHP, use o servidor PHP (porta 8000)

## 🔧 Personalização

- Adicione mais produtos no array em `index.php`
- Crie novos componentes React em `src/components/`
- Personalize os estilos em `src/styles/main.scss`
- Configure novas funcionalidades no Webpack em `webpack.config.js`

## 📚 Recursos Adicionais

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Bootstrap](https://getbootstrap.com/docs/)
- [Documentação do Webpack](https://webpack.js.org/concepts/)
- [Documentação do PHP](https://www.php.net/docs.php)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.