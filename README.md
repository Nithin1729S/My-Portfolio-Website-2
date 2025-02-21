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
