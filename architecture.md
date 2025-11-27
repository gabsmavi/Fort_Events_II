# Arquitetura do FortEvents

## Descrição da Arquitetura
Aplicativo multiplataforma com frontend web/mobile, backend RESTful, banco de dados relacional e sistema de notificações.

## Componentes do Sistema
- Frontend Web (React.js)
- Frontend Mobile (Flutter)
- Backend (Node.js + Express)
- Banco de dados PostgreSQL
- Firebase Cloud Messaging
- Google Maps API

## Padrões Arquiteturais Utilizados
- MVC no backend
- MVVM no frontend mobile
- RESTful APIs para comunicação

## Diagrama de Arquitetura
Frontend Web / Flutter --> API Node.js --> PostgreSQL
|
+--> Firebase Notifications
+--> Google Maps AP

## Decisões Técnicas e Justificativas
- Node.js pelo suporte a múltiplos usuários e facilidade de integração.
- Flutter para mobile multiplataforma.
- Firebase para notificações push em tempo real.
- Google Maps API para geolocalização dos eventos.