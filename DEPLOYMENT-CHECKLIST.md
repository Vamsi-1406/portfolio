# 🚀 Netlify Deployment Checklist

## ✅ Completed Steps

1. **✓ Converted Python backend to JavaScript serverless functions**
   - Created `netlify/functions/chat.js` with Anthropic API integration
   - No need for Python runtime on Netlify

2. **✓ Added security measures**
   - Created `.gitignore` to protect sensitive files
   - Removed hardcoded API keys from codebase
   - All secrets now use environment variables

3. **✓ Fixed GitHub push protection error**
   - Removed API key from git history
   - Successfully pushed to GitHub

4. **✓ Created deployment configuration**
   - `netlify.toml` for Netlify settings
   - `package.json` for dependencies
   - Setup documentation in `SETUP.md`

## 🔄 Next Steps

### Step 1: Revoke the Old API Key (CRITICAL!)

Since your API key was exposed in git history, you MUST revoke it:

1. Go to: https://console.anthropic.com/settings/keys
2. Find the key starting with `sk-ant-api03-HFVkV...`
3. Click "Delete" or "Revoke"
4. Create a new API key

### Step 2: Deploy to Netlify

#### Option A: Deploy via GitHub (Recommended)

1. Log in to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your `portfolio` repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

#### Option B: Deploy via Netlify CLI

```bash
# Install dependencies
npm install

# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### Step 3: Add Environment Variable in Netlify

1. In Netlify dashboard, go to: **Site settings → Environment variables**
2. Click "Add a variable"
3. Add:
   - **Key**: `ANTHROPIC_API_KEY`
   - **Value**: Your NEW API key from Anthropic
4. Click "Save"

### Step 4: Redeploy

After adding the environment variable:
- Netlify will automatically redeploy
- Or click "Trigger deploy" in the Deploys tab

### Step 5: Test Your Site

1. Once deployed, Netlify will give you a URL like `https://your-site.netlify.app`
2. Visit your portfolio
3. Click the microphone button
4. Ask a question about your resume
5. The voice assistant should respond!

## 📁 What Got Deployed

```
Your Portfolio
├── index.html                    # Main portfolio page (with voice widget)
├── assets/                       # CSS, JS, images
├── netlify/functions/chat.js     # AI chat serverless function
├── netlify.toml                  # Netlify configuration
└── package.json                  # Dependencies (Anthropic SDK)
```

## 🎤 Voice Assistant Features

- **Speech Recognition**: Asks questions via microphone
- **AI Responses**: Claude Haiku answers about your resume
- **Text-to-Speech**: Speaks answers back to user
- **Chat History**: Shows conversation in widget
- **Mobile Responsive**: Works on all devices

## 🔒 Security Features

✓ No API keys in code
✓ Environment variables only
✓ Server-side API calls
✓ CORS properly configured
✓ .gitignore protects secrets

## 💰 Cost Estimate

Using Claude Haiku (most cost-effective):
- ~$0.001 per conversation
- 200 token limit per response
- Expected cost: **$1-5/month** for typical portfolio traffic

## 🐛 Troubleshooting

### Voice assistant not responding?
- Check browser console for errors
- Verify API key is set in Netlify environment variables
- Ensure microphone permissions are granted
- Try Chrome/Edge (best browser support)

### Function errors in Netlify logs?
- Check function logs in Netlify dashboard under "Functions"
- Verify ANTHROPIC_API_KEY is set correctly
- Confirm API key is valid and not revoked

### Need to update?
```bash
git add .
git commit -m "Your changes"
git push origin main
```
Netlify will auto-deploy!

## 📞 Support

- Netlify Docs: https://docs.netlify.com
- Anthropic API Docs: https://docs.anthropic.com
- GitHub Issues: Your repo issues page

---

**Remember**: Always revoke the old API key since it was exposed in git history!
