from flask import Flask, request, jsonify
from flask_cors import CORS
from ai import answer_question

app = Flask(__name__)
CORS(app)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    question = data.get('question', '')
    answer = answer_question(question)
    
    return jsonify({
        'answer': answer,
        'success': True
    })

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    print('Starting Flask server on http://localhost:5000')
    app.run(debug=True, port=5000)