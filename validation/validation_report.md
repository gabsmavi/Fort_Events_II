# Relatório de Validação com o Público-Alvo – FortEvents

## 1. Objetivo da Validação
O objetivo desta etapa foi avaliar a usabilidade, clareza das informações e consistência dos dados exibidos no FortEvents, garantindo que a versão atual do sistema estivesse funcional e alinhada às necessidades do público-alvo definido.

Os testes se concentraram nas funcionalidades já implementadas:
- Exibição da lista de eventos
- Navegação entre páginas (paginação)
- Abertura da página de detalhes do evento
- Consistência dos dados entre frontend e banco de dados

## 2. Perfil dos Participantes
Para esta validação, participaram 5 usuários que se enquadram no público-alvo principal:

1. **Participante A (x anos)** – Estudante de escola pública, morador do Bairro Antônio Bezerra  
2. **Participante B (x anos)** – Universitário da UFC, residente no Benfica  
3. **Participante C (x anos)** – Trabalhadora informal (microempreendedora), moradora do Bom Jardim  
4. **Participante D (x anos)** – Estudante de curso técnico, residente no Montese  
5. **Participante E (x anos)** – Universitário da UNIFOR, residente no Benfica

## 3. Metodologia
Os participantes realizaram os seguintes testes guiados:

1. Acessar o site pela primeira vez  
2. Visualizar a lista de eventos na página inicial  
3. Navegar para a página seguinte e anterior através dos controles de paginação  
4. Clicar em pelo menos três eventos diferentes  
5. Verificar se as informações exibidas (nome, descrição, data, categoria, local) correspondem aos dados fornecidos do banco de dados  
6. Dar feedback geral sobre clareza, navegação e possíveis dificuldades  

Os testes foram realizados individualmente, com observação direta.

## 4. Resultados Obtidos

### 4.1. Usabilidade Geral
- **100% dos participantes** conseguiram acessar os eventos sem dificuldade.  
- A navegação foi considerada simples e intuitiva por **4 de 5 participantes**.  
- Apenas um participante comentou que a logo da página inicial não estava suficientemente visível.

### 4.2. Paginação
- Todos os participantes conseguiram avançar e voltar páginas normalmente.  
- Não foram encontrados bugs de navegação.  
- Em alguns momentos, houve leve demora de carregamento (de 1 a 2 segundos), mas sem prejuízo significativo.

### 4.3. Consistência dos Dados
Para cada evento clicado, os dados registrados no frontend foram comparados manualmente com os valores correspondentes no banco de dados.

- **Nenhuma inconsistência encontrada** nos dados principais (título, categoria, local e data).  
- Um participante percebeu que a descrição de um evento estava quebrando o layout em telas menores (celular), o que foi anotado como ponto de melhoria.

## 5. Feedback dos Participantes

**Participante A**  
> “Fácil de usar. Consegui ver os eventos numa boa.”

**Participante B**  
> “Os eventos abriram certinho, só achei que a logo esta pequena.”

**Participante C**  
> “Gostei porque mostra logo os eventos. As informações estavam certas.”

**Participante D**  
> “Quando fui pro celular, um texto ficou meio desformatado. No computador estava bom.”

**Participante E**  
> “Navegação boa, páginas carregaram direitinho.”

## 6. Problemas Identificados
1. Logo pouco visível para alguns usuários  
3. Tempo de carregamento perceptível ao mudar de página (mas dentro do aceitável)

## 7. Ajustes Realizados Após a Validação
- Aumentado o contraste e reposicionado a logo à tela inicial 
- Otimizada a consulta de paginação para melhorar a velocidade de carregamento  

## 8. Conclusão
A validação demonstrou que o FortEvents está funcional, acessível e consistente com o banco de dados.  
Os ajustes realizados com base no feedback tornaram a experiência mais fluida e intuitiva.  

