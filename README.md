<img width="1879" height="905" alt="image" src="https://github.com/user-attachments/assets/964ab0f6-0d9d-49a6-8f0a-65ca28cb60fa"/>

# Smart Resume Analyser – AI Powered Resume Evaluation Platform

Smart Resume Analyser is a web platform designed to help students, freshers, and professionals improve their resumes using AI-driven insights. The platform focuses on ATS optimization, formatting accuracy, grammar correction, keyword relevance, and industry-specific enhancement. It enables users to build strong, job-ready resumes using intelligent guidance, analytics, and interactive tools.
---

## Table of Contents**
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Main Code Sequences & Architecture](#main-code-sequences--architecture)
  - [Frontend (HTML/CSS/JS)](#frontend-htmlcssjs)
  - [Backend (Node.js/Express/OpenAI)](#backend-nodejsexpressopenai)
- [Resume Analysis Engine](#resume-analysis-engine)
- [Authentication](#authentication)
- [AI Chatbot Integration](#ai-chatbot-integration)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)
- [Example Screenshots](#example-screenshots)
- [Deployment Instructions](#deployment-instructions)
- [Firebase Setup](#firebase-setup)
- [Optional Enhancements](#optional-enhancements)
--- 

## Features:
- **AI Resume Evaluation:** ATS-style scoring with feedback on grammar, formatting, keywords, and job-specific optimization.
- **Keyword Optimization:** Auto-suggests missing skills, action verbs, and domain keywords.
- **ATS Score Generator:** Real-time scoring based on structure, readability, job match, and industry standards.
- **PDF/Text Extractor:** Upload resumes in PDF/DOCX/TXT for parsing and AI analysis.
- **Job Role Templates:** Preloaded resume templates for roles like SDE, Full-Stack Developer, Salesforce Developer, and more.
- **AI Chat Assistant:** Guides users on resume writing, interview preparation, and job readiness.
- **Authentication:** Email/password and Google login via Firebase.
- **Responsive UI:** Clean, fast, mobile-friendly dashboard.
---

## Project Structure:
```
/
├── index.html                 # Main UI (upload panel, dashboard, analysis cards)
├── stylesheet.css             # All styles (responsive, dark mode, modern UI)
├── main.js                    # Resume upload, UI handling, analysis loader
├── auth.js                    # Firebase authentication logic
├── analyser.js                # Handles resume parsing & AI integration
├── server.js                  # Node.js backend (Express + OpenAI API)
├── parser.js                  # Extracts text from PDF/DOCX
├── templates/                 # Prebuilt resume formats & sample structures
├── assets/                    # Icons, logos, and media
├── package.json               # Dependencies and scripts
└── .env                       # Your OpenAI API key & configs

```
---

## Setup & Installation:
### 1. Clone the Repository**
```bash
git clone https://github.com/yourusername/smart-resume-analyser.git
cd smart-resume-analyser
```

### 2. Install Dependencies**
```bash
npm install
```

### 3. Configure Environment Variables**
Create a .env file:
```
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Start the Server**
```bash
npm start
```
The app will be available at [http://localhost:3000].

---

## Main Code Sequences & Architecture
### Frontend (HTML/CSS/JS)
#### `index.html`
- **Layout**: , dashboard, upload card, ATS score cards, suggestions panel.
- **Sections**: Resume Analyzer, Templates, Chat Assistant, Profile.
- **Loads**: Loads `main.js`, `analyser.js`, `auth.js`.

#### `stylesheet.css`
- Modern UI with neumorphism design.
- Responsive, mobile-first layout.
- Dark/Light theme using CSS variables.
- **Components**: Upload box, score cards, buttons, modals.

#### `main.js`
- Resume upload (drag & drop + file picker).
- Animated loaders and progress bar.
- Renders ATS score, keyword cloud, grammar checks.
- Toast notifications for UI alerts.

#### `auth.js`
- Firebase authentication (Email/Password + Google).
- Tracks session states.
- Updates UI based on login status.
- Saves user analysis history.

#### `analyser.js`
- Sends extracted resume text to backend.
- Renders AI suggestions (formatting, keywords, grammar, etc.).
- Shows job match %, improvement stats, and color-coded badges.
---

### Backend (Node.js / Express / OpenAI)
#### `server.js`
- API routes for resume analysis, parsing, templates.
- OpenAI integration for ATS scoring, keyword extraction, rewrites.
- Health check endpoint.
- Serves static frontend + API.

#### `parser.js`
- PDF & DOCX parsing (pdf-parse, docx).
- Cleans and prepares text for ATS analysis.
- Outputs structured resume content.

#### `package.json`
- **Dependencies:** express, openai, multer, pdf-parse, docx, dotenv, firebase-admin.
- Resume Analysis Engine.
- Extracts skills, experience, education, projects.
- Matches job-role keywords.
- Simulates ATS scoring (structure, readability, bullets, impact metrics).
- Provides AI-driven suggestions and rewrites.
---

## Authentication
- Email & password login.
- Google sign-in.
- Password reset.
- Session tracking.
- Saves previous analysis reports.
---

## AI Chatbot Integration
- Resume rewriting.
- Job-role guidance.
- ATS keyword suggestions.
- Interview preparation tips.
- Context-aware responses.
---

## Customization
- Edit colors & fonts in stylesheet.css.
- Add new templates in /templates.
- Update job-role keywords in analyser.js.
- Add new backend AI features easily.
---

## License
- Educational and non-commercial use only.
- Contact developer for commercial usage.
---

## Contact
For feedback, contributions, or queries:

👤 Pranjal Khandelwal

🔗 LinkedIn: https://www.linkedin.com/in/pranjal-khandelwal-1a46682a4/

💻 GitHub: https://github.com/golu19102003

🐦 Twitter: https://x.com/Pranjal76009498

📸 Instagram: https://www.instagram.com/pranjal19102003_2.0/---

**Smart Resume Analyser – AI Powered Resume Evaluation Platform**

## Example Screenshots

Dashboard Home
<img width="1873" height="892" alt="image" src="https://github.com/user-attachments/assets/2e36905b-745d-4265-859b-ab8e8520de50" />

Resume Upload
<img width="1879" height="902" alt="image" src="https://github.com/user-attachments/assets/e182589c-a895-481e-9829-5f92126dbb24" />

ATS Score Report
<img width="1883" height="892" alt="image" src="https://github.com/user-attachments/assets/222718e8-9f16-42fa-af70-9043393b190d" />

AI Suggestions Panel
<img width="1870" height="885" alt="image" src="https://github.com/user-attachments/assets/f423e3b3-6f08-4710-be0d-00c125abde26" />

---

## Deployment Instructions:
### Local Deployment
 ```bash
git clone https://github.com/yourusername/smart-resume-analyser.git
npm install
npm start
Runs at: http://localhost:3000
```
---

### Cloud Deployment (Render/Heroku/Vercel)
- Push project to GitHub.
- Create new web service.
- Add env variables:
- OPENAI_API_KEY
- Deploy.
---

### Firebase Setup
Supabase Auth Setup (Email/Password + Google)
#### 1. Enable Auth Providers in Supabase
- Go to Supabase Dashboard → Authentication → Providers.
- Enable Email/Password Auth under Email settings.
- Enable Google Auth
- Go to Providers → Google
- Add your Client ID and Client Secret from Google Cloud Console.

**Set Redirect URL:**
https://<your-project>.supabase.co/auth/v1/callback

#### 2. Add Supabase Config to auth.js
Use this template:

**// auth.js**

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://YOUR-PROJECT-ID.supabase.co";

const supabaseKey = "YOUR_PUBLIC_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseKey);

**// -------- AUTH FUNCTIONS --------**

**// Email Signup**

export async function signUpWithEmail(email, password) {

const { data, error } = await supabase.auth.signUp({ email, password });

return { data, error };

}

**// Email Login**

export async function signInWithEmail(email, password) {

const { data, error } = await supabase.auth.signInWithPassword({

email,

password,

});

return { data, error };

}

**// Google Login**

export async function signInWithGoogle() {

  const { data, error } = await supabase.auth.signInWithOAuth({
  
    provider: "google",
    
    options: {
    
      redirectTo: window.location.origin, // redirect after login
    
    },
  
  });
  
  return { data, error };

}

**// Sign Out**

export async function signOutUser() {

const { error } = await supabase.auth.signOut();
  
return { error };

}

#### 3. Use in Your Frontend (Example)
**Login:**

signInWithEmail(email, password).then(({ data, error }) => {
 
  if(error) alert(error.message);
 
  else alert("Logged in!");

});

**Google Login:**

signInWithGoogle();

**Signup:**

signUpWithEmail(email, password);

---

### Optional Enhancements.
- Set up a custom domain.
- Enable automatic HTTPS.
- Add analytics for user tracking.
- Improve performance using caching/CDN.
---
