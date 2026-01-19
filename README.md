# 🎯 Vamsi Krishna - Data Analyst Portfolio

Personal portfolio showcasing my work in Data Analytics, Business Intelligence, and Machine Learning, featuring an **AI-powered voice assistant** that can answer questions about my experience and skills.

## ✨ Features

### 🎤 AI Voice Assistant
- **Interactive Voice Interface**: Click the microphone button to ask questions about my resume
- **Powered by Claude AI**: Uses Anthropic's Claude Haiku for intelligent responses
- **Speech Recognition**: Speaks your questions using Web Speech API
- **Text-to-Speech**: Answers are spoken back to you
- **Real-time Chat**: See conversation history with typing indicators
- **Mobile Responsive**: Works seamlessly on all devices

### 📊 Portfolio Sections
- **About**: Professional summary and background
- **Education & Certifications**: Academic credentials and professional certifications
- **Experience**: 5+ years in Data Analytics and BI roles
- **Skills**: Technical skills including Power BI, Python, SQL, Azure, and more
- **Projects**: Featured analytics projects with GitHub links
- **Contact**: Easy ways to connect

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Responsive Design
- Web Speech API (Voice Recognition & Synthesis)
- Font Awesome Icons

### Backend
- **Netlify Serverless Functions** (Node.js)
- **Anthropic Claude API** (Haiku model)
- Environment-based configuration

### Deployment
- **Netlify** (Primary hosting)
- GitHub Pages (Alternative)
- Automated CI/CD via Git push

### Tools & Libraries
- `@anthropic-ai/sdk` - Claude AI integration
- Git & GitHub - Version control
- VS Code - Development environment

## 🚀 Live Demo

**Primary (with AI Voice Assistant):**
🔗 [https://your-netlify-site.netlify.app](https://your-netlify-site.netlify.app)

**GitHub Pages (Static version):**
🔗 [https://vamsi-1406.github.io/portfolio/](https://vamsi-1406.github.io/portfolio/)

## 🎯 AI Voice Assistant Demo

1. Visit the live site
2. Click the **🎤 microphone button** in the bottom-right corner
3. Allow microphone permissions when prompted
4. Ask questions like:
   - "What is your experience with Power BI?"
   - "Tell me about your education"
   - "What projects have you worked on?"
   - "What are your technical skills?"
5. Listen to the AI-powered response!

## 💻 Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Anthropic API key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vamsi-1406/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

4. **Run locally with Netlify Dev**
   ```bash
   npm install -g netlify-cli
   netlify dev
   ```

5. **Open in browser**
   ```
   http://localhost:8888
   ```

## 📦 Deployment

### Deploy to Netlify

1. **Connect to GitHub**
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select this repository

2. **Configure Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `ANTHROPIC_API_KEY` with your API key

3. **Deploy**
   - Netlify auto-detects `netlify.toml` configuration
   - Click "Deploy site"
   - Your site will be live in minutes!

### Deploy to GitHub Pages (Static Only)

The voice assistant requires serverless functions, so GitHub Pages deployment won't include AI features. For the full experience, use Netlify.

## 📁 Project Structure

```
portfolio/
├── index.html                      # Main portfolio page
├── assets/
│   ├── css/
│   │   └── style.css              # Styles including voice widget
│   ├── js/
│   │   └── main.js                # Portfolio interactions
│   ├── images/                     # Profile and project images
│   └── resume/                     # Resume PDF
├── netlify/
│   └── functions/
│       └── chat.js                 # AI chat serverless function
├── voice-bot/                      # Original Python backend (reference)
│   ├── backend/
│   │   ├── ai.py                  # Python AI implementation
│   │   ├── app.py                 # Flask server
│   │   └── resume_context.py      # Resume data
│   └── frontend/
│       └── botindex.html          # Standalone voice bot page
├── netlify.toml                    # Netlify configuration
├── package.json                    # Node.js dependencies
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
├── SETUP.md                        # Deployment instructions
├── DEPLOYMENT-CHECKLIST.md         # Deployment checklist
└── README.md                       # This file
```

## 🔒 Security

- ✅ API keys stored in environment variables only
- ✅ No hardcoded credentials in codebase
- ✅ Serverless functions keep API keys server-side
- ✅ CORS properly configured
- ✅ `.gitignore` protects sensitive files

## 💰 Cost Considerations

The AI voice assistant uses Claude Haiku, which is very cost-effective:
- ~$0.001 per conversation
- 200 token response limit
- **Estimated cost**: $1-5/month for typical portfolio traffic

## 🤝 Connect With Me

- 📧 Email: [vamsimantravadi99@gmail.com](mailto:vamsimantravadi99@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/vamsi-mantravadi](https://www.linkedin.com/in/vamsi-mantravadi)
- 🐙 GitHub: [github.com/Vamsi-1406](https://github.com/Vamsi-1406)
- 📱 WhatsApp: [wa.me/16605805265](https://wa.me/16605805265)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Anthropic Claude AI** - Powering the voice assistant
- **Netlify** - Serverless hosting platform
- **Web Speech API** - Browser-based voice recognition

---

**Built with ❤️ by Vamsi Krishna**
*Data Analyst | BI Developer | ML Enthusiast*

