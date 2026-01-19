# Portfolio with Voice Assistant Setup

This portfolio includes an AI-powered voice assistant that can answer questions about Vamsi's resume and experience.

## 🚀 Deployment to Netlify

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Environment Variables

1. Go to your Netlify dashboard
2. Navigate to: **Site settings → Environment variables**
3. Add the following variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key from https://console.anthropic.com/

### Step 3: Deploy

#### Option A: Deploy via Git (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Add voice assistant feature"
   git push origin main
   ```

2. In Netlify dashboard:
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Netlify will automatically detect the `netlify.toml` configuration
   - Click "Deploy site"

#### Option B: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Step 4: Verify

Once deployed, test the voice assistant by:
1. Clicking the microphone button on your portfolio
2. Asking a question about Vamsi's experience
3. The assistant should respond with relevant information

## 🧪 Local Development

To test locally:

1. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Add your Anthropic API key to `.env`:
   ```
   ANTHROPIC_API_KEY=your_actual_key_here
   ```

3. Install Netlify CLI and run dev server:
   ```bash
   npm install
   netlify dev
   ```

4. Open http://localhost:8888 in your browser

## 🔒 Security Notes

- **Never commit `.env` files** to Git (already in `.gitignore`)
- The API key is only stored in Netlify's environment variables
- The serverless function runs server-side, keeping your API key secure
- Users never see or have access to your API key

## 📁 Project Structure

```
portfolio2/
├── netlify/
│   └── functions/
│       └── chat.js          # Serverless function for AI chat
├── assets/                   # Images, CSS, JS files
├── index.html               # Main portfolio page
├── netlify.toml             # Netlify configuration
├── package.json             # Node.js dependencies
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore rules
└── SETUP.md                 # This file
```

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Backend**: Netlify Serverless Functions (Node.js)
- **AI**: Anthropic Claude API (Haiku model)
- **Speech Recognition**: Web Speech API
- **Text-to-Speech**: Web Speech Synthesis API
- **Hosting**: Netlify

## 🎤 Voice Assistant Features

- Speech-to-text using browser's native API
- AI-powered responses about resume/experience
- Text-to-speech for answers
- Chat history display
- Mobile-responsive design

## ❓ Troubleshooting

### Voice assistant not working:
- Check browser console for errors
- Verify ANTHROPIC_API_KEY is set in Netlify environment variables
- Ensure microphone permissions are granted
- Try using Chrome/Edge (best Speech API support)

### Function errors:
- Check Netlify function logs in dashboard
- Verify API key is valid
- Check if Anthropic API has rate limits

## 📝 Customization

To customize the assistant's responses, edit the `RESUME_CONTEXT` and system prompt in `netlify/functions/chat.js`.

## 💰 Cost Considerations

The assistant uses Claude Haiku, which is very cost-effective:
- ~$0.001 per conversation
- 200 token limit per response keeps costs minimal
- Typical usage: $1-5/month for moderate traffic

## 🔄 Updates

To update the portfolio:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Netlify will automatically rebuild and deploy.
