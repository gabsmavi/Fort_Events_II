# Especificação de API do FortEvents

## Endpoints Previstos
- GET /eventos - Lista todos os eventos
- GET /eventos/{id} - Detalhes do evento
- POST /eventos - Cadastro de evento (admin)
- PUT /eventos/{id} - Atualização de evento (admin)
- DELETE /eventos/{id} - Remoção de evento (admin)
- GET /categorias - Lista categorias de eventos
- GET /localizacoes - Lista de localizações
- POST /notificacoes - Criação de notificação

## Parâmetros de Requisição
- Filtros por categoria, localização, data

## Formatos de Resposta
- JSON com dados do evento, usuário ou notificação

## Autenticação e Autorização
- JWT para autenticação de usuários
- Admins possuem permissão de escrita e exclusão

## Exemplos de Chamadas e Respostas
- GET /eventos?categoria=cultura&cidade=Fortaleza
- POST /notificacoes { usuario_id: 1, evento_id: 23 }
