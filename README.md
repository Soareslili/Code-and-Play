# Code And Play Front-End

Este é o front-end do projeto **Code-And-Play*, uma loja virtual de roupas e acessórios com temática tech. O projeto foi desenvolvido com **Next.js 14**, **React**, **Tailwind CSS** e está conectado com o backend em **Node.js** e **MongoDB**.

## 📁 Tecnologias e Ferramentas

- [Next.js](https://nextjs.org/) (App Router)
- React.js
- Tailwind CSS
- Axios
- Vercel (deploy)
- MongoDB Atlas (dados vindos do backend)
- Backend próprio (Node + Express + MongoDB)
- Imagens armazenadas no Imgur

## 📦 Funcionalidades

- 🔄 Integração completa com API REST do backend (Node.js + MongoDB)
- 🛍️ Página de listagem de produtos
- 🔠 Exibição dos dados vindos do banco de dados
- 📷 Imagens dinâmicas (Imgur)
- ✅ Layout 100% responsivo
- 💻 Produtos como camisetas, moletons, canecas e mais
- 🔎 Filtro de produtos por categoria (em desenvolvimento)

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
