# Arquitetura do FortEvents

## Descrição da Arquitetura
Aplicação web para visualização, cadastro e gerenciamento de eventos.  
O sistema utiliza frontend em React, backend RESTful em Node.js/Express, banco de dados Firebase Firestore e integração com Google Maps e Firebase Cloud Messaging.

---

## Componentes do Sistema
- **Frontend Web (React.js)**
- **Backend (Node.js + Express)**
- **Banco de Dados: Firebase Firestore**
- **Firebase Cloud Messaging (FCM)**
- **Google Maps API**

---

## Padrões Arquiteturais Utilizados
- **MVC** no backend  
- **RESTful APIs** para comunicação  
- **React Hooks e componentes funcionais** no frontend

---

## Diagrama de Arquitetura

Frontend Web (React)
|
v
API Node.js (Express)
|
v
Firebase Firestore
|
+--> Firebase Cloud Messaging (FCM)
|
+--> Google Maps API

## Decisões Técnicas e Justificativas

### Firebase Firestore
- Banco NoSQL totalmente gerenciado  
- Escalabilidade automática  
- Baixa latência  
- Integração nativa com SDKs do Node.js  
- Sem necessidade de manutenção de servidor ou schema rígido  

### Node.js + Express
- Leve, rápido e ideal para APIs REST  
- Ecossistema maduro  
- Fácil integração com Firestore e Google APIs

### React.js
- Componentização facilita manutenção  
- Hooks simplificam estados e efeitos  
- Ótimo desempenho em SPAs  