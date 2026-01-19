# backend/ai.py

from anthropic import Anthropic
from resume_context import RESUME_CONTEXT

# Load API key from environment variable
import os
from dotenv import load_dotenv

load_dotenv()
client = Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))

def answer_question(question: str) -> str:
    """
    Takes a user question and returns an answer based on your resume context.
    """
    try:
        response = client.messages.create(
            model="claude-haiku-4-5-20251001",  
            max_tokens=200,  # Reduced from 1024 to keep responses shorter
            temperature=0.7,
            messages=[
                {
                    "role": "user",
                    "content": question
                }
            ],
            system=f"""You are a professional and friendly voice assistant representing Mantravadi Jaya Vamsi Krishna.

IMPORTANT: Keep ALL responses under 3 sentences. Be concise and direct.

Your role is to answer questions about his background, experience, and skills based on his resume.

Guidelines:
- Keep responses SHORT (maximum 2-3 sentences)
- Be conversational and engaging
- Answer clearly and confidently
- If asked about something not in the resume, politely say you don't have that information

Resume Information:
{RESUME_CONTEXT}
"""
        )
        return response.content[0].text
    
    except Exception as e:
        return f"I apologize, but I encountered an error: {str(e)}. Please try again."