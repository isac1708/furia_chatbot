# FurIA Chatbot 🐍💬

Bem-vindo ao **FurIA Chatbot**, um projeto desenvolvido como parte de um desafio técnico para processo seletivo.

O objetivo é criar uma interface conversacional para fãs do time de CS:GO **FURIA**, com integração a uma Inteligência Artificial para respostas automáticas.

---

## 🚀 Tecnologias Utilizadas

### Frontend:
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)

### Backend:
- [Node.js 22](https://nodejs.org/)
- [Express.js 5](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Render](https://render.com/) (deploy backend)

### Inteligência Artificial:
- [OpenRouter.ai](https://openrouter.ai/) — modelo **Mistral 24B Dolphin 3.0 (free)**

---

## 🌎 Deploys

- **Frontend (Next.js) hospedado na Vercel:**  
  [Acessar Chatbot](https://furia-chatbot-frontend.vercel.app)

- **Backend (Express) hospedado na Render:**  
  [API Endpoint](https://furia-chatbot-backend.onrender.com)

---

## ⚙️ Como Funciona

- O usuário interage pelo frontend Next.js simulando um chat estilo WhatsApp.
- As mensagens são enviadas para o backend (Node.js + Express).
- O backend consulta o modelo de IA (Mistral via OpenRouter) e retorna a resposta ao usuário.

---

## 🛠️ Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/furia_chatbot.git
cd furia_chatbot
