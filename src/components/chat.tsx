"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "@/providers/chat-provider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Plane from "@/assets/icons/plane.svg";
import { z } from "zod";

import Loading from "@/assets/icons/loading.svg";
import XMark from "@/assets/icons/x-mark.svg";
import { AnimatePresence, motion } from "framer-motion";




const premadeQuestions = [
  {
    buttonName: "Who are you",
    question: "Who are you?",
  },
  {
    buttonName: "Favorite language",
    question: "What's your favorite programming language?",
  },
  {
    buttonName: "Experience",
    question: "Tell me about your work experience.",
  },
  {
    buttonName: "Projects",
    question: "Tell me about your projects.",
  },
  {
    buttonName: "Current job",
    question: "Tell me about your current position.",
  },
  {
    buttonName: "Certifications",
    question: "Do you have certifications?",
  },
];

const messageSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/.*[^ ].*/);

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const resumeContext = `Nithin S
+91 8431751290 | sureshnithin1729@gmail.com | Linkedin | github.com/Nithin1729S | My Portfolio
Education
National Institute of Technology Karnataka, Surathkal | 9.56 CGPA
Nov 2022 - Aug 2026
B.Tech in Information Technology and Minor in Machine Learning
Relevant Courses: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networking, Web Technologies, Object Oriented Programming, Mathematics for Machine Learning and Data Science.
Technical Skills
Languages: C, C++, Python, Java, Go, TypeScript/JavaScript
Technologies/Frameworks: HTML/CSS, ReactJS, NextJS, NodeJS, ExpressJS, SQL, Flask, Django, FastAPI, Spring Boot
Developer Tools: Linux, Git/GitHub, Docker, K8s, MongoDB, APIs, Cloudinary, Firebase, Streamlit, Vercel, Postman
Certifications: Data Structures & Algorithm (Abdul Bari), Machine Learning Specialization (Andrew Ng), Java Programming (Abdul Bari), Full Stack Web Development (Udemy)
Internships
Healthcare Analytics & Language Engineering Lab | Demo | GitHub | Medium
April 2024 - July 2024
Research Intern under Dr. Sowmya Kamath S (Paper under review)
halelabnitk.github.io
• Tools/Framework: BioClinicalBERT, BioMedCLIP, PyTorch, Python, Streamlit
• Trained a Natural Language Processing (NLP) model to interpret chest X-ray images and generate radiology reports by fine-tuning BioClinicalBERT and BioMedCLIP hugging face transformers.
• Achieved a BLEU-3 score of 0.298 and an average BERT score of 0.87, with models deployed on Streamlit.
Projects
Image Style Transfer using CNNs | AesPA-Net, Python, PyTorch, Flask, Tailwind CSS | GitHub | Demo | Medium
• Implemented AesPA-Net, a novel Neural style transfer network, incorporating the VGG19 architecture for applying style of style image to content image with minimal style and content loss.
• Created a Flask web application using AesPA-Net for aesthetic pattern-aware style transfer, allowing users to transform their content into artistic styles through a user-friendly interface.
AI Resume Insights | Langchain, Gemini API, Django, Next.js, TypeScript, PostgreSQL, Docker | GitHub | Demo
• Developed an AI-powered resume evaluation system using Langchain agents with Gemini LLM, analyzing resumes on multiple metrics and providing detailed scores with improvement suggestions.
• Built a Django backend with PostgreSQL for user management, enabling resume score history tracking with interactive graphs and AI-generated skill-based quizzes. Integrated Google OAuth 2.0 using NextAuth.
Neuro Sudoku | Pytorch, OpenCV, Vision Transformer (ViT), FastAPI, Next.js, TypeScript | GitHub | Demo
• Developed a full-stack web application that extracts Sudoku grids from uploaded images, recognizes digits using a custom ViT model fine-tuned on the extended EMNIST dataset, and solves puzzles via a backtracking algorithm.
• Integrated OpenCV for image preprocessing and built a responsive UI with Next.js alongside a FastAPI backend for real-time performance.
Distributed P2P File Storage | Golang, TCP, Encryption, Content-Addressable Storage | GitHub
• This project implements a distributed file storage system that leverages content-addressable storage and AES-CTR encryption, ensuring that files are securely stored, deduplicated, and retrievable by their unique hashed keys.
• It features a custom TCP-based peer-to-peer networking layer for dynamic file sharing, robust message handling, and efficient peer discovery.
Achievements
Branch Change: Successfully transferred to Information Technology with a CGPA of 9.76 after the first year.
Coding Platforms: Solved 980+ problems and rated 1706 (max) on Leetcode .
Class 12: Ranked third among Karnataka State board exam takers with a score of 99.68%.
Class 10: Achieved the fifth-highest state ranking in the Karnataka State board exam scoring 99.36%.
Leadership / Extracurricular
The Indian Society for Technical Education, NITK Chapter
Dec 2022 - Present
Executive Member
iste.nitk.ac.in
• Mentored over 50+ students under Summer Mentorship Programme ’24, worked on 2 projects under Crypt SIG.
The Institute of Electrical and Electronics Engineers
Nov 2022 - July 2023
Student Member
ieee.nitk.ac.in
• Involved in a project that aims to simulate a Robotic arm using the Robot Operating System (ROS).`;

