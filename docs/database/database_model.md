# Modelo de Dados do FortEvents

## Entidades Existentes
- Evento  
- Categoria 
---

## Relacionamentos
- **Evento 1..1 Categoria** 

---

## Diagrama ER (Atualizado e Simplificado)

Categoria(id, nome) *(opcional)*

Evento(  
 id,  
 titulo,  
 descricao,  
 local,  
 data,  
 horario,  
 preco,  
 contato,  
 imagem,  
 categoria,  
)

---

## Dicionário de Dados

### **Evento**
Representa um evento cadastrado na plataforma.  

Campos atuais:

| Campo        | Tipo | Descrição |
|--------------|------|-----------|
| **id** | string/number | Identificador único do evento |
| **titulo** | string | Nome do evento |
| **descricao** | string | Descrição detalhada |
| **local** | string | Endereço ou nome do local |
| **data** | string/date | Data do evento |
| **horario** | string | Horário de início |
| **preco** | string | Preço (ex.: "R$ 20", "Gratuito") |
| **contato** | string | Telefone, email ou link |
| **imagem_url** | string | URL da imagem do evento |
| **categoria** | string | Categoria textual (ex.: "show", "teatro") |

---

### **Categoria**
Define o tipo de evento.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **id** | string/number | Identificador |
| **nome** | string | Nome da categoria |

---
