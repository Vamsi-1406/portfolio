const Anthropic = require('@anthropic-ai/sdk');

const RESUME_CONTEXT = `
╔════════════════════════════════════════════════════════════════════════════════╗
║                        PROFESSIONAL RESUME CONTEXT                            ║
║                    Mantravadi Jaya Vamsi Krishna                              ║
╚════════════════════════════════════════════════════════════════════════════════╝

CONTACT INFORMATION
═══════════════════════════════════════════════════════════════════════════════
• Location: Sparks, Nevada 89434
• Phone: +1 (660) 580-5265
• Email: vamsimantravadi99@gmail.com

PROFESSIONAL SUMMARY
═══════════════════════════════════════════════════════════════════════════════
Results-driven Business Intelligence & Data Analyst with 5+ years of experience
designing, automating, and optimizing data pipelines, dashboards, and analytics
solutions across banking, SaaS, and AI environments. Expert in translating complex
business requirements into scalable data solutions that improve operational
efficiency, visibility, and strategic decision-making. Proven track record of
delivering 40-60% improvements in efficiency metrics and driving data-driven
organizational strategies.

EDUCATION
═══════════════════════════════════════════════════════════════════════════════
Master of Science in Computer Science
University of Central Missouri, Warrensburg, MO
Expected Graduation: May 2025

Bachelor of Technology in Computer Science
GITAM University, Visakhapatnam, India

CORE TECHNICAL SKILLS
═══════════════════════════════════════════════════════════════════════════════

Business Intelligence & Visualization Tools:
  • Power BI (Advanced): DAX, Power Query, Custom Visuals, Deneb, Vega-Lite
  • Tableau: Interactive dashboards, story-telling, performance optimization
  • Excel: Pivot Tables, Advanced Formulas, VBA, Macros

Programming Languages & Data Processing:
  • Python (Advanced): Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn
  • SQL (Advanced): T-SQL, MySQL, Snowflake SQL, Query optimization

Cloud Platforms & Data Infrastructure:
  • Microsoft Azure: Azure Data Factory, Data Lake, Blob Storage, Azure SQL
  • Amazon Web Services: EC2, S3, RDS

PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════════════════════

Data Analyst / BI Engineer
Accenture (Client: Fiserv) | Hyderabad, India
October 2021 – July 2023
• Improved reporting visibility by 60% across 35+ financial institutions
• Reduced manual reporting effort by 40% through ETL automation
• Improved reporting accuracy by 35%

Reporting Analyst / Functional Consultant
Accenture (NorthStar 1A – SaaS BPM) | Hyderabad, India
May 2020 – July 2021
• Built 25+ Power BI dashboards across six departments
• Eliminated 40% manual effort in report generation
• Drove 15% efficiency improvements through data-driven insights

Product Analyst – Retail Product Analytics
Sage7AI (Client: Atlas Cycles) | Hyderabad, India
May 2018 – January 2020
• Analyzed 10,000+ daily transactions
• Reduced stock-outs by 12% using ML forecasting
• Increased dashboard adoption by 28%

CERTIFICATIONS
═══════════════════════════════════════════════════════════════════════════════
✓ Microsoft Certified: Azure Fundamentals (AZ-900)
✓ IBM Certified: Data Analysis with Python
✓ Salesforce Certified: Developer Associate
`;

exports.handler = async function(event, context) {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const { question } = JSON.parse(event.body);

    if (!question) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Question is required' })
      };
    }

    // Initialize Anthropic client with API key from environment variable
    const apiKey = process.env.ANTHROPIC_API_KEY;

    // Debug: Check if API key exists (don't log the actual key!)
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Server configuration error',
          success: false,
          answer: 'I apologize, but the server is not configured correctly. Please check the environment variables.'
        })
      };
    }

    const anthropic = new Anthropic({
      apiKey: apiKey
    });

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 200,
      temperature: 0.7,
      messages: [
        {
          role: 'user',
          content: question
        }
      ],
      system: `You are a professional and friendly voice assistant representing Mantravadi Jaya Vamsi Krishna.

IMPORTANT: Keep ALL responses under 3 sentences. Be concise and direct.

Your role is to answer questions about his background, experience, and skills based on his resume.

Guidelines:
- Keep responses SHORT (maximum 2-3 sentences)
- Be conversational and engaging
- Answer clearly and confidently
- If asked about something not in the resume, politely say you don't have that information

Resume Information:
${RESUME_CONTEXT}`
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        answer: response.content[0].text,
        success: true
      })
    };

  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to process request',
        success: false,
        answer: 'I apologize, but I encountered an error. Please try again.'
      })
    };
  }
};
