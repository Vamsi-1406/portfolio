# backend/test.py

from ai import answer_question

print("="*50)
print("Resume Q&A Bot")
print("="*50 + "\n")

question = input("Ask me about my resume: ")
answer = answer_question(question)

print("\n" + "="*50)
print("Bot answer:")
print("="*50)
print(answer)
print("="*50)