# Especificação de API do FortEvents

## Endpoints Previstos
- GET /eventos - Lista todos os eventos
- GET /eventos/{id} - Detalhes do evento
- POST /eventos - Cadastro de evento (admin)
- PUT /eventos/{id} - Atualização de evento (admin)
- DELETE /eventos/{id} - Remoção de evento (admin)
- GET /localizacoes - Lista de localizações

## Parâmetros de Requisição
- Filtros por categoria, data

## Formatos de Resposta
- JSON com dados do evento

## Autenticação e Autorização
- Admins possuem permissão de escrita e exclusão

## Exemplos de Chamadas 
- GET /eventos/codigoevento