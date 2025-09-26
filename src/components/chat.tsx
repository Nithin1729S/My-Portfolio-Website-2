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

const resumeContext = `
Name: Nithin S
Mobile Number: +918431751290 ,
Email: sureshnithin1729@gmail.com ,
Github Username: Nithin1729S,
Linkedin Link: https://www.linkedin.com/in/nithin1729s/ ,

Education

National Institute of Technology Karnataka, Surathkal | 9.49 CGPA
Nov 2022 - Aug 2026
B.Tech in Information Technology and Minor in Machine Learning 
Relevant Courses: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networking, Web Technologies, Object Oriented Programming, Mathematics for Machine Learning and Data Science.

Technical Skills
Languages: C, C++, Python, Java, Go, TypeScript/JavaScript
Technologies/Frameworks: HTML/CSS, ReactJS, NextJS, NodeJS, ExpressJS, SQL, Flask, Django, FastAPI, Spring Boot
Developer Tools: Linux, Git/GitHub, Docker, K8s, MongoDB, APIs, Cloudinary, Firebase, Streamlit, Vercel, Postman
Certifications: Data Structures & Algorithm (Abdul Bari), Machine Learning Specialization (Andrew Ng), Java Programming (Abdul Bari), Full Stack Web Development (Udemy)

Experience

Google India - Software Engineering Intern 
May 2025 - Aug 2025
Google Ads Bengaluru
• Tools/Frameworks: LLM Fine-Tuning & Distillation, Data Pipeline Development , SQL Optimization, Ads Serving
Systems, Experimental Design & Analysis, C++, Python.
• Enhanced local ad targeting precision by fine-tuning a Large Language Model (LLM) and employing distillation
techniques to create a performant model for matching user queries to optimal ads.
• Designed and implemented a robust, scalable pipeline with highly optimized SQL queries to process and extract training
data from various large-scale log systems.
• Authored C++ code to integrate the distilled LLM into the low-latency ads serving infrastructure, ensuring seamless
production deployment.
• Conducted and analyzed an experimental study to quantify the performance gains and feasibility of the LLM-based ad
matching, establishing a successful proof of concept.

Projects
Image Style Transfer using CNNs | AesPA-Net, Python, PyTorch, Flask, Tailwind CSS
• Implemented AesPA-Net, a novel Neural style transfer network, incorporating the VGG19 architecture for applying style of style image to content image with minimal style and content loss.
• Created a Flask web application using AesPA-Net for aesthetic pattern-aware style transfer, allowing users to transform their content into artistic styles through a user-friendly interface.
AI Resume Insights | Langchain, Gemini API, Django, Next.js, TypeScript, PostgreSQL, Docker
• Developed an AI-powered resume evaluation system using Langchain agents with Gemini LLM, analyzing resumes on multiple metrics and providing detailed scores with improvement suggestions.
• Built a Django backend with PostgreSQL for user management, enabling resume score history tracking with interactive graphs and AI-generated skill-based quizzes. Integrated Google OAuth 2.0 using NextAuth.
Neuro Sudoku | Pytorch, OpenCV, Vision Transformer (ViT), FastAPI, Next.js, TypeScript 
• Developed a full-stack web application that extracts Sudoku grids from uploaded images, recognizes digits using a custom ViT model fine-tuned on the extended EMNIST dataset, and solves puzzles via a backtracking algorithm.
• Integrated OpenCV for image preprocessing and built a responsive UI with Next.js alongside a FastAPI backend for real-time performance.
Distributed P2P File Storage | Golang, TCP, Encryption, Content-Addressable Storage
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
  "who are you?": `Hi! I'm Nithin S, a B.Tech IT student at NITK Surathkal with a Minor in Machine Learning. I enjoy building AI/ML systems and full-stack projects.`,

  "what's your favorite programming language?": `I work with C++, Python, Java, Go, and TypeScript/JS. Python is my favorite—great for ML and prototyping ideas quickly.`,

  "tell me about your work experience.": `I interned at Google Ads, where I fine-tuned and distilled an LLM to build a dual encoder model for better ad targeting. I designed scalable data pipelines, optimized SQL queries, and integrated the model into Google's low-latency ad serving stack.`,

  "tell me about your projects.": `Some key projects:
- AesPA-Net: Neural style transfer with CNNs for artistic image transformations.  
- AI Resume Insights: LLM-powered resume scoring with Django + Next.js.  
- Neuro Sudoku: Computer vision + ViT model to extract & solve Sudoku puzzles.  
- P2P File Storage: Secure, distributed file storage in Go with encryption.`,

  "tell me about your current position.": `I recently completed my internship at Google Ads, focusing on LLM fine-tuning, scalable pipelines, and production deployment.`,

  "do you have certifications?": `Yes, I hold Andrew Ng's Machine Learning and Deep Learning Specializations, which strengthened my ML fundamentals.`,

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
      
      
      const prompt = `Below is my resume context:\n\n${resumeContext}\n\nUser Question: ${input.split(' ').slice(0, 10).join(' ')}\n\nAnswer as if you are Nithin S. Keep responses short and humble. Just answer what's asked. Don't boast. Don't over-explain. If the information is not in the resume, say: "Sorry, I don't have information on that."`;
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
        content: trimmedResult|| data.error ||  "I didn't get you. Could you please try again?",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      //console.error("Error fetching prediction:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:"Oh no, something went wrong on my end. Please try again in a bit.",
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