// Resume-based responses mapped to the corresponding premade questions
const responses: Record<string, string> = {
  "who are you?": `Hey there! I'm Nithin S. I'm a B.Tech student in Information Technology with a Minor in Machine Learning at NITK Surathkal. I love diving into coding, AI projects, and full-stack development!`,

  "what's your favorite programming language?": `That's a fun one! I work with languages like C, C++, Python, Java, Go, and TypeScript/JavaScript. But if I had to pick, Python is my favorite for its flexibility—especially when I'm working on AI/ML projects.`,

  "tell me about your work experience.": `Sure! I recently wrapped up a stint as a Research Intern at the Healthcare Analytics & Language Engineering Lab under Dr. Sowmya Kamath S. I got to fine-tune NLP models like BioClinicalBERT and BioMedCLIP to generate radiology reports from chest X-rays. It was a really rewarding experience!`,

  "tell me about your projects.": `I've had the chance to work on some really cool projects:
  
- AesPA-Net: A neural style transfer network that uses CNNs to blend artistic styles.
- AI Resume Insights: An AI-driven tool that evaluates resumes using Langchain and Gemini LLM.
- Neuro Sudoku: A full-stack web app that extracts and solves Sudoku puzzles using computer vision and a backtracking algorithm.
- Distributed P2P File Storage: A Go-based project that implements a secure, peer-to-peer file storage system.
  
Each project has taught me something new and helped me sharpen my skills!`,

  "tell me about your current position.": `At the moment, I'm a Research Intern at the Healthcare Analytics & Language Engineering Lab. My focus is on training NLP models to interpret chest X-rays—a challenging role that's both exciting and deeply fulfilling!`,

  "do you have certifications?": `Yes, I do! I have certifications in Data Structures & Algorithms (Abdul Bari), Machine Learning (Andrew Ng), Java Programming (Abdul Bari), and Full Stack Web Development (Udemy). They’ve been a great boost to my skills and career!`,

  "hi": `Hi there!`,
};


