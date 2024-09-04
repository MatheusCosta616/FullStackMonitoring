# FullstackMonitoring Frontend

## Descrição do Projeto

FullstackMonitoring Frontend é a interface de usuário para o sistema de monitoramento de dispositivos. Este projeto permite visualizar, gerenciar e interagir com os dispositivos monitorados em tempo real. Desenvolvido usando React e Vite, oferece uma interface moderna e responsiva para o sistema FullstackMonitoring.
Criado por Matheus José de Lima Costa.

[https://github.com/MatheusCosta616]

## Funcionalidades

- Visualização de dashboard com todos os dispositivos
- Gerenciamento de dispositivos (criar, editar, deletar)
- Visualização detalhada de cada dispositivo
- Configuração de alertas para dispositivos
- Visualização e adição de logs para dispositivos
- Sistema de autenticação básico

## Tecnologias Utilizadas

- React 18
- Vite
- React Router v6
- SASS para estilização
- Fetch API para requisições HTTP

## Configuração do Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/FullstackMonitoringFront.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd FullstackMonitoringFront/fullstackfront
   ```

3. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn
   ```

### Executando o Projeto

1. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```

2. Abra o navegador e acesse `http://localhost:5173`

## Estrutura do Projeto

- `src/`
  - `components/`: Componentes reutilizáveis
  - `routes/`: Componentes de página para cada rota
  - `styles/`: Arquivos SCSS globais e variáveis
  - `AppCss/`: Estilos específicos para o componente App
  - `main.jsx`: Ponto de entrada da aplicação
  - `App.jsx`: Componente raiz da aplicação

## Principais Componentes

- `Dashboard`: Exibe todos os dispositivos e permite adicionar novos
- `DevicePage`: Mostra detalhes de um dispositivo específico, permite edição e exclusão
- `DeviceCard`: Componente para exibir informações resumidas de um dispositivo
- `AddDeviceForm`: Formulário para adicionar um novo dispositivo
- `Login`: Página de login (autenticação básica)

## Integração com Backend

Este frontend se integra com a API FullstackMonitoring. Certifique-se de que o backend está rodando na porta 8080 antes de iniciar o frontend.

## Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para submeter pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Contato

Seu Nome - matheus.costa2616@gmail.com

Link do Projeto: [https://github.com/MatheusCosta616/FullstackMonitoringFront](https://github.com/MatheusCosta616/FullstackMonitoringFront)
