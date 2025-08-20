
Student Information: 
Student Name : Shatha Rasmy Abujazar.  
Student ID: 2320230176 


Project Overview: 
Project Title:
  .Martyrs and Survivors Stories Platform - Gaza      
Project Description:
                       This project is a five‑pages, front‑end website that documents martyrs from Gaza, amplifies survivors’ stories, and enables respectful community participation. Built with pure HTML, CSS, and JavaScript on the client side, The site structure:
   1-Home: a welcoming hero section, quick stats (e.g., number of   .profiles, stories), recent highlights, and navigation 
  2-Martyrs: a grid/list of martyr profiles with client‑side filters by category (e.g., children, women, journalists) and region (e.g., North Gaza, Gaza City, Khan Younis, Rafah). Each profile shows name, age, date, region, sources, and optional media.
3-Survivors: a feed of survivor stories; users can submit a story via a guided form (consent, anonymity option, text/audio/video links). Submissions are stored in Supabase with a “pending review” status.
  4-About: introduces the team, mission, data ethics, and verification policy.
  5-Contact: a form to send messages and submit story materials; entries go to a Supabase table for follow‑up.

The site prioritizes accessibility (RTL support, semantic HTML, alt text) and low‑bandwidth users (lazy‑loading, compressed images). It integrates OpenAI carefully for summarization/translation assistance during moderation (human‑in‑the‑loop). Sources are cited from reputable news channels (e.g., Al Jazeera, Al Arabiya) alongside user‑contributed testimonies (with consent). Deployment uses GitHub (Pages or static hosting), environment variables for Supabase keys, and RLS policies to protect sensitive data. 

Problem Statement (optional):
Accurate, respectful documentation is scattered across social media and news; families and researchers lack a safe, structured hub to preserve stories and find them by category/region. 
Solution Approach (optional):
A client‑only site backed by Supabase as BaaS: structured profiles, searchable lists, submission workflow with consent, and transparent sourcing from. 
news channelsTarget Audience(optional): 
Families, survivors, local community, researchers/NGOs, journalists, and supporters seeking verifiable information.
Technical Specifications:   
*Frontend: HTML5, CSS3 (utility classes + custom), Vanilla JavaScript (ES6) 
* AI Tool: OpenAI + copilot (moderation assistance, translation/summarization for internal review; not auto‑publishing). 
* Hosting/Repo: GitHub (repo required), GitHub Pages (static hosting) or any static host.
* Frontend Technologies (per template):   
No framework required; modular JS (modules), Fetch API, HTML templates, CSS components.
*Development Tools & Environment:  
VS Code; Git/GitHub.

Project Features & Functionality:   
Core Features (minimum 5):*
. 1-Home page with stats, highlights, and quick navigation
2-Martyrs page: searchable/filtered profiles by category and region (client filters ).   
3-Survivors page: list of stories + “Add Story” form (consent, anonymity option, media links).
4-About page: team, mission, data ethics, verification policy.
5-Contact page: send message/story materials saved in local storage (acknowledgment UI).
AI Tools Integration:
Use OpenAI (Like chatGpt ) + Copilot to assist moderators with short summaries/translations of submissions (human review required). No automatic publishing; AI only aids internal review.
Full‑Stack Implementation (via BaaS):
Although the front‑end is pure JS/CSS/HTML, I tried to use Supabase provides database, auth, and storage and I will to apply it soon. The site performs:
 * Reads: fetch public, approved martyr/survivor data.
 * Creates: insert contact messages and survivor story submissions.
 * Policies: RLS allows public read of approved items; inserts allowed with constraints; updates limited to moderators (service key off‑client).
Responsive Design: 
  Mobile-First Design: [Yes/No and explain]. 
  Yes  
Breakpoints: [Specify screen sizes you'll target].
360 , 640 , 768 , 1024 , 1280+
 Testing Strategy: [How will you test responsiveness].
Browser devtools device modes; Lighthouse checks; manual checks on common phone.
SEO Optimization (optional):
Semantic HTML; descriptive titles/descriptions; OG tags; clean URLs; alt text; compressed images; social share cards.
Expected Challenges & Solutions:
1-Sensitive content & privacy: enforce consent, anonymity options, and clear takedown policy.
  2-Verification: cross‑check with news channels (e.g., Al Jazeera/Al Arabiya , local news pages) before approval.
3-Low bandwidth: optimize images, lazy‑load lists, and avoid heavy libraries.
4-Moderating sensitive content.
5- Verifying testimonies.
6-Multimedia storage.
Solutions:
*RLS + field‑level constraints; moderator dashboard (even a simple  table view). 
 * Source fields per profile; store reference links.
 * Asset compression and pagination.
* Manual moderation panel.
* Verification via local networks.
* Cloud storage (e.g., Firebase , supabase).
Learning Objectives: 
New Skills:
- Mapping with Leaflet.js
- Cloud storage integration
- MongoDB advanced queries
- UX storyboarding

Course Applications:
- Full-stack structure
- Input validation
- API design and integration
- Responsive and accessible web design
	

Resources & References:
Documentation: Supabase docs; MDN Web Docs; OpenAI platform docs
  News Sources: Al Jazeera, Al Arabiya, and similar reputable channels  , Human Rights Watch Reports on Gaza, United Nations OCHA Gaza Situation Reports, Local Gaza news archives (for cross‑referencing public facts).
 Inspiration: Respectful digital memorial/oral‑history projects (genera).
