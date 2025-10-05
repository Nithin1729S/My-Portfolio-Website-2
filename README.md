# My Portfolio Website 

My Minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features an AI-powered chat interface using Google's Gemini API that simulates conversations with me.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **AI Integration**: Personal AI clone powered by Google's Gemini API  
- **Rate Limiting**: Redis-based rate limiting for API protection
- **Responsive Design**: Optimized for all devices

## Live Demo

Visit the live site: [https://nithins.vercel.app](https://nithins.vercel.app/)

## Tech Stack

- Next.js 15 
- Node 20.17.0
- TypeScript
- Tailwind CSS
- Redis
- Google Gemini API

## High Level Design of Chat bot

  <img width="647" height="894" alt="pako_eNpd0ltv2jAUAOC_Yp1nQJiQQvIwiYZeWLW1gvWhS_pgJQdizZfUdta1iP9ex0C6LU-O_Z2b7D2UukJIYSv0a1kz48iPZaGI_xb5o0VD3FuDlki0lu3wmQyHX8hlntVY_iKNQckqJAZto5VF-3yMvPSKPPmoDmf5Gl1rFBG6ZKK3f9PvOshlvkFVefHSonXEaeLr_0bj6REvA7vyrNsmZdeEJdn9enPKdhXA9X9gjRW3xDCHQ8Eldy" src="https://github.com/user-attachments/assets/3a7ecc6e-7110-4a42-89f8-b0f511d96135" />

## Rate limiting using Redis

<img width="784" height="823" alt="pako_eNpdk1tv2zAMhf8KoacNSAs7idPYwDa0SS_pHW32sDnFoMiMLcyRMknuLch_Hy3XnTs_OfF3eEgeacuEzpAlbFXqJ1Fw42A-XSig5zCdKaHXUuVweDuDO_xToXUPsLf3FY7Syc3dPUwKFL8fGvyIPsAJl6UHJukdusooGAYDONFmKbMMVRe95dZ6dJpOtFIoHDhNLpm0hDXg1APHW_8viAaTWoGthEBrV1X5bdegx3XNa-0FJ615RO" src="https://github.com/user-attachments/assets/f2d28045-0b10-4c33-b1aa-ddf32b7daee8" />

## Environment Variables

Create a `.env` file in the root directory with:

```env
REDIS_URL=your-redis-connection-string
GOOGLE_GEMINI_API_TOKEN=your-gemini-api-token
DEBUG=true
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Nithin1729S/My-Portfolio-Website-2.git
   ```

2. Navigate to the project directory:
   ```
   cd My-Portfolio-Website-2
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Installation through Docker

1. Clone the repository:
   ```
   git clone https://github.com/Nithin1729S/My-Portfolio-Website-2.git
   ```

2. Navigate to the project directory:
   ```
   cd My-Portfolio-Website-2
   ```

3. Build the Docker Container:
   ```
   docker build -t portfolio .
   ```

4. Run the container:
   ```
   docker run -p 3000:3000 --env-file .env.local portfolio
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.
