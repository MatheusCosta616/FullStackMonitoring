# FullstackMonitoring

## Descrição do Projeto

FullstackMonitoring é um sistema completo de monitoramento de dispositivos que permite rastrear, gerenciar e visualizar diversos dispositivos em tempo real. O projeto consiste em uma API RESTful desenvolvida com Spring Boot (backend) e uma interface de usuário interativa criada com React e Vite (frontend).

Criado por Matheus José de Lima Costa.

[https://github.com/MatheusCosta616]

## Funcionalidades

- Gerenciamento de dispositivos (criar, ler, atualizar, deletar)
- Visualização de dashboard com todos os dispositivos
- Configuração e visualização de alertas para dispositivos
- Adição e visualização de logs para dispositivos
- Sistema de autenticação básico

## Tecnologias Utilizadas

### Backend
- Java 17
- Spring Boot 3.3.3
- Spring Data JPA
- PostgreSQL
- Lombok
- JUnit 5 e Mockito para testes

### Frontend
- React 18
- Vite
- React Router v6
- SASS para estilização
- Fetch API para requisições HTTP

## Configuração do Projeto

### Pré-requisitos

- JDK 17
- Node.js (versão 14 ou superior)
- npm ou yarn
- PostgreSQL

### Configuração do Backend

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/FullstackMonitoring.git
   ```

2. Configure o banco de dados PostgreSQL:
   - Crie um banco de dados chamado `fullstackDB`.
   - Atualize o arquivo `src/main/resources/application.properties` com suas credenciais.

3. Navegue até a pasta do backend:
   ```
   cd FullstackMonitoring/FullstackMonitoringAPI
   ```

4. Compile e execute o projeto:
   ```
   ./mvnw spring-boot:run
   ```

O backend estará disponível em `http://localhost:8080`.

### Configuração do Frontend

1. Navegue até a pasta do frontend:
   ```
   cd FullstackMonitoring/FullstackMonitoringFront/fullstackfront
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

O frontend estará disponível em `http://localhost:5173`.

## Configuração do Banco de Dados

1. Instale o PostgreSQL em sua máquina, se ainda não estiver instalado.

2. Crie um novo banco de dados chamado `fullstackDB`:
   ```
   CREATE DATABASE fullstackDB;
   ```

3. Atualize o arquivo `src/main/resources/application.properties` com suas credenciais do PostgreSQL:
   ```
   spring.datasource.url=jdbc:postgresql://localhost:5432/fullstackDB
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   ```

4. O Hibernate criará automaticamente as tabelas necessárias quando você iniciar a aplicação pela primeira vez, graças à configuração `spring.jpa.hibernate.ddl-auto=update`.

5. Se desejar, você pode criar manualmente as tabelas principais executando os seguintes comandos SQL:

   ```sql
   CREATE TABLE devices (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       type VARCHAR(50),
       status VARCHAR(50),
       last_update TIMESTAMP
   );

   CREATE TABLE alerts (
       id SERIAL PRIMARY KEY,
       device_id INTEGER REFERENCES devices(id),
       message TEXT,
       severity VARCHAR(50),
       timestamp TIMESTAMP
   );

   CREATE TABLE logs (
       id SERIAL PRIMARY KEY,
       device_id INTEGER REFERENCES devices(id),
       message TEXT,
       timestamp TIMESTAMP
   );
   ```

Nota: Certifique-se de que o PostgreSQL está em execução antes de iniciar a aplicação Spring Boot.

## Estrutura do Projeto

### Backend (FullstackMonitoringAPI)

- `src/main/java/com/fullstackmonitoring/`
  - `controller/`: Controladores REST
  - `dto/`: Objetos de Transferência de Dados
  - `model/`: Entidades JPA
  - `repository/`: Interfaces de Repositório Spring Data
  - `config/`: Configurações do sistema

### Frontend (FullstackMonitoringFront/fullstackfront)

- `src/`
  - `components/`: Componentes reutilizáveis
  - `routes/`: Componentes de página para cada rota
  - `styles/`: Arquivos SCSS globais e variáveis
  - `AppCss/`: Estilos específicos para o componente App
  - `main.jsx`: Ponto de entrada da aplicação
  - `App.jsx`: Componente raiz da aplicação

## Uso da API

### Dispositivos

- Criar um dispositivo: `POST /devices`
- Listar todos os dispositivos: `GET /devices`
- Obter um dispositivo específico: `GET /devices/{deviceId}`
- Atualizar um dispositivo: `PUT /devices/{deviceId}`
- Deletar um dispositivo: `DELETE /devices/{deviceId}`

### Alertas

- Configurar um alerta: `POST /alerts`
- Obter alertas de um dispositivo: `GET /alerts/device/{deviceId}`

### Logs

- Adicionar log a um dispositivo: `POST /devices/{deviceId}/log`
- Obter logs de um dispositivo: `GET /devices/{deviceId}/log`

## Principais Componentes do Frontend

- `Dashboard`: Exibe todos os dispositivos e permite adicionar novos
- `DevicePage`: Mostra detalhes de um dispositivo específico, permite edição e exclusão
- `DeviceCard`: Componente para exibir informações resumidas de um dispositivo
- `AddDeviceForm`: Formulário para adicionar um novo dispositivo
- `Login`: Página de login (autenticação básica)

## Fluxo de Funcionamento

1. O usuário faz login no sistema (autenticação básica implementada no frontend).
2. Após o login, o usuário é redirecionado para o Dashboard, onde pode visualizar todos os dispositivos.
3. No Dashboard, o usuário pode adicionar novos dispositivos ou clicar em um dispositivo existente para ver mais detalhes.
4. Na página de detalhes do dispositivo (DevicePage), o usuário pode:
   - Editar informações do dispositivo
   - Excluir o dispositivo
   - Adicionar e visualizar alertas
   - Adicionar e visualizar logs
5. O frontend se comunica com o backend via API RESTful para todas as operações de dados.

## Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para submeter pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Contato

Matheus José de Lima Costa - matheus.costa2616@gmail.com

Links do Projeto:
- Backend: [https://github.com/MatheusCosta616/FullstackMonitoringAPI](https://github.com/MatheusCosta616/FullstackMonitoringAPI)
- Full Stack [https://github.com/MatheusCosta616/FullStackMonitoring](https://github.com/MatheusCosta616/FullStackMonitoring)

