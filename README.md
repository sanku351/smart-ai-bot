# 🧠 Smart AI Bot

Smart AI Bot is a multifunctional web application powered by Google Gemini and Unsplash APIs. Users can:
- Chat with an AI assistant
- Upload an image and get a prompt-based response
- Generate images based on text input

## ✨ Features

- 🤖 **Chat Mode**: Chat with the Gemini AI model.
- 🖼️ **Image Upload**: Upload an image and ask questions related to it.
- 🎨 **Image Generation**: Generate images based on prompts using the Unsplash API.

## 📸 Demo Screenshots

| Home Page | Chat Mode | Upload Image | Generate Image |
|-----------|-----------|--------------|----------------|
| ![Home](https://github.com/user-attachments/assets/f4098af8-c1bf-407d-9fe0-4a8d015d9671) | ![Chat](https://github.com/user-attachments/assets/d45795ad-4168-48a5-9562-9aebd17b011a) | ![Upload](https://github.com/user-attachments/assets/5a461d53-ecee-42fa-8027-b1be1e9cc001) | ![Generate](https://github.com/user-attachments/assets/481dc570-062d-4e5e-8784-753c02ca2d00) |

## 🛠️ Tech Stack

| Tech             | Usage                          |
|------------------|---------------------------------|
| React.js         | Frontend framework              |
| Vite             | Build tool                      |
| CSS              | Styling                         |
| Unsplash API     | Image generation                |
| Google Gemini API| AI-powered text generation      |
| Context API      | State management                |

## 📁 Folder Structure

├── public/
│ └── logo.png
├── src/
│ ├── pages/
│ │ └── Chat.jsx
| | └── Home.jsx 
│ ├── context/
│ │ └── UserContext.jsx
│ ├── App.css
│ ├── main.jsx
│ └── unsplashService.js
├── gemini.js
├── index.html
└── README.md

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/sanku351/smart-ai-bot.git
cd smart-ai-bot
```

### 2. Install dependencies

```
npm install
```

### 3. Set up your environment variables

* Create a `.env` file in the root directory:

```
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
```

### 4. Run the development server

```
npm run dev
```

## 🧠 How It Works

* `UserContext` manages the current and previous input/image/prompt state.

* `genResponse()` sends the current prompt/image to the Gemini API.

* `query()` fetches random images from Unsplash based on the prompt.

* `Chat.jsx` dynamically renders either text or images based on the feature selected.

## 🧪 API References

Google Gemini API
Unsplash Image API

## 📦 Deployment
You can deploy the frontend easily using Netlify or Vercel.

## 📌 Notes

* The project supports image upload in base64 format and sends it inline to Gemini.

* It handles both image generation and text interaction smoothly using context and conditional rendering.

## 📄 License
This project is open-source and free to use under the MIT License.
