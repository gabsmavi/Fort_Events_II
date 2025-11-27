# Requisitos do Sistema – Plataforma de Eventos

## 1. Visão Geral
A plataforma tem como objetivo permitir que usuários visualizem eventos, consultem detalhes e, no caso de administradores, gerenciem o cadastro de eventos. A API é construída em Node.js com Express e utiliza Firebase, Sequelize + SQL como banco de dados.

---

## 2. Perfis de Usuário

### **Usuário comum (não autenticado)**
- Pode listar eventos
- Pode visualizar detalhes de um evento específico

### **Administrador (autenticado via JWT)**
- Pode criar eventos
- Pode editar eventos
- Pode excluir eventos

---

## 3. Requisitos Funcionais

### **RF-01 – Listar eventos**
O sistema deve permitir que qualquer usuário liste todos os eventos cadastrados, com opção de filtro por categoria.

### **RF-02 – Visualizar detalhes de um evento**
O usuário deve poder consultar todas as informações de um evento individual.

### **RF-03 – Criar eventos (admin)**
Administradores devem conseguir cadastrar novos eventos.

### **RF-04 – Atualizar eventos (admin)**
Administradores devem conseguir atualizar informações de eventos existentes.

### **RF-05 – Remover eventos (admin)**
Administradores devem conseguir excluir eventos.

### **RF-06 – Autenticação via JWT**
Deve existir login retornando um token válido para operações administrativas.

### **RF-07 – Registro de usuários (somente admin)**
Mesmo que não seja usado no frontend, o backend possui rota para criação de usuários administradores.

### **RF-08 – Enviar notificações (admin)**
Se configurado, administradores podem enviar notificações push.

---

## 4. Requisitos Não Funcionais

### **RNF-01 – Arquitetura REST**
A API deve seguir boas práticas REST, utilizando endpoints claros e padronizados.

### **RNF-02 – Segurança**
- Rotas administrativas protegidas por JSON Web Token.
- Senhas armazenadas com hash (bcrypt).
- Token deve expirar em 7 dias.

### **RNF-03 – Banco de Dados**
- Uso de Sequelize.
- Modelos bem definidos com validações mínimas.

### **RNF-04 – Performance**
- Listagem ordenada por data (ASC).
- Consultas otimizadas via Sequelize.

### **RNF-05 – Manutenibilidade**
- Código organizado em controllers, routes e models.
- Separação clara entre lógica de negócio e acesso ao banco.

---

## 5. Fluxos Principais

### **Fluxo A – Usuário visualizando eventos**
1. Acessa `/eventos`
2. Recebe lista de eventos ordenada por data
3. (Opcional) Filtra por categoria
4. Clica em um evento
5. Acessa `/eventos/:id`
6. Visualiza detalhes

### **Fluxo B – Admin gerenciando eventos**
1. Realiza login em `/auth/login`
2. Recebe `token`
3. Inclui `Authorization: Bearer <token>` no header
4. Realiza:
   - POST `/eventos`
   - PUT `/eventos/:id`
   - DELETE `/eventos/:id`

---

