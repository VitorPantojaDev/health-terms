# Health Terms
 
Site desenvolvido para a disciplina de **Front-end Engineering** (FIAP — MBA em Software Engineering). O projeto consome dois back-ends — o BFF criado durante as aulas e uma API própria desenvolvida pelo grupo — exibindo palavras, definições e exemplos de uso em inglês, com foco em vocabulário da área da saúde.
 
## Equipe
 
* Caio Silva Alberto — RM 368446
* Fábio Luiz de Barros — RM 368580
* Higor Robles de Freitas Pereira — RM 368316
* Vitor Alencastro Pantoja — RM 367683
## Stack utilizada
 
* [React](https://react.dev/) 19
* [Vite](https://vite.dev/)
* [react-router-dom](https://reactrouter.com/) v7
* [react-bootstrap](https://react-bootstrap.github.io/) / Bootstrap 5
## Fontes de dados consumidas
 
* **BFF do curso:** `https://fiap-bff-10aojr.onrender.com/ask` — vocabulário geral em inglês, criado durante as aulas ([repositório base](https://github.com/jaisonschmidt/fiap-bff)).
* **API própria do grupo:** `https://health-terms-api.onrender.com/ask` — termos médicos em inglês, desenvolvida pelo grupo. Repositório: [health-terms-api](../../health-terms-api-main).
## Funcionalidades
 
* Busca/filtro de termos por palavra.
* Exibição de definição (`description`) e exemplo de uso (`useCase`) para cada termo.
* Navegação entre a página inicial e a página "Sobre".
* Combinação transparente dos termos vindos das duas fontes (BFF + API própria) numa única listagem.
## Como rodar localmente
 
1. Clone o repositório:
```bash
   git clone <URL deste repositório>
   cd health-terms-main
```
2. Instale as dependências:
```bash
   npm install
```
3. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves:
```
   VITE_BFF_URL=https://fiap-bff-10aojr.onrender.com/ask
   VITE_OWN_API_URL=https://health-terms-api.onrender.com/ask
```
4. Rode o servidor de desenvolvimento:
```bash
   npm run dev
```
5. Acesse `http://localhost:5173`.
## Deploy
 
O site está publicado na **Vercel**: `https://health-terms.vercel.app/`
 
O deploy foi feito importando este repositório diretamente no painel da Vercel, com o preset **Vite** detectado automaticamente (build command `npm run build`, diretório de saída `dist`). As variáveis de ambiente `VITE_BFF_URL` e `VITE_OWN_API_URL` foram cadastradas em **Settings → Environment Variables** no painel do projeto.
 
## Métricas de Web Vitals (Lighthouse)
 
> Adicionar aqui o print ou PDF do relatório do Lighthouse, gerado sobre o site já publicado na Vercel.
 
Resumo do que cada métrica mede:
 
* **LCP (Largest Contentful Paint):** tempo até o maior elemento visível da tela terminar de carregar — mede a velocidade percebida de carregamento.
* **CLS (Cumulative Layout Shift):** mede o quanto os elementos da página se deslocam inesperadamente durante o carregamento — afeta a estabilidade visual.
* **INP (Interaction to Next Paint):** tempo de resposta da página após uma interação do usuário, como um clique.
* **TTFB (Time to First Byte):** tempo entre a requisição ao servidor e o recebimento do primeiro byte de resposta.
## Repositórios relacionados
 
* API própria de termos médicos: `https://health-terms-api.onrender.com/ask`
