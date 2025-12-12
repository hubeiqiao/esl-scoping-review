# AI-Powered ESL Speaking System Design Research

This repository hosts the static website for the scoping review titled **"Theories and Mechanisms for AI-Powered ESL Speaking System Design"** by **Joe (Beiqiao) Hu**.

The website presents findings from a systematic scoping review synthesizing 17 empirical studies (2015-2025) to map theories and instructional mechanisms for AI-powered speaking practice systems.

## Project Structure

- **`index.html`**: The main landing page containing the full report, visualizations, and interactive elements.
- **`Mechanisms_...pdf`**: The full PDF report (v6, Dec 1, 2025).

## Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling with CSS variables, Flexbox/Grid, and responsive design (no external frameworks).
- **Embedded Assets**: SVG icons and Google Fonts (`Fraunces`, `Source Serif 4`, `JetBrains Mono`).

## Deployment

### Cloudflare Pages

This project is optimized for deployment on **Cloudflare Pages**.

1. **Connect Git**: Link this repository to your Cloudflare account.
2. **Build Settings**:
   - **Framework Preset**: None (Static HTML)
   - **Build Command**: (Leave empty)
   - **Build Output Directory**: `/` (Root)

### Manual Deployment (Wrangler CLI)

You can also deploy directly from the command line using Wrangler:

```bash
npx wrangler pages deploy . --project-name esl-scoping-review
```

## License

&copy; 2025 Joe (Beiqiao) Hu. All rights reserved.