export default function Chat() {
  const { chatOpen, setChatOpen } = useContext(ChatContext);
  const scrollBottomAnchor = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to bottom when messages update
  const scrollToBottom = () => {
    if (scrollBottomAnchor.current) {
      scrollBottomAnchor.current.scrollTo({
        top: scrollBottomAnchor.current.scrollHeight,
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Build the prompt by combining your resume context and the user's question.
      if (responses[input.toLowerCase()]) {
        // Wait for 1 second so the loading indicator (three dots) shows up.
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const assistantMessage: Message = {
          id: Date.now() + 1,
          role: "assistant",
          content: responses[input.toLowerCase()],
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
        return;
      }
      
      
      const prompt = `Below is my resume context:\n\n${resumeContext}\n\nUser Question: ${input.split(' ').slice(0, 10).join(' ')}\n\nAnswer as if you are Nithin S. Make sure not to answer explicit questions:`;

      // Call your API route which proxies the Replicate API call.
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      const data = await response.json();
      let trimmedResult = "";
      if (data.result && typeof data.result === "string") {
        trimmedResult = data.result.trim();
      }

      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: trimmedResult|| data.error ||  "I didn't you. Could you please try again?",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      //console.error("Error fetching prediction:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "user",
          content:"Oops, I seem to have lost my train of thought. Can you try asking that again?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {chatOpen && (
        <motion.section
          id="chat"
          className="relative z-0 scroll-mt-16 overflow-visible before:absolute before:-inset-6 before:top-0 before:-z-10 before:rounded-3xl before:bg-slate-200 before:content-['']"
          aria-label="Dummy Chat App"
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            marginBottom: "6rem",
          }}
          exit={{
            opacity: 0,
            height: 0,
            marginBottom: 0,
          }}
        >
          <div className="relative flex flex-col justify-between">
            <Button
              size="icon"
              className="absolute -top-12 left-[calc(100%-1rem)] z-10 rounded-full hover:bg-slate-200 xl:left-[calc(100%+2rem)] xl:top-0"
              variant="ghost"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              <XMark className="size-4" aria-hidden="true" />
            </Button>

            <div
              ref={scrollBottomAnchor}
              className="chatbox scrolling-touch scrolling-gpu relative mr-auto h-96 w-full space-y-4 overflow-y-auto overscroll-auto direction-reverse md:h-72"
            >
              <div className="sticky top-0 h-12 w-full" aria-hidden="true" />

              {/* Initial assistant greeting */}
              <div className="mr-auto w-10/12 max-w-fit rounded-2xl rounded-tl-none bg-skeptic-400 px-5 py-2.5 transition-all">
                <p className="text-sm font-medium text-white">
                  Hey! What would you like to learn about me?
                </p>
              </div>

              {messages.map((message) => {
                if (message.role === "user") {
                  return (
                    <div
                      className="ml-auto w-8/12 max-w-fit rounded-2xl rounded-br-none bg-slate-300 px-5 py-2.5"
                      key={message.id}
                    >
                      <p className="text-sm font-medium text-skeptic-900">
                        {message.content}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="mr-auto w-11/12 max-w-fit rounded-2xl rounded-tl-none bg-skeptic-400 px-5 py-2.5 transition-all"
                      key={message.id}
                    >
                      <p className="whitespace-pre-line text-sm font-medium text-white">
                        {message.content}
                      </p>
                    </div>
                  );
                }
              })}

              {isLoading && <Loading className="ml-4 size-10" />}
            </div>

            <ul
              className="questions mt-8 flex gap-1 overflow-x-auto overflow-y-visible"
              aria-label="Premade questions"
            >
              {premadeQuestions.map((q) => (
                <li key={q.buttonName}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs text-skeptic-900"
                    onClick={() => setInput(q.question)}
                    aria-label={`Ask ${q.buttonName}`}
                  >
                    {q.buttonName}
                  </Button>
                </li>
              ))}
            </ul>

            <form className="mt-2 flex gap-2" onSubmit={submitMessage}>
              <Input
                value={input}
                onChange={(event) =>
                  event.target.value.length < 80 && setInput(event.target.value)
                }
                className="border-2 text-skeptic-900 !ring-skeptic-600"
                placeholder="Ask a question"
                disabled={isLoading}
              />
              <Button
                className="bg-skeptic-500 !ring-skeptic-600 hover:bg-skeptic-400"
                type="submit"
                size="icon"
                disabled={!input || isLoading}
                aria-label="Send message"
              >
                <Plane className="size-5" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
