# Modelo de Dados do FortEvents

## Entidades
- Usuario
- Evento
- Categoria
- Notificacao
- Localizacao

## Relacionamentos
- Usuario 1..* Notificacao
- Evento 1..* Categoria
- Evento 1..1 Localizacao

## Diagrama ER
Usuario(id, nome, email)
Categoria(id, nome)
Localizacao(id, endereco, latitude, longitude)
Evento(id, nome, descricao, data, categoria_id, localizacao_id)
Notificacao(id, usuario_id, evento_id, horario, mensagem)

## Dicionário de Dados
- Usuario: informações pessoais e preferências
- Evento: informações sobre atividades
- Categoria: tipo do evento
- Localizacao: dados de endereço e coordenadas
- Notificacao: alertas enviados aos usuários