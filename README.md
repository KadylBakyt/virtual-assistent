# Astana City Hospital - Multilingual Landing Page

This is a simple, responsive landing page for a hospital in Astana (Kazakhstan), with a floating Virtual Assistant. The assistant opens a modal with tabs for Chat, FAQ, Social, and Contact. The page supports four languages: Kazakh (kk), Russian (ru), English (en), and Chinese (zh).

## Features
- Four languages with a tiny client-side i18n system
- Accessible modal dialog with keyboard Escape to close
- Tabs (Chat/FAQ/Social/Contacts)
- Minimal demo chatbot (rule-based) you can later replace with a real API
- Clean separation of HTML, CSS, and JS

## Structure
- `index.html` – markup
- `assets/css/styles.css` – styles
- `assets/js/main.js` – i18n + assistant logic

## Run
Open `index.html` directly in your browser. No build step required.

Optionally serve over a local server for better path handling:

```powershell
# PowerShell (Windows)
# Node.js (Express)
npm install express
node server.js
# Then open http://localhost:8000/index.html
```

## Customize
- Replace social links in the Social tab.
- Update contact info in both the main page and assistant Contact tab.
- Add more translations in `assets/js/main.js` under the `i18n` object.

## Notes
No external dependencies. Uses plain HTML/CSS/JS.
