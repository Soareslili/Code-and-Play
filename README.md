# 🕹️ Code And Play - Loja Virtual

Este é o projeto **Code-And-Play**, uma loja virtual de roupas e acessórios com temática **tech, gamer e anime**.  
O projeto foi desenvolvido do zero com **Next.js 14**, **React**, **Tailwind CSS** no front-end, e conectado a um **backend próprio em Node.js + Express + MongoDB**.  
O repositório contém apenas o front-end, mas toda a API foi construída e integrada ao banco de dados.

---

## 📁 Tecnologias e Ferramentas

- [Next.js](https://nextjs.org/) (App Router)
- React.js
- Tailwind CSS
- Axios
- MongoDB Atlas (banco de dados)
- Node.js + Express (backend REST API)
- Imagens armazenadas no Imgur
- GitHub (código versionado)

---

## 📦 Funcionalidades

- 🔄 Integração completa com API REST do backend (Node.js + MongoDB)  
- 🛍️ Página de listagem de produtos dinâmicos  
- 📂 Categorias disponíveis:
  - 👕 Roupas (camisetas, moletons, jaquetas)  
  - 🎮 Acessórios (canecas, chaveiros, bonés)  
  - 🏠 Decoração (quadros, luminárias, itens geek/anime)  
- 🔠 Exibição dos dados vindos do banco de dados  
- 📷 Imagens dinâmicas via Imgur  
- ✅ Layout 100% responsivo (desktop e mobile)  
- 🔎 Filtro de produtos por categoria  
- 🛒 Carrinho de compras (context API)  
- 📞 Seção de contato + Footer com redes sociais  

---

## 📸 Exemplo de Produto (JSON retornado da API)

```json
{
  "_id": "687e393c98a8cec483f01adb",
  "nome": "Caneca Debugging Mode",
  "preco": 44.9,
  "categoria": "Acessórios",
  "descricao": "Caneca preta com texto Debugging Mode On.",
  "imagem": "https://i.imgur.com/LX6P2S9.png",
  "createdAt": "2025-07-17T20:48:50.919Z",
  "updatedAt": "2025-07-21T20:09:16.501Z",
  "__v": 0
}
