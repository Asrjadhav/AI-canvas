# 🎨 AI Canvas – Generative AI Drawing & Image Creation Platform

> Transform rough sketches and text prompts into AI-generated visuals using Generative AI 🚀

---

## 🚀 Overview

AI Canvas is an interactive web application that allows users to:

- Draw freely on a canvas 🎨  
- Enter text prompts 🧠  
- Generate AI-powered images instantly ⚡  

It bridges the gap between **human creativity and artificial intelligence**, making design accessible to everyone—even non-designers.

---

## ✨ Features

- 🎨 Freehand drawing using Canvas API  
- 🧠 AI-powered image generation (prompt-based)  
- ✏️ Sketch → AI-generated image transformation  
- ⚡ Real-time rendering and updates  
- 💾 Download generated images  
- 🔄 Smooth and responsive UI  

---

## 🧠 How It Works

1. User draws on canvas **OR** enters a text prompt  
2. Input is sent to backend via API  
3. AI model processes the input  
4. Generated image is returned  
5. Output is displayed in real-time  

---

## 🏗️ Tech Stack

### 🔹 Frontend
- React.js  
- HTML, CSS, JavaScript  
- Canvas API  

### 🔹 Backend
- Node.js  
- Express.js  
- REST APIs  

### 🔹 Database
- MongoDB  

### 🔹 AI / ML
- Generative AI models (Stable Diffusion / API-based)  
- Image processing pipeline  

---

## ⚡ System Architecture

```mermaid
graph TD;
    A[User Input (Canvas / Prompt)] --> B[Frontend (React + Canvas API)]
    B --> C[Backend (Node.js + Express)]
    C --> D[AI Model API]
    D --> E[Generated Image]
    E --> F[Display on UI]
