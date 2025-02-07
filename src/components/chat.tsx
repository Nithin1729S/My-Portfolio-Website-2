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

// Resume-based responses mapped to the corresponding premade questions
const responses: Record<string, string> = {
  "who are you?": `I'm Nithin S, a B.Tech student in Information Technology with a minor in Machine Learning at the National Institute of Technology Karnataka, Surathkal. I have a strong foundation in programming, algorithms, and full-stack development.`,
  "what's your favorite programming language?": `I enjoy working with multiple languages, including C/C++, Python, Java, and JavaScript. Python stands out for its versatility, especially in Machine Learning projects, while C/C++ is great for competitive programming.`,
  "tell me about your work experience.": `I am currently a Research Intern at the Healthcare Analytics & Language Engineering Lab under Dr. Sowmya Kamath S. My work involves training NLP models like BioClinicalBERT and BioMedCLIP to generate radiology reports from chest X-rays.`,
  "tell me about your projects.": `I've completed a range of projects such as AesPA-Net for image style transfer using CNNs, a Web3 Vault DApp for decentralized password management, AniTalk—an anime discussion forum built with Django, and Pixel Plate, a MERN stack food ordering app with real-time updates.`,
  "tell me about your current position.": `In my current role as a Research Intern, I focus on training and fine-tuning NLP models to interpret chest X-ray images and generate detailed radiology reports, achieving notable performance metrics.`,
  "do you have certifications?": `Yes, I hold certifications in Data Structures & Algorithms (Abdul Bari), Machine Learning (Andrew Ng), Java Programming (Abdul Bari), and Full Stack Web Development (Udemy).`,
  "hi": `Hi, there`,
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

  const submitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!messageSchema.safeParse(input).success) return;
  
    const lowercaseInput = input.toLowerCase().trim(); // Convert input to lowercase
  
    // Create a user message object and add it to state
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input, // Keep original case for UI display
    };
  
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
  
    // After 1 second, simulate an assistant response using resume content
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          responses[lowercaseInput] || "I'm sorry, I don't have information on that.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
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
